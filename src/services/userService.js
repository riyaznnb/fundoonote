import axios from 'axios'
import Config from "react-native-config";
import {userApiConstant} from "../constant/userApiConstant"
import { AsyncStorage } from 'react-native';

export function userRegister(data) {
    console.warn("Data", data);
    return axios.post(Config.REACT_API_URL + userApiConstant.signUp, data)
}
export function userLogin(data) {
    
    console.warn("Data", data);
    return axios.post(Config.REACT_API_URL + userApiConstant.login, data)
} 
export function userForgotPassword(data) {
    console.warn("Data", data);
    return axios.post(Config.REACT_API_URL + userApiConstant.reset, data)
}
export async function logoutUser() {
    let token = await AsyncStorage.getItem('fundootoken');
    console.warn(token)
    return axios.post(Config.REACT_API_URL + userApiConstant.logout+"?access_token="+token)
}
export async function getUser(data) {
    console.warn('service data', data);
    let token = await AsyncStorage.getItem('fundootoken');
    return axios.get(Config.REACT_API_URL + userApiConstant.allUser+"?filter="+JSON.stringify(data),{
        headers: {
            Authorization:token
        }
    })
}