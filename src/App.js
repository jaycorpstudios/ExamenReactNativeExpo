/**
 * Examen App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import CurrentWeight from './components/CurrentWeight';
import AddRecord from './components/AddRecord';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      records: [
        { id: 0, weigth: 95, date: 1518449400000 },
        { id: 1, weigth: 96.1, date: 1518362400000 },
        { id: 2, weigth: 98, date: 1514995200000 },
        { id: 3, weigth: 94.5, date: 1512925200000 },
        { id: 4, weigth: 94, date: 1512147600000 },
        { id: 5, weigth: 93.5, date: 1512147600000 },
        { id: 6, weigth: 87.5, date: 1508770800000 }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Registros de Peso</Text>
        </View>
        <View style={styles.currentWeight}>
          <CurrentWeight currentWeigth={this.state.records[0]}/>
        </View>
        <View style={styles.newRecord}>
          <AddRecord/>
        </View>
        <View style={styles.records}>
          <View style={styles.recordsBar}>
            <TouchableHighlight>
              <Text style={styles.touchableBarText}>PESO</Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text style={styles.touchableBarText}>FECHA</Text>
          </TouchableHighlight>
          </View>
          <ScrollView style={styles.recordsContent}>

            <View style={styles.recordContainer}>
              <Text style={styles.recordWeightText}>95.0</Text>
              <Text style={styles.recordDateText}>Feb. 12/2018 9:30 a.m.</Text>
            </View>

            <View style={styles.recordContainer}>
              <Text style={styles.recordWeightText}>96.1</Text>
              <Text style={styles.recordDateText}>Feb. 11/2018 9:20 a.m.</Text>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#000000',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 21
  },
  currentWeight: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 20
  },
  newRecord: {
    height: 142,
    padding: 20
  },
  records: {
    flex: 1
  },
  recordsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 30,
    backgroundColor: '#f76d1d'
  },
  touchableBarText: {
    fontSize: 15,
    color: 'white'
  },
  recordContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    paddingLeft: 20,
    paddingRight: 20
  },
  recordWeightText: {
    fontSize: 21,
    color: '#f76d1d'
  },
  recordDateText: {
    fontSize: 21,
    color: 'gray'
  }

});
