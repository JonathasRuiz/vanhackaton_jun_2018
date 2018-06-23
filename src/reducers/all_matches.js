export default function(state={},action){

    switch(action.type){

        case "GET_ALL_MATCHES":
        return {...state,allMatches:action.payload}
        break;

        default:
        return state;
    }
}   