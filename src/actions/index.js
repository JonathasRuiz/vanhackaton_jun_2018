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

export function todayMatches(){
    const request=axios.get(`${URL_WCAPI}/matches/today`).then((res)=>{
        console.log(res);
        return res.data;
    })

    return{
        type:"GET_TODAY_MATCHES",
        payload:request
    }

}

export function allMatches(){
    const request=axios.get(`${URL_WCAPI}/matches`).then((res)=>{
        console.log(res);
        return res.data;
    })

    return{
        type:"GET_ALL_MATCHES",
        payload:request
    }

}

export function getTeams(){
    const request=axios.get(`${URL_WCAPI}/teams`).then((res)=>{
        console.log(res);
        return res.data;
    })

    return{
        type:"GET_TEAMS_LIST",
        payload:request
    }

}

export function getMatchDetails(fifaid){
    const request=axios.get(`${URL_WCAPI}/matches/today?fifa_id=${fifaid}`).then((res)=>{
        console.log(res);
        return res.data;
    })

    return{
        type:"GET_MATCH_DETAILS",
        payload:request
    }

}

export function getTeamDetails(country){
    const request=axios.get(`${URL_WCAPI}/teams/results?fifa_code=${country}`).then((res)=>{
        // console.log(res);
        return res.data;
    })

    return{
        type:"GET_TEAM_DETAILS",
        payload:request
    }

}