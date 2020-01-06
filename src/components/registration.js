import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight,ScrollView } from 'react-native'
import StyleSheet from '../styleSheets'
import { userRegister } from '../services/userService'

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
        this.props.navigation.navigate('login')
    }
    //function to handle submit button
    handleSubmit = () => {
        const data={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password: this.state.password,
            service:"basic"
        }
        console.warn('register data',data)
        userRegister(data).then(res => {
            console.warn('success')
            console.warn("result", res)
            this.props.navigation.navigate('login')
            
        })
            .catch(error => {
                console.warn("error", error.message)
        })
    }
    render() {
        return (
            <ScrollView>
            <View style={StyleSheet.registerContainer}>
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
                        secureTextEntry={true}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <View style={StyleSheet.registerButton}>
                    <Button title="Register" onPress={this.handleSubmit}/>
                </View>
                <View style={StyleSheet.link}>
                    <TouchableHighlight onPress={this.handleLoginClick}>
                        <Text>Already have an account?  Login</Text>
                    </TouchableHighlight>
                </View>
                </View>
                </ScrollView>
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