/******************************************************************************************
* @purpose : Create a note component for fundoonote application
* @file : createNote.js
* @author : Riyazuddin K
* @since : 08-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Text } from 'react-native'
import StyleSheet from '../../styleSheets'
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import { addNote } from '../../services/userService';
import Reminder from './reminder';
import RBSheet from "react-native-raw-bottom-sheet";
import { Avatar } from 'react-native-elements';
export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pinned: false,
            reminderOpen: false,
            title: '',
            description: '',
            reminder: '',
            notes: []
        }
    }
    handlePinned = () => {
        this.setState({ pinned: !this.state.pinned })
    }
    reminderModalOpen = () => {
        this.setState({ reminderOpen: true })
    }
    reminderModalClose = () => {
        this.setState({ reminderOpen: false })
    }
    handleReminder = reminder => {
        this.setState({ reminder: reminder })
    }
    navigateDashboard = () => {
        if (this.state.title === '' && this.state.description === '') {
            this.props.navigation.navigate('dashboard')
        }
        else {
            const data = {
                title: this.state.title,
                description: this.state.description,
                isPined: this.state.pinned,
                reminder: this.state.reminder
            }
            addNote(data).then(res => {
                console.warn("addnote result", res)
                this.props.navigation.navigate('dashboard')
            })
                .catch(error => {
                    console.warn("error in addnote", error.message)
                })
        }
    }

    render() {
        return (
            <View style={StyleSheet.createNoteContainer}>
                <ScrollView>
                    <View style={StyleSheet.createNoteHeaderInput}>
                        <View style={StyleSheet.createNoteHeader}>
                            <View>
                                <View style={StyleSheet.createNoteItem}>
                                    <TouchableOpacity onPress={this.navigateDashboard}>
                                        <Icon name="arrow-left" size={26} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={StyleSheet.createNoteHeaderRight}>
                                <View style={StyleSheet.createNoteItem}>
                                    <TouchableOpacity onPress={this.handlePinned}>
                                        {!this.state.pinned ?
                                            <Icons name="pushpino" size={26} color="black" />
                                            :
                                            <Icons name="pushpin" size={26} color="black" />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View style={StyleSheet.createNoteItem}>
                                    <Reminder handleReminder={this.handleReminder} />
                                </View>
                                <View style={StyleSheet.createNoteItem}>
                                    <TouchableOpacity>
                                        <IconMaterial name="archive" size={26} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={StyleSheet.createNoteInput}>
                            <View style={StyleSheet.createNoteItem}>
                                <TextInput
                                    style={StyleSheet.createNoteTitle}
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChangeText={(title) => this.setState({ title })} />
                            </View>
                            <View style={StyleSheet.createNoteItem}>
                                <TextInput
                                    style={StyleSheet.createNoteNote}
                                    multiline={true}
                                    placeholder="Note"
                                    value={this.state.description}
                                    onChangeText={(description) => this.setState({ description })} />
                            </View>
                            <View style={StyleSheet.createNoteReminder}>
                                {this.state.reminder.length > 1 &&
                                    <TouchableOpacity>
                                        <Chip>
                                            <IconM name="clock-outline" size={20} color="black" />
                                            {this.state.reminder}
                                        </Chip>
                                    </TouchableOpacity>}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    duration={250}
                    customStyles={{
                        container: {
                            marginBottom: 50
                        }
                    }}>
                    <View style={StyleSheet.moreContainer}>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="delete" size={26} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Delete</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="content-copy" size={26} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Make a Copy</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="share" size={26} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Send</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconFont name="user-plus" size={26} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Collaborator</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="label-outline" size={26} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Label</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <Avatar rounded containerStyle={{backgroundColor:"black"}}/>
                        </View>
                    </View>
                </RBSheet>
                <View style={StyleSheet.createNoteFooter}>
                    <View style={StyleSheet.createNoteItem}>
                        <TouchableOpacity>
                            <Icon name="plus-square" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSheet.createNoteItem}>
                        <TouchableOpacity onPress={() => {
                            this.RBSheet.open();
                        }}>
                            <Icon name="more-vertical" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}