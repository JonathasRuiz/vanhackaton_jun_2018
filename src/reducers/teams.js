export default function(state={},action){

    switch(action.type){

        case "GET_TEAMS_LIST":
        return {...state,teamList:action.payload}
        break;

        default:
        return state;
    }
}   