import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import data from './perfomance.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true, 
      dataSource: [], 
    };
  }

  componentDidMount() {
            this.setState({
              isLoading: false, 
              dataSource: data.perfomances
            });
  }

  render() {
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.perfomances}>{item.perfomance} Speaker: {item.speaker} Date:  {item.date}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  perfomances: {
    fontSize: 20,
  }
});