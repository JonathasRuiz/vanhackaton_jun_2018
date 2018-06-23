export default function(state={},action){

    switch(action.type){

        case "GET_MATCH_DETAILS":
        return {...state,matchDetails:action.payload}
        break;

        default:
        return state;
    }
}   