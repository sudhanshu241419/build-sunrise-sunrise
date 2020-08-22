import React, { useState } from 'react';
import { View } from 'react-native';
import ActivityIndicator from 'react-native-loading-spinner-overlay'
export const loaderRef = React.createRef();

export function showLoader() {
    let ref = loaderRef.current
    if (ref) {
        ref.showLoader()
    }
}

export function hideLoader() {
    let ref = loaderRef.current
    if (ref) {
        ref.hideLoader()
    }
}

AppLoader = () => {
    const[showLoader,setLoader]=React.useState(false)


    showLoader = () => {
        setLoader(true)
    }

    hideLoader = () => {
        setLoader(false)
    }


    return (
        <View style={{ position: 'absolute', top:"50%",right: 0, left: 0,zIndex:1 }}>
            <ActivityIndicator animating={showLoader} size="large" color="#999" />
         </View>
    );

};

export default AppLoader