export default function(state={},action){

    switch(action.type){

        case "GET_TODAY_MATCHES":
        return {...state,getTodayMatches:action.payload}
        break;

        default:
        return state;
    }
}   