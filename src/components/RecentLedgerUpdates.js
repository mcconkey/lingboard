import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import { useRecoilValue } from 'recoil';
import { latestLedgerState } from '../selectors/ledgerSelector';


const RecentLedgerHistory = () => {

  //const data = useRecoilValue(ledgerState);
  const data = useRecoilValue(latestLedgerState);


  if(data.length < 1){
    return (<></>);
  }
  return (
    <React.Fragment>
      <Title>Recent Ledger Entries</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Changes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length && data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.data.timestamp}</TableCell>
              <TableCell>{row.data.firstName + " " + row.data.lastName}</TableCell>
              <TableCell>{displayChange(row.data)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

const displayChange = (rowArray) => {
  let changesString = "";
  let omitAttribs = ['timestamp', 'firstName', 'lastName'];
  for (const attrib in rowArray) {
   // console.log(attrib);
    if(!omitAttribs.includes(attrib)){
      if(rowArray[attrib] !== ""){
        changesString += ` ${attrib}: ${rowArray[attrib]}` ;
      }
    }
  }
  return changesString;
};

export default RecentLedgerHistory;