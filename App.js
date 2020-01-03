/******************************************************************************
 *  @Purpose        : to build complete React Native fundooNotes App
 *  @file           : App.js
 *  @author         : Riyazuddin K
 *  @since          : 03-01-2020
 *******************************************************************************/
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './src/router.js';
const AppContainer =createAppContainer(AppNavigator)
export default class App extends Component {
	render() {
    return <AppContainer />;
    
	}
}