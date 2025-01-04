import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles'
import { View, ScrollView } from 'react-native-web'



function TimePicker(props) {
    
    useEffect(()=>{
        if (scrollRef.current) { 
            scrollRef.current.scrollTo({ y : 20 + (props.nthfocuse * 60)})
        }
    },[])


    const [scrollY, setScrollY] = useState(0); // Store scroll position
    const scrollRef = useRef(null)
    const handleScroll = (event) => {
        const contentOffsetY = event.nativeEvent.contentOffset.y;
        setScrollY(contentOffsetY);
        props.updateFunction(Math.floor(scrollY / 58) + 1)
    };


  return (
    <View style={[styles.scrollViewStencil]}>
        <ScrollView 
            ref = {scrollRef}
            onScroll={handleScroll} 
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
        >
            {props.timeArray.map((_, i)=>{
                let styleList = [styles.box, styles.center]
                if (i == props.nthfocuse) {styleList.push(styles.focused)}
                if (i == 0 || i == props.timeArray.length - 1) {styleList.push(styles.emptyBox)}

                const element = props.isSecond ? <View key={i} style={styleList}>{(i - 1) * 15}</View> : <View key={i} style={styleList}>{i - 1}</View>

                return element
                })}
        </ScrollView>
    </View>
  )
}

export default TimePicker
