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
import { addNote } from '../../services/noteService';
import Reminder from './reminder';
import RBSheet from "react-native-raw-bottom-sheet";
import { Avatar } from 'react-native-elements';
import ColorComponent from './colorComponent';
import Collaborator from './collaborator';
export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pinned: false,
            reminderOpen: false,
            title: '',
            description: '',
            reminder: '',
            color: "#FDFEFE",
            isArchived: false,
            collaboratorShow: false,
            collaborator:[]
        }
    }
    componentDidMount() {
        console.log('result in creettt',this.props.data)
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
    handleColor = async(color) => {
       await this.setState({color:color})
    }
    handleArchieve = async() => {
        await this.setState({ isArchived: true })
        this.navigateDashboard()
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
                color:this.state.color,
                reminder: this.state.reminder,
                isArchived: this.state.isArchived,
                collaborator:this.state.collaborator
            }
            addNote(data).then(res => {
                console.warn("addnote result", res)
                this.props.navigation.navigate('dashboard')
            })
                .catch(error => {
                    console.log('error in addnote',error)
                    console.warn("error in addnote", error.message)
                })
        }
    }
    componentWillUnmount() {
        this.RBSheet.close();
    }
    handleCollaborator = () => {
        this.setState({collaboratorShow:!this.state.collaboratorShow})
    }
    saveCollaborator = async (data) => {
        await this.setState({
            collaborator: [...this.state.collaborator,
            { "firstName": data.firstName, "lastName":data.lastName,"email":data.email,"userId":data.id}]
        });
        this.handleCollaborator();
    }

    render() {
        var collaborator;
        if (this.state.collaborator.length > 0) {
            collaborator = this.state.collaborator.map(item => {
                return (
                    <View>
                        <TouchableOpacity onPress={this.handleCollaborator}>
                            <IconFont name="user-circle" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            })
        }  
        return (
            !this.state.collaboratorShow?
            <View style={{flex:1,
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor:this.state.color}} >
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
                                    <TouchableOpacity onPress={this.handleArchieve}>
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
                            <View style={StyleSheet.createNoteCollaborator}>
                                 {collaborator}   
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
                            backgroundColor:this.state.color,
                            marginBottom: 50
                        }
                    }}>
                    <View style={StyleSheet.moreContainer}>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="delete" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Delete</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="content-copy" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Make a Copy</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="share" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Send</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity onPress={this.handleCollaborator}>
                                <IconFont name="user-plus" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Collaborator</Text>
                            </View>
                        </View>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity>
                                <IconMaterial name="label-outline" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.moreContainerText}>
                            <Text>Label</Text>
                            </View>
                        </View>
                        <ColorComponent
                            handleColor={this.handleColor}/>
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
                :
                <Collaborator
                    saveCollaborator={this.saveCollaborator}
                    handleCollaborator={this.handleCollaborator} />
        )
    }
}