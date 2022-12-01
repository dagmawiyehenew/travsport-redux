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

  const {_result} = props.race;
  console.log(props.race._result)
  useEffect(() => {
    let interval = setInterval(() => {
       fetchData();
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
       {
        _result.map((item, i) => {
            return <li key={i}>{item.horse.id} {item.event} {item.horse.name} {item.time}</li>
        })
       }
    </>
  );
};
