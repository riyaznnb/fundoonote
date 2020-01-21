/******************************************************************************************
* @purpose : Note load on web for fundoonote application
* @file : loadOnWeb.js
* @author : Riyazuddin K
* @since : 21-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,WebView} from 'react-native'
import StyleSheet from '../../styleSheets'
import { Card, Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';
export default class LoadOnWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={StyleSheet.loadheaderFooter}>
            <ScrollView>
                <View style={StyleSheet.headerAndNotes}>
                    <Card containerStyle={StyleSheet.headerCard}>
                        <View style={StyleSheet.header}>
                            <View style={StyleSheet.headerLeft}>
                                <View style={StyleSheet.headerItem}>
                                    <TouchableOpacity>
                                        <Icon name="menu" size={30} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View style={StyleSheet.headerItem}>
                                    <Text style={StyleSheet.fundoonoteTitleInHeader}>
                                        <Text>Fundoo</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                    </View>
                    <View>
                    <WebView
                        source={{uri: 'http://fundoonotes.incubation.bridgelabz.com'}}/>
                    </View>
                </ScrollView>
                
        </View>
            
        )
    }
}