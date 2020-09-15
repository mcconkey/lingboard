import React, { useEffect, useState } from 'react';
import { CSVReader } from 'react-papaparse'
import { useRecoilState } from 'recoil';
import { ledgerState } from '../atoms/ledgerAtom';
import { rosterState } from '../atoms/rosterAtom';
import { Linguist } from '../classes/Linguist';
import { toUrl } from '../utility/utilities';

const LoadLedger = () => {

    const [ledger, setLedger] = useRecoilState(ledgerState);
    const [roster, setRoster] = useRecoilState(rosterState);

    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        setLedger(loadedData);
    }, [loadedData]);

    //console.log(ledger);

    const handleOnDrop = (data) => {
        setLoadedData(data);
        setRoster(buildRoster(data));
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
          config={{header: true}}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
        </div>
    );
};
/**
 * 
 * @param {Array<Linguists>} dataArray
 * 
 * iterates over parsed data of linguists and assigns them to an array of linguists
 *  builds key from first and last name of passed data
 */
const buildRoster = (dataArray) => {
  let roster = {}; //declare a new roster object
  //iterate over data passed
  console.log(dataArray);
  dataArray.map((row) => {
    // create a name from the row this will be used to key the roster 
    let name = row.data['firstName'] +" " +row.data['lastName'];
    let key = toUrl(name);
    //if the name is not in the roster then add it
    if(!Object.keys(roster).includes(key)){
      let linguist = new Linguist(key); // create a new linguist
      linguist.setName(name);
      linguist.appendToLedger(row.data); // add the ledger row to the linguist
      roster[key] = linguist; // add the lingusit to the roster
    }else{ //else the linguist is already in the roster
      roster[key].appendToLedger(row.data);
    }
  })
  return roster;
};

export default LoadLedger;