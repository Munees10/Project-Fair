import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login
export const loginAPI  = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//Add Projects
export const addProjectAPI = async (reqbody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqbody,reqHeader)

}

//home projects
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")

}

//all project
export const allProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all`,"",reqHeader)

}