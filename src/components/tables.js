import React, { useEffect } from "react";

export const ResultsTable = (props) => {
  const fetchData = async () => {
    const data = await props.getResults();
    console.log(data.result);
  };

  console.log(props)
  useEffect(() => {
    let interval = setInterval(() => {
      // fetchData();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>table</h1>
    </>
  );
};
