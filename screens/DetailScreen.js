import React from 'react'
import { StyleSheet, ImageBackground, View, TextInput, ActivityIndicator, Text} from 'react-native';
import { WebView } from "react-native-webview";

const DetailHome = props => {
    const videoId = props.navigation.getParam('videoId');

    return(
        <ImageBackground source={require('../assets/image/bg_flowers.png')} style={styles.backroundItem}>
            <View style={styles.container}>
            <WebView
                style={styles.WebViewStyle}
                source={{ uri: 'https://www.youtube.com/embed/'+videoId }}
                javaScriptEnabled={true}
                domStorageEnabled={true}   
                automaticallyAdjustContentInsets={false}
            />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backroundItem: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        height: 300
    },
    WebViewStyle: {
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    }
})

export default DetailHome;