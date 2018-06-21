import {URLfakeREST} from './../config';
import axios from 'axios';

export function getPostList(){
    const request=axios.get(`${URLfakeREST}`).then((res)=>{
        console.log(res);
        return res.data;
    })

    return{
        type:"GET_POSTS_LIST",
        payload:request
    }

}