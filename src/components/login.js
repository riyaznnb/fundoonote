import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight } from 'react-native'
import StyleSheet from '../styleSheets'
import { userLogin} from '../services/userService'
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
    handleLogin = () => {
        const data={
            email:this.state.email,
            password:this.state.password
        }
        userLogin(data).then(res => {
            console.warn('login success',res)
        })
            .catch(error => {
            console.warn('error',error.message);
        })

    }
    render() {
        return (
            <View style={StyleSheet.registerContainer}>
                <View style={StyleSheet.registerTitle}>
                    <Text style={{ marginBottom: 25, color: '#FFA500', fontSize: 20 }}>LOGIN</Text>
                </View>
                <View >
                    <TextInput
                    style={StyleSheet.registerContainerInput}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View >
                    <TextInput
                    style={StyleSheet.registerContainerInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <View style={StyleSheet.registerButton}>
                    <Button title="Login" onPress={this.handleLogin}/>
                </View>
                <View style={StyleSheet.loginLink}>
                    <TouchableHighlight onPress={this.handleRegisterClick}>
                        <Text>New User?  Register</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}