import axios from 'react-native-axios'
import Config from "react-native-config";
import {userApiConstant,noteApiConstant} from "../constant/apiConstant"
import { AsyncStorage } from 'react-native';

export function userRegister(data) {
    console.warn("Data", data);
    console.warn('api',apiConstant.signUp);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + userApiConstant.signUp, data)
}
export function userLogin(data) {
    console.warn("Data", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + userApiConstant.login, data)
} 
export function userForgotPassword(data) {
    console.warn("Data", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + userApiConstant.reset, data)
}
export async function addNote(data) {
    console.warn("Data", data);
    let token = await AsyncStorage.getItem('token');
    console.warn('token in service',token)
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + noteApiConstant.addNote, data, {
        headers: {
            Authorization:token
        }
    })
}
export async function getNote() {
    let token = await AsyncStorage.getItem('token');
    console.warn('token in service', token)
    console.log(token)
    return axios.get("http://fundoonotes.incubation.bridgelabz.com/api" + noteApiConstant.getNotes, {
        headers: {
            Authorization:token
        }
    })
}