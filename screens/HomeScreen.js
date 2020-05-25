import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, ImageBackground, View, TextInput, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import Item from '../components/Item';
import _ from 'lodash';

const HomeScreen = props => {
    const [textSearch, onChangeText] = React.useState('cybridge asia');
    const [isLoading, setLoading] = useState(true);
    const [dataSearch, setData] = useState([]);
    const _handleTextChange = (text) => {
      onChangeText(text)
    }
    const _debounceSearch = useCallback(_.debounce((text) => {
      setLoading(true)
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=${text}&regionCode=VN&key=AIzaSyC7IGbTQenNhuPbHlW80E0w5tfmyFDnO1c`)
      .then(response => {
        setData(response.data.items)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      });
    }, 1500),[]);
    useEffect(() => {
      _debounceSearch(textSearch)
    }, [textSearch]);
    return (
    <ImageBackground source={require('../assets/image/bg_flowers.png')} style={styles.backroundItem}>
        <View style={styles.container}>
            <TextInput
            style={styles.search}
            autoCapitalize='none'
            placeholder='Tìm kiếm'
            placeholderTextColor='#6C7A89'
            onChangeText={_handleTextChange.bind(this)}
            value={textSearch}
            />
        {isLoading ? <ActivityIndicator/> : (<FlatList
            data={dataSearch}
            showsVerticalScrollIndicator={false}
            keyExtractor={( item , index) => index.toString()}
            renderItem={({item}) => <Item video={item} onClick={() => {
                props.navigation.navigate({routeName: 'Detail', params: {
                    videoItem: item
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