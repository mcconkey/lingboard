import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from '../styles/styles';
import { useRecoilValue } from 'recoil';
import { rosterState } from '../atoms/rosterAtom';
import { Link } from 'react-router-dom';
import { toUrl } from '../utility/utilities';

const Roster = () => {
    const classes = useStyles();
    const roster = useRecoilValue(rosterState);

    const isRoster = Object.entries(roster).length === 0 ? false: true;

    if(isRoster){
        console.log(roster);
    }

    return (
        <div>
            <h1>Roster</h1>
        <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 'bold'}}>Name</TableCell>
            <TableCell style={{fontWeight: 'bold'}}>Reading</TableCell>
            <TableCell style={{fontWeight: 'bold'}}>Listening</TableCell>
            <TableCell style={{fontWeight: 'bold'}}>Hours</TableCell>
            <TableCell style={{fontWeight: 'bold'}}>Next SLTE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isRoster && Object.keys(roster).map((key) => (
            <TableRow key={key}>
                <TableCell><Link to={`linguist/${toUrl(key)}`}>{roster[key].name}</Link></TableCell>
                <TableCell>
                    { 
                      roster[key].attributes?.reading?.value ?
                      roster[key].attributes.reading.value : "-"
                    }
                </TableCell>
                <TableCell>
                    { 
                      roster[key].attributes?.listening?.value ? 
                      roster[key].attributes.listening.value : "-" 
                    }
                </TableCell>
                <TableCell>
                    { 
                      roster[key].attributes?.trainingHours?.value ? 
                      roster[key].attributes.trainingHours.value : "-"
                    }
                  </TableCell>
                <TableCell>
                  {
                    roster[key].attributes?.nextSLTE?.value ? 
                    roster[key].attributes.nextSLTE.value : "-"
                  }
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    );
};


export default Roster;