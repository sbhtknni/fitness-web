import React from "react";
import {
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import RowOfDetails from "./RowOfDetails";

export default function DetailsCard(props) {
  const { user, training } = props;
  return (
      <MDBCard className="mb-3 d-flex align-items-startmb-5">
        <MDBCardBody>
          <RowOfDetails type="Full Name" value={user.firstName + " " + user.lastName} />
          <RowOfDetails type="Email" value={user.email} />
          <RowOfDetails type="Weight" value={`${user.weight} kg`} />
          <RowOfDetails type="Height" value={`${user.height} cm`} />
          <RowOfDetails type="BMI" value={user.bmi} />
          {training ? (
            <RowOfDetails type="Current Program" value={training} />
          ) : (
            <RowOfDetails type="Current Program" value="choose one program" />
          )}
        </MDBCardBody>
      </MDBCard>
  );
}
