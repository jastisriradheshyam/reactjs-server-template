import React from 'react';

/**
 * Load the js or css dynamically
 * @param {Object} param0 
 * @param {String} param0.loadType load type can be "js"/"css"
 * @param {String} param0.relativePath relative path of "js"/"css" file
 */
const DynamicLoad = function ({ loadType, relativePath }) {
  if (loadType == "css") {
    const href = "/public/style/" + relativePath;
    return <link rel="stylesheet" type="text/css" href={href} />;
  } else if (loadType == "js") {
    const src = "/public/script/" + relativePath;
    return <script type="text/javascript" src={src} />;
  }
};

export default DynamicLoad;