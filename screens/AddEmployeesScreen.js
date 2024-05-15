import React from 'react';
import { View, Text, FlatList, StyleSheet, Touchable, Image, TouchableOpacity, Button } from 'react-native';
import { useSelector } from 'react-redux';

const AddEmployeesScreen = ({navigation}) => {
  const employees = useSelector((state) => state.employees);

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>Name: {item.name}</Text>
            <Text style={styles.itemName}>Age: {item.age}</Text>
            <Text style={styles.itemName}>Address: {item.address}</Text>
            <Text style={styles.itemName}>City: {item.city}</Text>
          </View>
        )}
      />
      <Button title='Add Employee' onPress={() => navigation.navigate('Home')}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#000000'
  },
  addButton: {
    backgroundColor: '83c5be',
    padding: 20,
    margin: 10
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemName: {
    color: '#000000'
  }
});

export default AddEmployeesScreen;
