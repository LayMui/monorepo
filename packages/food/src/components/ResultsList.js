import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
import { testProperties } from '../utility/helper';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) 
    return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item }) => {
         
          return (
            <TouchableOpacity
             {...testProperties(`${item.name}`)}
              onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
      marginHorizontal: 15
  }
});

export default withNavigation(ResultsList);
