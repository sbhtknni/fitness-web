import React from 'react';
import { MDBTable, MDBIcon, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
//genrate table

export default function ExpertTable(props) {
  const { data } = props;
  console.log("--data" , data);

  // table it will be look like this
  //  #	Program Name | averageWeightLossPerDay | daysInEachProgram | weightLossPerProgram
  // 1	Option B  -5	2	-10

  const allDays = Object.values(data.daysInEachProgram);
  const alldays = allDays.reduce((a, b) => a + b, 0);

  const tableHead = () => {
    return (
      <tr>
        <th></th>
        <th className='fw-bolder'>Program Name</th>
        <th className='fw-bolder'>Average Gain / Loss per day</th>
        <th className='fw-bolder' >Total Days</th>
        <th className='fw-bolder' >Total Gain / Loss </th>
      </tr>
    );
  };

  const tableBody = () => {
    let tableRows = [];
    let i = 0;
    //Take Only last 10 programs
    for (const key in data.averageWeightLossPerDay) {
      i++;
      const averageWeightLoss = data.averageWeightLossPerDay[key].toFixed(1);
      const daysInProgram = data.daysInEachProgram[key];
      const weightLoss = data.weightLossPerProgram[key].toFixed(1);

      const averageWeightLossClass = averageWeightLoss < 0 ? 'fw-bolder text-success' : 'fw-bolder text-danger';
      const averageWeight = averageWeightLoss < 0 ? 'caret-down' : 'caret-up';
      const weightLossClass = weightLoss < 0 ? 'fw-bolder text-success' : 'fw-bolder text-danger';
      const totalWeight = averageWeightLoss < 0 ? 'caret-down' : 'caret-up';

      tableRows.push(
        <tr key={i} className='fw-bolder'>
          <td>{i}</td>
          <td className='fw-bolder'>{key}</td>
          <td className={averageWeightLossClass}><MDBIcon className='me-1' fas icon={averageWeight} /> {averageWeightLoss}</td>
          <td >  {daysInProgram}</td>
          <td className={weightLossClass}><MDBIcon className='me-1' fas icon={totalWeight} />{weightLoss}</td>
        </tr>
      );

    }
    //Best Program
    tableRows.push(
      <tr key={'best-program'} className='table-success'>
        <th scope='row'></th>
        <td className='fw-bolder' colSpan={2}>Best For You</td>
        <td className='fw-bolder'>{data.max}</td>
        <td></td>
      </tr>
    );
    //Worst Program
    tableRows.push(
      <tr key={'worst-program'} className='table-danger'>
        <th scope='row'></th>
        <td className='fw-bolder' colSpan={2}>Worst For You</td>
        <td className='fw-bolder'>{data.min}</td>
        <td></td>
      </tr>
    );

    tableRows.push(
      <tr key={'total-days'} className='table-primary'>
        <th scope='row'></th>
        <td className='fw-bolder' colSpan={2}>Total Days In All Programs</td>
        <td className='fw-bolder'>{alldays}</td>
        <td></td>
      </tr>
    );


    return tableRows;
  };


  return (
    <MDBTable hover>
      <MDBTableHead dark className='text-center'>{tableHead()}</MDBTableHead>
      <MDBTableBody className='text-center' >{tableBody()}</MDBTableBody>
    </MDBTable>
  );
};

