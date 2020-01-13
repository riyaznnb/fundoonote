import axios from 'axios'
import Config from "react-native-config";
import {userApiConstant,noteApiConstant} from "../constant/apiConstant"
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
export async function addNote(data) {
    console.warn("Data", data);
    let token = await AsyncStorage.getItem('token');
    console.warn('token in service',token)
    return axios.post(Config.REACT_API_URL + noteApiConstant.addNote, data, {
        headers: {
            Authorization:token
        }
    })
}
export async function getNote() {
    let token = await AsyncStorage.getItem('token');
    console.log(token)
    return axios.get(Config.REACT_API_URL + noteApiConstant.getNotes, {
        headers: {
            Authorization:token
        }
    })
}