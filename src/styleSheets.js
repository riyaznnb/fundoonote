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
        alignItems: 'center'  
    },
    registerContainerInput: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        width: "100%",
        marginBottom: "5%",
        flexDirection: 'row'
    },
    registerButton: {
        width: "25%",
        marginLeft: "39%",
        marginTop:"4%"
    },
    loginLink: {
marginTop:"5%",
marginLeft:"20%"
    }
})