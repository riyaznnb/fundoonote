import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight } from 'react-native'
import StyleSheet from '../styleSheets'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleLoginClick = () => {
        // this.props.navigation.navigate('login')
    }
    //function to handle submit button
    handleSubmit = () => {
        let data={
            email:this.state.email,
            password:this.state.password
        }
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
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <View style={StyleSheet.registerButton}>
                    <Button title="Login" />
                </View>
                <View style={StyleSheet.loginLink}>
                    <TouchableHighlight onPress={this.handleLoginClick}>
                        <Text>Not an account?  Register</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}