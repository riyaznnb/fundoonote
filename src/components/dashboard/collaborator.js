/******************************************************************************************
* @purpose : add colaborator for note in fundoonote application
* @file : collaborator.js
* @author : Riyazuddin K
* @since : 20-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Text, AsyncStorage } from 'react-native'
import {Button} from "react-native-elements";
import StyleSheet from '../../styleSheets'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar } from 'react-native-elements';
import { getUser } from '../../services/userService';
export default class Collaborator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userEmail: '',
            email:''
        }
    }
    handleCollaborator = () => {
        console.warn('userrr')
        const data = {
                "where": {
                "email":this.state.email
            }
        }
        console.warn('user data',data);
        getUser(data).then(res => {
            console.log('return user data',res);
        })
            .catch(error => {
            console.log('return user data error',error)
        })
    }
    componentDidMount() {
        // let userEmail = AsyncStorage.getItem('fundooUserEmail');
        // console.warn('user email', userEmail);
        // this.setState({userEmail:userEmail})
    }
    render() {
        return (
            <View style={StyleSheet.collaboratorContainer}>
                <View style={StyleSheet.collaboratorHeader}>
                    <View style={StyleSheet.collaboratorIconTitle}>
                        <View style={StyleSheet.collaboratorIcon}>
                            <Icons name="close" size={26}/>
                        </View>
                        <View style={StyleSheet.collaboratorTitle}>
                            <Text style={StyleSheet.collaboratorTitleText}>Collaborators</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.handleCollaborator}>
                        <Text style={StyleSheet.collaboratorSaveText}>Save</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={StyleSheet.collaborators}>
                    <View style={StyleSheet.collaboratorAvatar}>
                        <Icon name="user-circle-o" size={30}/>
                    </View>
                    <View style={StyleSheet.collaboratorEmail}>
                        <TouchableOpacity>
                            <Text style={StyleSheet.collaboratorEmailText}>riyazn@gmail.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={StyleSheet.collaborators}>
                    <View style={StyleSheet.collaboratorAvatar}>
                        <Icon name="user-plus" size={30}/>
                    </View>
                    <View style={StyleSheet.collaboratorTextInput}>
                        <TextInput placeholder="Person or email share with"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}/>
                    </View>
                </View>
            </View>
        )
    }
}