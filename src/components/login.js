/******************************************************************************************
* @purpose : Login component for fundoonote application
* @file : login.js
* @author : Riyazuddin K
* @since : 05-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native'
import StyleSheet from '../styleSheets'
import { Card } from 'react-native-elements'
import { userLogin } from '../services/userService'
import Snackbar from 'react-native-snackbar';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleRegisterClick = () => {
        this.props.navigation.navigate('register')
    }
    handleForgotPasswordClick = () => {
        this.props.navigation.navigate('forgotPassword')
    }
    snackbarClose = () => {
        Snackbar.dismiss();
    }
    handleLogin = () => {
        if (this.state.email === '' || this.state.password === '') {
            Snackbar.show({
                title: 'Email and Password Required',
                duration: Snackbar.LENGTH_LONG,
                action: {
                    title: 'Close',
                    color: 'green',
                    onPress: () => { this.snackbarClose },
                },
            });
        }
        else {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            userLogin(data).then(res => {
                console.warn('login success',res.data.id)
                AsyncStorage.setItem("fundootoken", res.data.id)
                AsyncStorage.setItem("fundooUserEmail", res.data.email)
                Snackbar.show({
                    title: 'Login Success',
                    duration: Snackbar.LENGTH_LONG,
                    action: {
                        title: 'Close',
                        color: 'green',
                        onPress: () => { this.snackbarClose },
                    },
                });
                this.props.navigation.navigate('dashboard')
            })
                .catch(error => {
                    Snackbar.show({
                        title: "Invalid email and password",
                        duration: Snackbar.LENGTH_LONG,
                        action: {
                            title: 'Close',
                            color: 'green',
                            onPress: () => { this.snackbarClose },
                        },
                    });
                    console.warn('error', error.message);
                })
        }
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
                    <Card containerStyle={{ borderRadius: 10 }}>
                        <View style={StyleSheet.loginTitle}>
                            <Text style={StyleSheet.loginTitleText}>Sign In</Text>
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <TextInput
                                style={StyleSheet.registerContainerInput}
                                placeholder="Email"
                                underlineColorAndroid='transparent'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })} />
                        </View>
                        <View >
                            <TextInput
                                style={StyleSheet.registerContainerInput}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={StyleSheet.registerButton}>
                            <Button title="Login" onPress={this.handleLogin} />
                        </View>
                        <View style={StyleSheet.linkRegister}>
                            <View>
                                <TouchableHighlight onPress={this.handleRegisterClick}>
                                    <Text>New User?  Register</Text>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight onPress={this.handleForgotPasswordClick}>
                                    <Text>Forgot Password</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}