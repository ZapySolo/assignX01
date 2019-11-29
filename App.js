/* eslint-disable react-native/no-inline-styles */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import axios from 'axios';

class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  _onPressSubmit = () => {
    // axios
    //   .post('http://localhost:4000/other/api/sign_up.php', {
    //     user: {
    //       email: this.state.email,
    //       password: this.state.password,
    //       submit: 'submit',
    //     },
    //   })
    //   .then(response => {
    //     if (response.status === 'success') {
    //       //navigate to homescreen
    //       const {navigate} = this.props.navigation;
    //       navigate('Form');
    //     }
    //   })
    //   .catch(() => {
    //     //handeling error
    //   });
    const {navigate} = this.props.navigation;
    navigate('Form');
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginBottom: 100, fontSize: 40}}>SignIn</Text>
        <TextInput
          style={{width: 300, height: 40, borderWidth: 1, paddingLeft: 10}}
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderWidth: 1,
            paddingLeft: 10,
            marginTop: 10,
          }}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <View style={{marginTop: 10}} />
        <Button onPress={this._onPressSubmit} title="Submit" />
      </View>
    );
  }
}

class FormScreen extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{width: 300, height: 40, borderWidth: 1, paddingLeft: 10, margin: 10}}
          placeholder="field1"
          onChangeText={field1 => this.setState({field1})}
          value={this.state.email}
        />
        <TextInput
          style={{width: 300, height: 40, borderWidth: 1, paddingLeft: 10, margin: 10}}
          placeholder="field2"
          onChangeText={field2 => this.setState({field2})}
          value={this.state.email}
        />
        <TextInput
          style={{width: 300, height: 40, borderWidth: 1, paddingLeft: 10, margin: 10}}
          placeholder="field3"
          onChangeText={field3 => this.setState({field3})}
          value={this.state.email}
        />
        <Button onPress={this._onPressSubmit} title="Submit" />
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
  },
  Form: {
    screen: FormScreen,
  },
});

const App = createAppContainer(MainNavigator);
export default App;
