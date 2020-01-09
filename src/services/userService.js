import axios from 'react-native-axios'
import Config from "react-native-config";
import {apiConstant} from "../constant/apiConstant"
import { AsyncStorage } from 'react-native';

export function userRegister(data) {
    console.warn("Data", data);
    console.warn('api',apiConstant.signUp);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.signUp, data)
}
export function userLogin(data) {
    console.warn("Data", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.login, data)
} 
export function userForgotPassword(data) {
    console.warn("Data", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.reset, data)
}
export async function addNote(data) {
    console.warn("Data", data);
    let token = await AsyncStorage.getItem('token');
    console.warn('token in service',token)
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.addNote, data, {
        headers: {
            Authorization:token
        }
    })
}
export async function getNote() {
    let token = await AsyncStorage.getItem('token');
    console.warn('token in service', token)
    console.log(token)
    return axios.get("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.getNotes, {
        headers: {
            Authorization:token
        }
    })
}