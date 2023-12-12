import { StatusBar } from 'expo-status-bar';
import {Text, View, TextInput, TouchableOpacity,Image, ScrollView} from 'react-native';
import React, { useState, useEffect,  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default function Home() {
  const [textInputValue, setTextInputValue] = useState('');
  const [todoList, setToDoList] = useState([]);
  const [isCheckedList, setIsCheckedList] = useState([]);

  useEffect(() => {
    loadTodoList();
  }, []);

  const loadTodoList = async () => {
    // I used local storage for this project
    try {
      const storedTodoList = await AsyncStorage.getItem('todoList');
      const storedCheckedList = await AsyncStorage.getItem('isCheckedList');

      if (storedTodoList && storedCheckedList) {
        setToDoList(JSON.parse(storedTodoList));
        setIsCheckedList(JSON.parse(storedCheckedList));
      }
    } catch (error) {
      console.error('There is an error occured:', error);
    }
  };

  const saveTodoList = async () => {
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
      await AsyncStorage.setItem('isCheckedList', JSON.stringify(isCheckedList));
    } catch (error) {
      console.error('There is an error occured:', error);
    }
  };

  const handleInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleButtonPress = () => {
    setToDoList([...todoList, textInputValue]);
    setIsCheckedList([...isCheckedList, false]);
    setTextInputValue('');
  };

  const handleDeleteButtonPress = (index) => {
    const updatedList = [...todoList];
    const updatedCheckedList = [...isCheckedList];
    updatedList.splice(index, 1);
    updatedCheckedList.splice(index, 1);
    setToDoList(updatedList);
    setIsCheckedList(updatedCheckedList);
  };

  const handleCheckBoxPress = (index) => {
    const updatedCheckedList = [...isCheckedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setIsCheckedList(updatedCheckedList);
  };

  //Saves to AsyncStorage whenever the app is updated
  useEffect(() => {
    saveTodoList();
  }, [todoList, isCheckedList]);

  return (

    <ScrollView>
        <View style={styles.screen}>
        <StatusBar style="auto" />
        <View style={styles.appbar}>
            <Text style={styles.appbarTitle}>ToDo App</Text>
        </View>
        
        <Image
        source={require('../../assets/image.jpg')}
        style={styles.image}
      />
        <Text style={styles.title}>ToDo Tasks Zenfeat</Text>

        <View style={styles.newContainer}>
        
        <View style={styles.inputRow}>
            
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                onChangeText={handleInputChange}
                value={textInputValue}
            />
           
           <TouchableOpacity style={{marginRight: 16}} onPress={() => handleButtonPress()}>
                    <Icon name="plus-circle" size={25} color="#4D5EFF" />
                </TouchableOpacity>
        </View>

 
                    {todoList.map((todo, index) => (
                <View key={index} style={styles.listContainer}>
                <TouchableOpacity onPress={() => handleCheckBoxPress(index)}>
                    <View style={styles.checkBox}>
                    {isCheckedList[index] && <Text style={{ color: 'green' }}>✓</Text>}
                    </View>
                </TouchableOpacity>
                <Text>{todo}</Text>

                    <TouchableOpacity onPress={() => handleDeleteButtonPress(index)}>
                        <Icon name="trash" size={25} color="red" />
                    </TouchableOpacity>
                </View>
            ))}
          
        </View>
    </View>
    </ScrollView>



  );
}

