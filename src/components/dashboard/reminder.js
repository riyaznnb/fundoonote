import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity,Picker} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Tooltip, Divider } from "react-native-elements";
import Icon4 from "react-native-vector-icons/FontAwesome";
import StyleSheet from '../../styleSheets'
import Dialog, { DialogContent } from "react-native-popup-dialog";
export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimePickerVisible: false,
            isDatePickerVisible: false,
            reminderDialog: false,
            selectedHours: 0,
            selectedMinutes: 0,
            openTime: false,
            date: '7-01-20',
            time:''
        };
    }
    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };
    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
    };
    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };
    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
    };
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDatePicker();
    };
    handleTimePicked = time => {
        console.log("A date has been picked: ", time);
        this.hideTimePicker();
    };
    handleTodayDate = () => {
        console.log('today');
    }
    handleTomorrowDate = () => {
        console.log('tomorrow');   
    }
    handleNextWeekDate = () => {
        console.log('next week');
        
    }
    render() {
        return (
            <View>
                <View>

                    <TouchableOpacity>
                        <Icon4
                            name="plus-square"
                            size={40}
                            onPress={() => {
                                this.setState({ reminderDialog: true });
                            }}
                        />
                    </TouchableOpacity>

                </View>
                <Dialog
                    visible={this.state.reminderDialog}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}>
                    <DialogContent>
                        <View style={StyleSheet.reminderDialog}>
                            <View >
                                <Text style={StyleSheet.reminderTitle}>Add Reminder</Text>
                            </View>
                            <View>
                                <Picker
                                    selectedValue={this.state.date}
                                    // style={{ height: 50, width: 100 }}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ date: itemValue })
                                // }
                                >
                                    <Picker.Item label="Today" onPress={this.handleTodayDate} />
                                    <Picker.Item label="Tomorrow" onPress={this.handleTomorrowDate} />
                                    <Picker.Item label="Next Week" onPress={this.handleNextWeekDate} />
                                    <Picker.Item label="Select a date..." onPress={this.showDatePicker}/>
                                </Picker>
                            </View>
                            <View>
                            <Picker
                                    selectedValue={this.state.time}>
                                    <Picker.Item label="Select a Time..." onPress={this.showTimePicker}/>
                                </Picker>
                            </View>
                            <View style={StyleSheet.reminderButton}>
                                <View>
                                    <Button title="Cancel" />
                                </View>
                                <View>
                                <Button title="Save"/>
                                </View>
                            </View>
                            <DateTimePicker
                            isVisible={this.state.isDatePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDatePicker}/>
                            <DateTimePicker
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this.handleTimePicked}
                            onCancel={this.hideTimePicker}
                            mode="time" />
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        );
    }
}