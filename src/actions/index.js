import {URLfakeREST,URL_WCAPI} from './../config';
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

export function getNews(){
    const request=axios.get(`${URL_WCAPI}/matches`).then((res)=>{
        console.log(res);
        return res.data;
    })

    return{
        type:"GET_NEWS_LIST",
        payload:request
    }

}