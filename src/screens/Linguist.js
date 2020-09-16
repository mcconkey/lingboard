/* eslint-disable array-callback-return */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { rosterState } from '../atoms/rosterAtom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Linguist = () => {
    let { linguistKey } = useParams();

    const roster = useRecoilValue(rosterState);
    let linguistNotFound = false;
    let linguist = {};
    if(roster.hasOwnProperty(linguistKey)){
        linguist = roster[linguistKey];
    }else{
        linguistNotFound = true;
    }

    return(
            <React.Fragment>
            {linguistNotFound &&
                <h1>Linguist not found</h1>
            }
            {!linguistNotFound &&
                <h1>{linguist.name}</h1>} 
            <Table size="small" >
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
            
            {!linguistNotFound && linguist.ledgerRows.map((row) => (
                   
                    <TableRow key={row.timestamp}>
                        <TableCell>{row.timestamp}</TableCell>
                        <TableCell>{row['listening']}</TableCell>
                        <TableCell>{row['reading']}</TableCell>
                        <TableCell>{row['trainingHours']}</TableCell>
                        <TableCell>{row['nextSLTE']}</TableCell>
                    </TableRow>
            ))}
                </TableBody>
                </Table>
            
            
       </React.Fragment>);
}



export default Linguist;