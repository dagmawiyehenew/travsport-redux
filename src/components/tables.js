import React, { useEffect, useState } from "react";
import Loader from "../common/loader";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdb-react-ui-kit";
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


  useEffect(() => {
    setLoading(true);
    let interval = setInterval(() => {
       fetchData();
    }, 15000);
    return () => {
      clearInterval(interval);
     
    };
  }, []);

  const {_result} = props.race;


  return Loading ? (
    <Loader />
  ) : (
    
    <div className="bg-image h-100" >
      <div className=" d-flex align-items-center h-100">
        <MDBContainer>
          <div className="row justify-content-center">
            <div className="col-12">
            {_result?.length > 0 ?
              <div className="card shadow-2-strong mb-5">
                <div className="card-body p-0">
                
                  <MDBTable striped hover>
                    <MDBTableHead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                     {_result?.map((horse, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{horse.horse.id}</th>
                            <td>{horse.horse.name}</td>
                            <td>{horse.event}</td>
                            <td>{horse.time}</td>
                          </tr>
                        );
                      })}
                    </MDBTableBody>
                  </MDBTable>
                  
                </div>
              </div>
              : <Loader />}
            </div>
          </div>
        </MDBContainer> 
      </div>
    </div>
  
  );
};
