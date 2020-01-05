import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight } from 'react-native'
import StyleSheet from '../styleSheets'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }
    handleLoginClick = () => {
        // this.props.navigation.navigate('login')
    }
    //function to handle submit button
    handleSubmit = () => {
        let data={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password
        }
    }
    render() {
        return (
            <View style={StyleSheet.registerContainer}>
                <View style={StyleSheet.registerTitle}>
                    <Text style={{ marginBottom: 25, color: '#FFA500', fontSize: 20 }}>REGISTRATION</Text>
                </View>
                <View >
                    <TextInput
                    style={StyleSheet.registerContainerInput}
                        placeholder="First_Name"
                        underlineColorAndroid='transparent'
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
                    />
                </View>
                <View >
                    <TextInput
                    style={StyleSheet.registerContainerInput}
                        placeholder="Last_Name"
                        underlineColorAndroid='transparent'
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
                    />
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
                    <Button title="submit" />
                </View>
                <View style={StyleSheet.loginLink}>
                    <TouchableHighlight onPress={this.handleLoginClick}>
                        <Text>Already have an account?  Login</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
        // return (
        //   <View style={StyleSheet.registrationContainer}>
        //     <TextInput
        //       style={StyleSheet.registrationInput}
        //       placeholder='First Name'
        //       autoCapitalize="none"
        //       placeholderTextColor='white'
        //       onChangeText={(firstName) => this.setState({ firstName })}
        //     />
        //     <TextInput
        //       style={StyleSheet.registrationInput}
        //       placeholder='Last Name'
        //       secureTextEntry={true}
        //       autoCapitalize="none"
        //       placeholderTextColor='white'
        //       onChangeText={(lastName) => this.setState({ lastName })}
        //     />
        //     <TextInput
        //       style={StyleSheet.registrationInput}
        //       placeholder='Email'
        //       autoCapitalize="none"
        //       placeholderTextColor='white'
        //       onChangeText={(email) => this.setState({ email })}
        //     />
        //     <TextInput
        //       style={StyleSheet.registrationInput}
        //       placeholder='Password'
        //       autoCapitalize="none"
        //       placeholderTextColor='white'
        //       onChangeText={(password) => this.setState({ password })}
        //     />
        //     <Button title="Register" />
        //   </View>
        // )
    }
}