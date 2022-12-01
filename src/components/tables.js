import React, { useEffect, useState } from "react";

export const ResultsTable = (props) => {
  
  const [Loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    await props.getResults().then((data) => {
        if(data.code === 'ERR_BAD_REQUEST') props.loginUser(JSON.parse(localStorage.getItem('credential')));
        if(data && !data.error) setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  };

  const {_result} = props.race;

  useEffect(() => {
    setLoading(true);
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
        Loading ? 'Loading...' : 
        _result.map((item, i) => {
            return <li key={i}>{item.horse.id} {item.event} {item.horse.name} {item.time}</li>
        })
        
       }
    </>
  );
};
