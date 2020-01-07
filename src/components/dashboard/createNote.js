import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput,Image } from 'react-native'
import StyleSheet from '../../styleSheets'
import { Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/MaterialIcons'
export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={StyleSheet.createNoteContainer}>
                <View style={StyleSheet.createNoteHeaderInput}>
                        <View style={StyleSheet.createNoteHeader}>
                            <View>
                                <View style={StyleSheet.createNoteItem}>
                                    <TouchableOpacity>
                                        <Icon name="arrow-left" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={StyleSheet.createNoteHeaderRight}>
                                <View style={StyleSheet.createNoteItem}>
                                <TouchableOpacity>
                                <Image source={require('../assets/grid.png')}/>
                                        <Icon name="arrow-left" size={30} />
                                    </TouchableOpacity>
                                </View>
                                <View style={StyleSheet.createNoteItem}>
                                    <TouchableOpacity>
                                        <Icon name="arrow-left" size={30} />
                                    </TouchableOpacity>
                                </View>
                                <View style={StyleSheet.createNoteItem}>
                                    <TouchableOpacity>
                                        <Icon name="arrow-left" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    <View style={StyleSheet.createNoteInput}>
                        <View style={StyleSheet.createNoteItem}>
                            <TextInput
                                placeholder="Title" />
                        </View>
                        <View style={StyleSheet.createNoteItem}>
                            <TextInput
                                placeholder="Note" />
                        </View>
                    </View>
            </View>
            <View style={StyleSheet.createNoteFooter}>
                <View style={StyleSheet.createNoteItem}>
                    <TouchableOpacity>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={StyleSheet.createNoteItem}>
                    <TouchableOpacity>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}