export const ADD_LINGUIST = "ADD_LINGUIST";

export const addLinguist = (linguist) => {
    return({
        action: ADD_LINGUIST, 
        payload: {
            linguist
        },    
    });
}