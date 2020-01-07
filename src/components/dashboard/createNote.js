import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image,Modal,TouchableHighlight } from 'react-native'
import StyleSheet from '../../styleSheets'
import { Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pinned: false,
            reminderOpen:false
        }
    }
    handlePinned = () => {
        this.setState({ pinned: !this.state.pinned })
    }
    reminderModalOpen = () => {
        this.setState({reminderOpen:true})
    }
    reminderModalClose = () => {
        this.setState({reminderOpen:false})
    }

    render() {
        return (
            <View style={StyleSheet.createNoteContainer}>
                <View style={StyleSheet.createNoteHeaderInput}>
                    <View style={StyleSheet.createNoteHeader}>
                        <View>
                            <View style={StyleSheet.createNoteItem}>
                                <TouchableOpacity>
                                    <Icon name="arrow-left" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={StyleSheet.createNoteHeaderRight}>
                            <View style={StyleSheet.createNoteItem}>
                                <TouchableOpacity onPress={this.handlePinned}>
                                    {!this.state.pinned ?
                                        <Icons name="pushpino" size={30} color="black" />
                                        :
                                        <Icons name="pushpin" size={30} color="black" />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.createNoteItem}>
                                <TouchableOpacity onPress={this.reminderModalOpen}>
                                    <IconM name="bell-plus" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.createNoteItem}>
                                <TouchableOpacity>
                                    <IconMaterial name="archive" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                    <View style={StyleSheet.createNoteInput}>
                        <View style={StyleSheet.createNoteItem}>
                            <TextInput
                                style={StyleSheet.createNoteTitle}
                                placeholder="Title" />
                        </View>
                        <View style={StyleSheet.createNoteItem}>
                            <TextInput
                                style={StyleSheet.createNoteNote}
                                multiline={true}
                                placeholder="Note" />
                        </View>
                    </View>
                </View>
                <View style={StyleSheet.createNoteFooter}>
                    <View style={StyleSheet.createNoteItem}>
                        <TouchableOpacity>
                            <Icon name="plus-square" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSheet.createNoteItem}>
                        <TouchableOpacity>
                            <Icon name="more-vertical" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}