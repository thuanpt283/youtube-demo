import React from 'react'
import { StyleSheet, ImageBackground, View, Text, Dimensions} from 'react-native';
import { WebView } from "react-native-webview";

const DetailHome = props => {
    const videoItem = props.navigation.getParam('videoItem');
    const screenWidth = Math.round(Dimensions.get('window').width);
    return(
         <ImageBackground source={require('../assets/image/bg_flowers.png')} style={styles.backroundItem}>
            <View style={{ height: screenWidth*0.75 }}>
                <WebView
                        style={ styles.WebViewContainer }
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{uri: `https://www.youtube.com/embed/${videoItem.id.videoId}` }}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.boxWhite}>
                    <Text style={styles.title}>{videoItem.snippet.title}</Text>
                    <Text style={styles.channelTitle}>{videoItem.snippet.channelTitle}</Text>
                    <Text style={styles.description}>{videoItem.snippet.description}</Text>
                </View>
            </View>
        </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    backroundItem: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    boxWhite: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    WebViewStyle: {
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    },
    title: {
        fontSize: 24,
    },
    channelTitle: {
        marginBottom: 15
    }
})

export default DetailHome;