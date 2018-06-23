export default function(state={},action){

    switch(action.type){

        case "GET_TEAM_DETAILS":
        return {...state,teamDetails:action.payload}
        break;

        default:
        return state;
    }
}   