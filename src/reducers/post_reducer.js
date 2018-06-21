export default function(state={},action){

    switch(action.type){

        case "GET_POSTS_LIST":
        return {...state,getPostList:action.payload}
        break;

        default:
        return state;
    }
}   