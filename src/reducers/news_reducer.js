export default function(state={},action){

    switch(action.type){

        case "GET_NEWS_LIST":
        return {...state,getNewsList:action.payload}
        break;

        default:
        return state;
    }
}   