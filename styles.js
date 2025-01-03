import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    border : {
        borderWidth : 1,
        borderColor : "white",
        borderStyle : "solid"
    },
    text : {
        // color : "white"
    },

    outerMostWrapper : {
        width : "100%",
        height : "100%",

        backgroundColor : "#000010"
    },

    wrapper : {
        width : "99%",
        height : "90%",
    },

    center : { 
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    },


    titleContainer : {
        width : "100%",
        height : "6%"
    },

    large : {
        fontSize : 20,
        fontWeight : 700,
        color : "white"
    },

    contentContainer1 : {
        width : "100%",
        height : "35%",
        marginBottom : "5%",
        marginTop : "5%"
    }
    


})