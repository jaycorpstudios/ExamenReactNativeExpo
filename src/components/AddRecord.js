/**
 * AddRecord Component
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {records} from './../App';



export default class AddRecord extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      text:  '90.0'
    }
  }

  validateWeight(text){
      const regexValidation = /^(\d)+\.*\d{0,2}$/;
      //Add Validation here, you can investigate hot to test a Regular Expression on JavaScript.
    }

  addRecord(e){
    e.preventDefault();
    this.state = {records};
    const newRecord = [
      {id: 7, weigth: this.newRecord.value, date: 3020918400000 }
    ];

    this.setState({
      records: [...this.state.records, newRecord]
    })

  }


  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
              id = 'newRecord'
              ref = {(records) => {this.newRecord = records}}
              style={styles.inputText}
              autoCorrect={false}
              underlineColorAndroid='transparent'
              placeholder={'Peso'}
              keyboardType='numeric'
              editable={true}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
          <TextInput
              style={styles.inputText}
              placeholder={'Fecha'}
              editable={false}/>
        </View>
        <View style={styles.actionContainer}>
          <TouchableHighlight onPress={(e) => {this.addRecord(e)}} style={styles.addButton}>
            <Text style={styles.addButtonText}>AGREGAR</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputsContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  inputText: {
    fontSize: 19,
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  addButton:{
    width: 298,
    height: 43,
    borderWidth: 2,
    borderColor: '#f76d1d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  addButtonText: {
    fontSize: 17,
    color: '#f76d1d',
  }

});
