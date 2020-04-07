import { StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        marginTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    //---------------------------------------------
    incident: {
        marginTop: 48,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16
    },
    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold"
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380"
    },
    //-------------------------------------
    footerContainer: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 30,
        color: "#13131a"
    },
    sub: {
        marginTop: 16,
        fontSize: 15,
        color: "#737380",
    },
    contactContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contactButton: {
        width: "48%",
        height: 50,
        backgroundColor: "#e02041",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    btnTxt: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold"
    }
});
