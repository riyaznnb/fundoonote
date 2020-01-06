import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    registerContainer: {
        margin: "10%",
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation:4
    },
    registerTitle: {
        display: "flex",
        alignItems: "center"
        
    },
    fundoonoteTitle: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: 30
    },
    titleF:{
        color:"#F70741"
    },
    titleU:{
        color:"#AE2D4C"
    },
    titleN:{
        color:"#2DAE50"
    },
    titleD:{
        color:"#2D42AE"
    },
    titleO:{
        color:"#F70741"
    },
    titleT:{
        color:"#A22DAE"
    },
    titleE:{
        color:"#2D8FAE"
    },
    registerContainerInput: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        width: "100%",
        marginBottom: "5%",
        flexDirection: 'row'
    },
    registerButton: {
        // width: "25%",
        // marginLeft: "39%",
        // marginTop:"4%"
    },
    link: {
        marginTop:"5%",
        marginLeft:"20%"
    },
    linkRegister: {
        // flex: 1,
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop: "5%"
    }
})