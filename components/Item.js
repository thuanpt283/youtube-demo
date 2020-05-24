import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Item = props => {
	return (
		<TouchableOpacity onPress={props.onClick}>
			<View style={styles.item}>
				<Image style={styles.avatar}
				source={{
					uri: props.video.snippet.thumbnails.default.url,
				}}
				/>
				<View style={styles.detail}>
					<Text style={styles.nickname}>{props.video.snippet.title}</Text>
					<Text style={styles.group}>{props.video.snippet.channelTitle}</Text>
				</View>
			</View>
		</TouchableOpacity>
)};

const styles = StyleSheet.create({
	avatar: {
		width: 120,
		height: 90,
		marginRight: 10
	},
	item: {
		flexDirection:'row',
		width: '100%',
		backgroundColor: '#FFF',
		borderRadius: 10,
		overflow: 'hidden',
		padding: 10,
		marginBottom: 20,
	},
	detail: {
		flex: 1
	},
	nickname: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	group: {
	},
	lastThanks: {

	}
})

export default Item;