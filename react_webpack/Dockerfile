# ====================
# build environment
# ====================
FROM node:12.18.3-alpine3.12 as builder

## Install build toolchain, install node deps and compile native add-ons
RUN apk add --no-cache --virtual .gyp python2 make g++

# Setting working directory
WORKDIR /app

# App binaries
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package*.json ./
RUN npm ci --silent
COPY ./scripts/ ./scripts
COPY ./public/ ./public
COPY ./.babelrc ./.babelrc
COPY ./webpack.config.js ./webpack.config.js
COPY ./src/ ./src
RUN GENERATE_SOURCEMAP=false npm run build

# ====================
# production environment
# ====================
FROM nginx:1.18-alpine

LABEL maintainer="Jasti Sri Radhe Shyam"
LABEL description="Webpack React app"

COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/scripts/nginx_route.conf /etc/nginx/conf.d/nginx_route.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]