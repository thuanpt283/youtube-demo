import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, View, TextInput, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import Item from '../components/Item';
import _ from 'lodash';

const HomeScreen = props => {
    const [textSearch, onChangeText] = React.useState('');
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([
        {
          "kind": "youtube#searchResult",
          "etag": "zOyKfYiqVMLXXjHEmjsdfMl_Wyw",
          "id": {
            "kind": "youtube#video",
            "videoId": "hfidGCGsB3Q"
          },
          "snippet": {
            "publishedAt": "2018-09-13T16:35:56Z",
            "channelId": "UCq0asL9RaloaQXy_eC95BxQ",
            "title": "&quot;Life Insurance...We Do It For Them.&quot;",
            "description": "TruStage is a fast and easy way to get the life insurance you need to help protect your family after you're gone. \"We did it for our children and our grandchildren .",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/hfidGCGsB3Q/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/hfidGCGsB3Q/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/hfidGCGsB3Q/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "TruStage Insurance",
            "liveBroadcastContent": "none",
            "publishTime": "2018-09-13T16:35:56Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "OCJ1WMLNDd47SxwtYu550jEEBuM",
          "id": {
            "kind": "youtube#video",
            "videoId": "aygAu1x2uQo"
          },
          "snippet": {
            "publishedAt": "2007-03-14T17:24:56Z",
            "channelId": "UCo9HABYRVVMECXyN40Equ6g",
            "title": "Amy Winehouse Back to Black",
            "description": "Amy Winehouse Back to Black Video 3rd single.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/aygAu1x2uQo/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/aygAu1x2uQo/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/aygAu1x2uQo/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "gummmo",
            "liveBroadcastContent": "none",
            "publishTime": "2007-03-14T17:24:56Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "jfJiGikekBcZ8UsOMCIEZ-ZglQE",
          "id": {
            "kind": "youtube#video",
            "videoId": "ykx_BQWsGkw"
          },
          "snippet": {
            "publishedAt": "2018-07-02T20:03:37Z",
            "channelId": "UCq0asL9RaloaQXy_eC95BxQ",
            "title": "Life Insurance from TruStage [15 Second Learn]",
            "description": "TruStage is a fast, easy way to get life insurance. Just answer a few questions. You can get an instant decision. Get a free quote now at https://bit.ly/2HjfUiN.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/ykx_BQWsGkw/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/ykx_BQWsGkw/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/ykx_BQWsGkw/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "TruStage Insurance",
            "liveBroadcastContent": "none",
            "publishTime": "2018-07-02T20:03:37Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "cQlYoWLK0pvpDs83TBcOlvMwWdQ",
          "id": {
            "kind": "youtube#video",
            "videoId": "yRjwHQTgzUI"
          },
          "snippet": {
            "publishedAt": "2017-06-05T14:17:57Z",
            "channelId": "UCcjniJwuw0OmH4s8sb2DHVQ",
            "title": "SalzburgMilch Premium - Unsere Verantwortung",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/yRjwHQTgzUI/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/yRjwHQTgzUI/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/yRjwHQTgzUI/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Salzburg Milch",
            "liveBroadcastContent": "none",
            "publishTime": "2017-06-05T14:17:57Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "dNd00YEe1DPChHSj1FbNL_FCwz0",
          "id": {
            "kind": "youtube#video",
            "videoId": "_zkA7_Mq2_0"
          },
          "snippet": {
            "publishedAt": "2018-11-01T09:00:06Z",
            "channelId": "UC5CDn-LFOd0EccHojF8Jwww",
            "title": "Jaguar F-PACE",
            "description": "Not all cars follow the same pattern. Not everyone wants to be like everyone. To know more, visit: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/_zkA7_Mq2_0/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/_zkA7_Mq2_0/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/_zkA7_Mq2_0/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Jaguar India",
            "liveBroadcastContent": "none",
            "publishTime": "2018-11-01T09:00:06Z"
          }
        }
    ]);
    const _handleTextChange = _.debounce((text) => {
        // onChangeText(text)
        console.log(`debounce ${text}`)
    }, 1500);
    const _test = (text) => {
      onChangeText(text)
      _handleTextChange(text)
    }
    useEffect(() => {
        // axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=bigbang&regionCode=VN&key=AIzaSyAeYRNmrd26QlrnQwr4kAAicRtqSRD_czs")
        // .then(response => {
        //     setData(response.data.items)
        //     setLoading(false)
        // })
        // .catch(error => {
        //     console.log(error)
        //     setLoading(false)
        // });
        console.log(textSearch)
    }, [textSearch]);
    return (
    <ImageBackground source={require('../assets/image/bg_flowers.png')} style={styles.backroundItem}>
        <View style={styles.container}>
            <TextInput
            style={styles.search}
            autoCapitalize='none'
            placeholder='Tìm kiếm'
            placeholderTextColor='#6C7A89'
            onChangeText={_test.bind(this)}
            value={textSearch}
            />
        {isLoading ? <ActivityIndicator/> : (<FlatList
            data={data}
            keyExtractor={( item , index) => index.toString()}
            renderItem={({item}) => <Item video={item} onClick={() => {
                console.log(item.etag)
                props.navigation.navigate({routeName: 'Detail', params: {
                    videoId: item.id.videoId
                }});
            }}></Item>}
            />)}
        </View>
    </ImageBackground>
    );
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
        paddingTop: 30
    },
    search:{
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default HomeScreen;