import React, { useEffect } from "react";

export const ResultsTable = (props) => {
  const fetchData = async () => {
    await props.getResults().then((data) => {
        if(data.code === 'ERR_BAD_REQUEST') props.loginUser(JSON.parse(localStorage.getItem('credential')));

        console.log(data);

    }).catch((error) => {
      console.log(error);
    });
  };

  console.log(props.race._result)
  useEffect(() => {
    //let interval = setInterval(() => {
       fetchData();
    //}, 1000);
    return () => {
      //clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>table</h1>
    </>
  );
};
