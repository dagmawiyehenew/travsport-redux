import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
function LayoutAuth({ children }) {
  return (
    <MDBContainer fluid className="mt-5">
      {children}
    </MDBContainer>
  );
}

export default LayoutAuth;
