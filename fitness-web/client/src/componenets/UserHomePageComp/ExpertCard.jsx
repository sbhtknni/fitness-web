/**
 *  ExpertCard.jsx is the card that displays the table information
 * the card is used in the UserHomePageComp component
 * the card uses the ExpertTable component
 */
import React from "react";
import ExpertTable from "./ExpertTable";
import { MDBCard, MDBCol, MDBCardBody } from "mdb-react-ui-kit";
export default function ExpertCard(props) {
  const { data } = props;
  //  Format the string to be displayed in the card
  console.log("expert card data", data)
  return (

    <MDBCol md='8' >
      <MDBCard className=" h-100">
        <MDBCardBody>
          <div className="h-100 table-responsive">
            <ExpertTable data={data} />
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  );
}
