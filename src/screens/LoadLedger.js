import React, { useCallback } from 'react';
import { Paper } from '@material-ui/core';
import { CSVReader } from 'react-papaparse'
import useStyles from '../styles/styles';
import { connect } from 'react-redux';
import { setLedger } from '../store/actions/ledgerActions';

const LoadLedger = ({ledger}) => {

    console.log(ledger);

    const handleOnDrop = (data) => {
        setLedger(data);
        console.log('------------LEDGER THING---------------')
        console.log(ledger);
        console.log('---------------------------')
      }
    
    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
      }
    
    const handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
      }
    
    return (
        <div>
        <h1>Load Ledger</h1>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
        </div>
    );
};

const mapStateToProps = state => {
    const { ledger } = state;
    console.log("called to mapState");
    return ledger;
};

export default connect(
    mapStateToProps,
    { setLedger },
  )(LoadLedger);
