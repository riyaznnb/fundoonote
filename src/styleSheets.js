import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    registerContainer: {
        margin: "1%",
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
       // marginTop:"10%"
    },
    registerTitle: {
        display: "flex",
        alignItems: "center",
       // marginBottom: "5%",
        marginTop:"10%"
        
    },
    loginTitle: {
        display: "flex",
        alignItems: "center",
    },
    loginTitleText: {
        fontFamily: "serif",
        fontSize: 26,
        color:"#A22DAE"
    },
    fundoonoteTitle: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: 36
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
        flexDirection: 'row',
        backgroundColor:"#F2F2F2"
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
        borderRadius: 20,
        justifyContent:"center"

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
//marginTop: -8,
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
    headerAndNotes: {
        flexDirection: "column",
    },
    footer: {
        backgroundColor: "white",
        height: 50,
        elevation:20
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
        margin:10 
    },
    createNoteReminder: {
        maxWidth: "50%",
        margin:10
    },
    createNoteTitle: {
        fontSize:28
    },
    createNoteNote: {
        fontSize: 20,
    },
    getNoteCard: {
       width:"50%",
        borderRadius: 20,   
    },
    getNoteCardList: {
         borderRadius: 20,   
     },
    noteCard: {
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 20, 
    },
    noteAreaGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap:"wrap"
    },
    noteAreaList: {
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap:"wrap"
    },
    reminderDialog: {
        flexDirection: "column",
        justifyContent:"space-between",
        minWidth: "90%",
    },
    reminderTitle: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: 18,
    },
    reminderButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop:"5%"
    },
    reminderTitleContainer: {
        margin:10
    },
    // reminderDatePicker: {
    //     flexDirection: "row",
    //     justifyContent:"space-between"
    // }
    moreContainer: {
        flexDirection: "column",
    },
    moreContainerIconText: {
        flexDirection: "row",
        marginLeft:"3%"
    },
    moreContainerIcon: {
        margin:"3%"
    },
    moreContainerText: {
        margin:"3%"
    },
    moreContainerColor: {
        flexDirection: "row",
        marginLeft: "3%"
    },
    logoutContainer: {
        justifyContent:"center"
    },
    collaboratorContainer: {
        flex: 1,
        flexDirection:"column"   
    },
    collaboratorHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "5%",
        marginLeft: "5%",
        marginRight:"5%"
    },
    collaboratorIconTitle: {
        flexDirection: "row", 
    },
    collaboratorButton: {
    },
    collaboratorTitle: {
        marginLeft:"8%"
    },
    collaboratorTitleText: {
        fontFamily: "Times New Roman",
        fontSize: 20,
        color:"#010101"
    },
    collaboratorSaveText: {
        fontFamily: "Times New Roman",
        fontSize: 20,
        color:"#010101"
    },
    collaborators: {
        flexDirection: "row",
        marginTop: "5%",
        minHeight: 50,
        alignItems:"center"
    },
    collaboratorAvatar: {
        marginLeft:"8%"
    },
    collaboratorEmail: {
        marginLeft:"5%"
    },
    collaboratorEmailText: {
        fontSize: 20,
        fontWeight: "400",
        color:"#010101"
    },
    collaboratorTextInput: {
        marginLeft: "5%",
    },
    createNoteCollaborator: {
        marginLeft:"5%",
        flexDirection: "row",
        alignItems:"center"
    }
})
