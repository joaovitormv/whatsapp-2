import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center'
    },
    formRow:{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: "white",
        borderRadius: 30
    },
    input:{
        fontSize: 18,
        padding: 10,
        width: "70%",
        color: "white"
    },
    icon:{
        fontSize: 28,
        padding: 5,
        color: "white"
    },
    text:{
        fontWeight: "semibold",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 50,
        color: "white"
    }
})