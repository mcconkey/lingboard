import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const LinguistHistory = ({ ledgerRows = {} } : any) => {

    const ledgerHasRows: boolean = Object.keys(ledgerRows).length > 0 ? true : false;

    return(
        <React.Fragment>
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
                
                {ledgerHasRows && ledgerRows.map((row : any) => (
                    
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
        </React.Fragment>
    );
}

export default LinguistHistory;