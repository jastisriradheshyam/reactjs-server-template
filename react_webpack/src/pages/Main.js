import React from "react";
import DynamicLoad from "../components/DynamicLoad";
import ExampleListing from "../components/ExampleListing";
const Main = function () {
  return (
    <>
      <DynamicLoad loadType="css" relativePath="main.css" />
      <ExampleListing />
    </>
  );
};

export default Main;
