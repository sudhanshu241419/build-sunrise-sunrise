import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";

const CustomButton = ({
  onPress, 
  children, 
  width,
  padding,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  maxWidth,
  textAlign,
  childrenStyle
}) =>(
    <TouchableOpacity
        onPress={onPress}
        style={{
        padding:padding,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderColor: borderColor,
        maxWidth: maxWidth,
        textAlign:textAlign,
        width: width,
        }}
    >
      <Text style={childrenStyle}>
        {children}
      </Text>
    </TouchableOpacity>
) 

export default CustomButton;