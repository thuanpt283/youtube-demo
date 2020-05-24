import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const CommonNavigator = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
});

export default createAppContainer(CommonNavigator);