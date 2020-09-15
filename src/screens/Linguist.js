import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { rosterState } from '../atoms/rosterAtom';


const Linguist = () => {
    let { linguistName } = useParams();

    const roster = useRecoilValue(rosterState);
    let linguistNotFound = false;
    let linguist = {};
    if(roster.hasOwnProperty(linguistName)){
        linguist = roster[linguistName];
    }else{
        linguistNotFound = true;
    }

    console.log(linguist);

    return(
        <div>
            {linguistNotFound &&
                <h1>Linguist not found</h1>
            }
            {!linguistNotFound &&
                <h1>{}</h1>
                
            }

        </div>
    )
}

export default Linguist;