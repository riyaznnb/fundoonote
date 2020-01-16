/******************************************************************************************
* @purpose : Edit a note component for fundoonote application
* @file : editNote.js
* @author : Riyazuddin K
* @since : 13-01-2020
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
import { updateNote,addNoteToTrash,updateColor,updateReminder, updateArchive,updatePinUnpin} from '../../services/noteService';
import Reminder from './reminder';
import RBSheet from "react-native-raw-bottom-sheet";
import { Avatar } from 'react-native-elements';
import ColorComponent from './colorComponent';
export default class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPined: false,
            reminderOpen: false,
            title: '',
            description: '',
            reminder: '',
            color: "#FDFEFE",
            isArchived:''
        }
    }
    componentDidMount() {
        console.log('ineditnote')
        this.setState({
            title: this.props.navigation.state.params.data.title,
            description: this.props.navigation.state.params.data.description,
            reminder: this.props.navigation.state.params.data.reminder,
            color: this.props.navigation.state.params.data.color,
            isPined: this.props.navigation.state.params.data.isPined,
            isArchived:this.props.navigation.state.params.data.isArchive
        })
    }
    handlePinned = async() => {
        await this.setState({ isPined: !this.state.isPined })
        const data = {
            noteIdList: [this.props.navigation.state.params.data.id],
            isPined:this.state.isPined
        }
        updatePinUnpin(data).then(res => {
            console.log("Pin result", res)
            //this.props.navigation.navigate('dashboard')
        })
            .catch(error => {
                console.warn('error in Pin',error)
                console.warn("error in Pin", error.message)
            })
    }
    reminderModalOpen = () => {
        this.setState({ reminderOpen: true })
    }
    reminderModalClose = () => {
        this.setState({ reminderOpen: false })
    }
    handleReminder = async(reminder) => {
        await this.setState({ reminder: reminder })
        const data = {
            noteIdList:[this.props.navigation.state.params.data.id],
            reminder: this.state.reminder
        }
        updateReminder(data).then(res => {
            console.warn('update reminder',res);
        })
            .catch(error => {
            console.warn('update reminder error',error)
        })
    }
    handleColor = async(color) => {
        await this.setState({ color: color })
        const data = {
            noteIdList:[this.props.navigation.state.params.data.id],
            color: this.state.color
        }
        console.warn('data in js',data)
        updateColor(data).then(res => {
            console.log("Update color result", res)
        })
            .catch(error => {
                console.log('error in color update',error)
                console.warn("error in color update", error.message)
            })
    }
    navigateDashboard = () => {
        let data = {
            noteId: this.props.navigation.state.params.data.id,
            title: this.state.title,
            description:this.state.description
        }
        updateNote(data).then(res => {
            console.log("Update result", res)
            this.props.navigation.navigate('dashboard')
        })
            .catch(error => {
                console.log('error in update',error)
                console.warn("error in update", error.message)
            })
    }
    handleTrash = () => {
        const data = {
            noteIdList: [this.props.navigation.state.params.data.id],
            isDeleted:true
        }
        addNoteToTrash(data).then(res => {
            console.log("Trash result", res)
            this.props.navigation.navigate('dashboard')
        })
            .catch(error => {
                console.warn('error in trash',error)
                console.warn("error in trash", error.message)
            })
    }
    handleArchive = async () => {
        await this.setState({ isArchived: !this.state.isArchived })
        const data = {
            noteIdList: [this.props.navigation.state.params.data.id],
            isArchived:this.state.isArchived
        }
        updateArchive(data).then(res => {
            console.log("Archive result", res)
            this.props.navigation.navigate('dashboard')
        })
            .catch(error => {
                console.warn('error in archive',error)
                console.warn("error in archive", error.message)
            })
    }
    componentWillUnmount() {
        this.RBSheet.close();
    }
    render() {
        return (
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
                                        {!this.state.isPined ?
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
                                    <TouchableOpacity onPress={this.handleArchive}>
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
                            backgroundColor:this.state.color,
                            marginBottom: 50}}}>
                    <View style={StyleSheet.moreContainer}>
                        <View style={StyleSheet.moreContainerIconText}>
                            <View style={StyleSheet.moreContainerIcon}>
                            <TouchableOpacity onPress={this.handleTrash}>
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
                            <TouchableOpacity>
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
        )
    }
}