import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth
} from "react-native-responsive-dimensions";


const Pagination = ({ paginationDefaultColor, paginationActiveColor}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, paginationActiveColor ? "white" : "gray"]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    // backgroundColor: paginationActiveColor ? "white" : "gray",
    borderRadius: 9999
  }
})

export default Pagination