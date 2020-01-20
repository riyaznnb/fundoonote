/******************************************************************************************
* @purpose : add colaborator for note in fundoonote application
* @file : collaborator.js
* @author : Riyazuddin K
* @since : 20-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Text, AsyncStorage } from 'react-native'
import { Button } from "react-native-elements";
import StyleSheet from '../../styleSheets'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar } from 'react-native-elements';
import { getUser } from '../../services/userService';
import Snackbar from 'react-native-snackbar';
export default class Collaborator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collaborator: [],
            userEmail: '',
            email: ''
        }
    }
    snackbarClose = () => {
        Snackbar.dismiss();
    }
    handleCollaborator = () => {
        const data = {
            where: {
                email: this.state.email
            }
        }
        getUser(data).then(res => {
            if (res.data.length > 0) {
                // this.setState({
                // collaborator: [...this.state.collaborator,res.data[0]]});
                this.props.saveCollaborator(res.data[0])
            }
            else {
                Snackbar.show({
                    title: 'Email address not available',
                    duration: Snackbar.LENGTH_LONG,
                    action: {
                        title: 'Close',
                        color: 'green',
                        onPress: () => { this.snackbarClose },
                    },
                });
            }
        })
            .catch(error => {
                console.log('return user data error', error)
                console.warn(error);

            })
    }
    componentDidMount() {
        // let userEmail = AsyncStorage.getItem('fundooUserEmail');
        // console.warn('user email', userEmail);
        // this.setState({userEmail:userEmail})
    }
    render() {
        // var collaborator;
        // if (this.state.collaborator.length > 0) {
        //     collaborator = this.state.collaborator.map(item => {
        //         return (
        //             <View style={StyleSheet.collaborators}>
        //             <View style={StyleSheet.collaboratorAvatar}>
        //                 <Icon name="user-circle-o" size={30}/>
        //             </View>
        //             <View style={StyleSheet.collaboratorEmail}>
        //                 <TouchableOpacity>
        //                         <Text style={StyleSheet.collaboratorEmailText}>{item.email}</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View> 
        //         )
        //     })
        // }  
        return (
            <View style={StyleSheet.collaboratorContainer}>
                <View style={StyleSheet.collaboratorHeader}>
                    <View style={StyleSheet.collaboratorIconTitle}>
                        <View style={StyleSheet.collaboratorIcon}>
                            <TouchableOpacity onPress={() => { this.props.handleCollaborator() }}>
                                <Icons name="close" size={26} color="#010101"/>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleSheet.collaboratorTitle}>
                            <Text style={StyleSheet.collaboratorTitleText}>Collaborators</Text>
                        </View>
                    </View>
                    <View style={StyleSheet.collaboratorButton}>
                        <TouchableOpacity onPress={this.handleCollaborator}>
                        <Text style={StyleSheet.collaboratorSaveText}>Save</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={StyleSheet.collaborators}>
                    <View style={StyleSheet.collaboratorAvatar}>
                        <Icon name="user-circle-o" size={30} color="#010101"/>
                    </View>
                    <View style={StyleSheet.collaboratorEmail}>
                        <TouchableOpacity>
                            <Text style={StyleSheet.collaboratorEmailText}>riyazn@gmail.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={StyleSheet.collaborators}>
                    <View style={StyleSheet.collaboratorAvatar}>
                        <Icon name="user-plus" size={30} color="#010101"/>
                    </View>
                    <View style={StyleSheet.collaboratorTextInput}>
                        <TextInput placeholder="Person or email share with"
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })} />
                    </View>
                </View>
            </View>
        )
    }
}