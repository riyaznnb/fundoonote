import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
const colorPattern = [
    {    
        id:1,
        colorCode: "rgb(255, 255, 255)"
   },
    {
        id:2,
       colorCode: "rgb(242, 139, 130)"
   },
    {
        id:3,
       colorCode: "rgb(215, 174, 251)"
   },
    {
        id:4,
       colorCode: "rgb(255, 192, 203)"
   },
    {
       id:5,
       colorCode: "rgb(167, 255, 235)"
   },
    {
       id:6,
       colorCode: "rgb(251, 188, 4)"
   },
    {
       id:7,
       colorCode: "rgb(174, 203, 250)"
   },
    {
       id:8,
       colorCode: "rgb(232, 234, 237)"
   },
    {
       id:9,
       colorCode: "rgb(203, 240, 248)"
   },
    {
       id:10,
       colorCode: "rgb(230, 201, 168)"
   },
    {
       id:11,
       colorCode: "rgb(255, 255, 0)"
   },
    {
       id:12,
       colorCode: "rgb(204, 255, 144)"
   }
]
export default class ColorComponent extends Component {
   constructor(props) {
       super(props)
       this.state = {
       }
   }
   handleColor(color) {
       this.props.handleColor(color)
   }
   renderItem = ({ item }) => {
       return (
           <TouchableOpacity onPress={() => this.handleColor(item.colorCode)}>
               <View style={{ backgroundColor: item.colorCode, marginLeft: 5, borderRadius: 25, borderColor: 'black', height: 30, width: 30 }}>
               </View>
           </TouchableOpacity>
       )
   }
   render() {
       return (
           <View >
               <FlatList horizontal={true}
                   data={colorPattern}
                   renderItem={this.renderItem}/>
           </View>
       );
   }
}
