/******************************************************************************************
* @purpose : Forgot Password component for fundoonote application
* @file : register.js
* @author : Riyazuddin K
* @since : 05-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight,ScrollView} from 'react-native'
import StyleSheet from '../styleSheets'
import { Card } from 'react-native-elements'
import { userForgotPassword} from '../services/userService'
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    handleRegisterClick = () => {
         this.props.navigation.navigate('register')
    }
    handleLoginClick = () => {
        this.props.navigation.navigate('login')
    }
    handleForgotPassword = () => {
        const data={
            email:this.state.email
        }
        userForgotPassword(data).then(res => {
            console.warn('Email sent success',res)
        })
            .catch(error => {
            console.warn('error',error.message);
        })

    }
    render() {
        return (
            <ScrollView>
                <View style={StyleSheet.registerTitle}>
                    <Text style={StyleSheet.fundoonoteTitle}>
                    <Text style={StyleSheet.titleF}>f</Text>
                    <Text style={StyleSheet.titleU}>u</Text>
                    <Text style={StyleSheet.titleN}>n</Text>
                    <Text style={StyleSheet.titleD}>d</Text>
                    <Text style={StyleSheet.titleO}>o</Text>
                    <Text style={StyleSheet.titleO}>o</Text>
                    <Text style={StyleSheet.titleN}>N</Text>
                    <Text style={StyleSheet.titleO}>o</Text>
                    <Text style={StyleSheet.titleT}>t</Text>
                    <Text style={StyleSheet.titleE}>e</Text>
                    </Text>
                </View>
                <View style={StyleSheet.registerContainer}>
                    <Card containerStyle={{borderRadius:10}}>
                    <View style={StyleSheet.loginTitle}>
                            <Text style={StyleSheet.loginTitleText}>Password Reset</Text>
                        </View>
                <View style={{marginTop:"5%"}}>
                    <TextInput
                    style={StyleSheet.registerContainerInput}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}/>
                </View>
                <View style={StyleSheet.registerButton}>
                    <Button title="Send Reset Email" onPress={this.handleForgotPassword}/>
                </View>
                <View style={StyleSheet.linkRegister}>
                    <View>
                    <TouchableHighlight onPress={this.handleRegisterClick}>
                        <Text>New User?  Register</Text>
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight onPress={this.handleLoginClick}>
                        <Text>Login</Text>
                    </TouchableHighlight>
                    </View>
                        </View>
                        </Card>
                </View>
                </ScrollView>
        )
    }
}