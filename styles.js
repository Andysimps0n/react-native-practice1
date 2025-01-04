import {StyleSheet} from 'react-native';

import * as Font from 'expo-font'

const loadFonts = async () => {
  await Font.loadAsync({
    'Geist-Medium' : require('./assets/fonts/Geist-Medium.ttf')
  })
}

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
        color : "white",
        fontFamily : ""
    },

    contentContainer1 : {
        width : "99vw",
        height : "35vh",
        marginBottom : "5%",
        marginTop : "5%",
        position : "relative",
        boxSizing : "border-box",
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-evenly"
    },

    scrollViewStencil  : {
        height : "21vh",
        width : "20%",
    },

    focused : {
        color : "white"
    },

    emptyBox : {
        backgroundColor : "transparent",
        color : "transparent"
    }, 
      


    box : {
        width: "90%",
        height: '7vh',
        marginHorizontal : "auto",
        color : "#5c5c5c",
        fontSize: 50,
    },

    button1 : {
        width: "80%",
        height : "7%",
        backgroundColor : "#617AFA",
        marginHorizontal : "auto",
        marginVertical : "6%",
        borderRadius : 15,

        fontSize : 20,
        fontWeight : 600,
        color : "white"

    },


})