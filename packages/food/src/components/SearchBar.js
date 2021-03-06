import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { testProperties } from '../utility/helper';

const SearchBar = ({ term, onTermChange , onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
    <Feather name="search" style={styles.iconStyle}/>
      <TextInput 
      {...testProperties('search_bar')}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputStyle} 
      placeholder="Search"
      value={term}
      //onChangeText={newTerm => onTermChange(newTerm)}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5, 
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    }, 
    inputStyle: {
       fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 2

    }
});

export default SearchBar;
