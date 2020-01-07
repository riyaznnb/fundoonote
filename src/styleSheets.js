import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    registerContainer: {
        margin: "1%",
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation:4
    },
    registerTitle: {
        display: "flex",
        alignItems: "center",
        marginBottom: "5%",
        marginTop:"10%"
        
    },
    fundoonoteTitle: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: 35
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
    },

    headerCard: {
        height: 50,
        borderRadius: 20
    },
    headerLeft: {
        flexDirection: "row", 
        justifyContent: "space-between",
    },
    headerRight: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerItem: {
        marginTop: -8,
        marginLeft:10
    },
    fundoonoteTitleInHeader: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: 25,
    },
    headerFooter: {
        flex:1,
        flexDirection: "column",
        justifyContent:"space-between"
    },
    footer: {
        backgroundColor: "white",
        height: 50,
    },
    footerItem: {
        marginLeft: 10,
        marginRight:10,
        marginTop:5
    },
    addIcon: {
        elevation: 8,
        borderRadius: 100,
        backgroundColor: "#fff",
        bottom: "46%",
        right: "30%"
    },
    // CreateNote style
    createNoteContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent:"space-between"
    },
    createNoteHeaderInput: {
        flexDirection: "column",
        justifyContent:"space-between"
    },
    createNoteHeader: {
        flexDirection: "row",
        justifyContent:"space-between"
    },
    createNoteHeaderRight: {
        flexDirection: "row",
        justifyContent:"space-between"
    },
    createNoteInput: {
        flexDirection: "column"
    },
    createNoteFooter: {
        flexDirection: "row",
        justifyContent:"space-between"
    },
    createNoteItem: {
        // marginLeft: 10,
        // marginTop: 10,
        // marginRight: 10,
        // marginBottom:10
        margin:10
        
    }
    
})
