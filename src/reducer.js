import * as actions from "./actionTypes";

let lastId = 0;

// STATE
// [
//     {
//         id: 1,
//         description : '',
//         resolved : false
//     },
//     { ... },
//     { ... }
// ]

export default function reducer(state = [], action){
    if(action.type === actions.BUD_ADDED){
        return [
            ...state,
            {
                id : ++lastId,
                description : action.payload.description,
                resolved : false
            }
        ]
    } else if(action.type === actions.BUG_REMOVED){
        return state.filter(bug => bug.id != action.payload.id);
    } else if(action.type === actions.BUG_RESOLVED){
        return state.map((bug) => {
            if(bug.id == action.payload.id){
                return {
                    ...bug,
                    resolved : true
                }
            } else{
                return bug;
            }
        })
    } else {
        return state;
    }
}