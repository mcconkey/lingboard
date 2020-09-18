import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import { useRecoilValue } from 'recoil';
import { latestLedgerState } from '../selectors/ledgerSelector';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Orders = () => {
  const classes = useStyles();

  //const data = useRecoilValue(ledgerState);
  const data = useRecoilValue(latestLedgerState);

  return (
    <React.Fragment>
      <Title>Recent Ledger Entries</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length && data.map((row) => (
            <TableRow>
              <TableCell>{row.data.timestamp}</TableCell>
              <TableCell>{row.data.firstName + " " + row.data.lastName}</TableCell>
              <TableCell>{displayChange(row.data)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
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

export default Orders;