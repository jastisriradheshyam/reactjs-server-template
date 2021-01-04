import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getExampleList } from '../apis/example';

const ExampleListing = function () {

  const [jsonList, setJSONList] = useState([]);

  useEffect(() => {
    // Your code here
    getExampleList()
      .then(exampleList => {
        setJSONList(exampleList);
      }).catch(err => {console.error(err); toast.error("hello");});
  }, []);

  return (
    <>
      <ul> {jsonList.map(element => {
        return <li key={element.id}>{element.name}</li>;
      })} </ul>
    </>
  );
};

export default ExampleListing;