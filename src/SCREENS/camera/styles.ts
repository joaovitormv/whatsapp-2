import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    message:{
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera:{
        flex: 1,
    },
    headerCamera:{
        flex: 1,
        alignItems: "center"
    },
    footerCamera:{
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center'
    },
    ball:{
        width: 70,
        height: 70,
        backgroundColor: "black",
        borderRadius: 35
    },
    headerSave:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button:{
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
        borderRadius: 20
    },
    text:{
        color: "white"
    },
    container2:{
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    }
});