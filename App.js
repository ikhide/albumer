import React, {Component} from 'react';
import AlbumList from './components/AlbumList';
import {Text, View, Button} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import MainScreen from './Screens/MainScreen';
import {Icon} from 'native-base';
import AddMediaTab from './Screens/AppTabNavigator/AddMediaTab';
import HomeTab from './Screens/AppTabNavigator/HomeTab';
import FeedsTab from './Screens/AppTabNavigator/FeedsTab';
import ProfileTab from './Screens/AppTabNavigator/ProfileTab';
import SettingsTab from './Screens/AppTabNavigator/SettingsTab';
import DetailTab from './Screens/AppTabNavigator/DetailTab';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
        <Button title="Sign Up" onPress={() => alert('Sign up')}></Button>
      </View>
    );
  }
}

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: FeedsTab,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Feed',
          headerLeft: (
            <Icon
              name="md-menu"
              size={30}
              style={{paddingLeft: 10}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileTab,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon
            name="md-menu"
            size={30}
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
  Detail: {
    screen: DetailTab,
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsTab,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (
          <Icon
            name="md-menu"
            size={30}
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed: FeedStack,
    Profile: ProfileStack,
    Settings: SettingsStack,
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    },
  },
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator,
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Dashboard: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer(AppSwitchNavigator);
