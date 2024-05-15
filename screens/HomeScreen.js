import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../reducers/action';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleAddEmployee = () => {
    if (name && age && address && city) {
      dispatch(addEmployee({ name, age, address, city }));
      setName('');
      setAge('');
      setAddress('');
      setCity('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={{color: '#000000'}}>Employee Profile</Text>
      </View>
      <View style={styles.addEmployee}>
        <TextInput
          placeholder="Name"
          placeholderTextColor='#000000'
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          placeholderTextColor='#000000'
          value={age}
          onChangeText={setAge}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          placeholderTextColor='#000000'
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />
        <TextInput
          placeholder="City"
          placeholderTextColor='#000000'
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
        <Button title=" Save Employee" onPress={handleAddEmployee} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profile: {
    marginBottom: 16,
  },
  addEmployee: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: '#000000'
  },
});

export default HomeScreen;
