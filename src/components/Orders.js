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
import { ledgerState } from '../atoms/ledgerAtom';
import { latestLedgerState } from '../selectors/ledgerSelector';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

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
  
  console.log("====DATA====");
  console.log(data.length)
  console.log(data);

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
      if(rowArray[attrib] != ""){
        changesString += ` ${attrib}: ${rowArray[attrib]}` ;
      }
    }
  }
  return changesString;
};

export default Orders;