import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { CommonActions } from "@react-navigation/native";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(
              CommonActions.reset({
                  index:0,
                  routes:[{name:'Home'}]
              })
            )
          }, 3000);
    }

    componentWillUnmount() {
    }

  
    render() {
        return (
        <View style={{flex:1, justifyContent:'center'}}>
            <Text style={{alignSelf:'center', fontSize:15, color:"#000000"}}>Hiver Demo</Text>
        </View>
        );
    }
}

export default Splash;