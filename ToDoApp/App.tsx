import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [textInputValue, setTextInputValue] = useState('');
  const [todoList, setToDoList] = useState([]);
  const [isCheckedList, setIsCheckedList] = useState([]);

  useEffect(() => {
    // Uygulama başladığında AsyncStorage'ten verileri yükle
    loadTodoList();
  }, []);

  const loadTodoList = async () => {
    try {
      const storedTodoList = await AsyncStorage.getItem('todoList');
      const storedCheckedList = await AsyncStorage.getItem('isCheckedList');

      if (storedTodoList && storedCheckedList) {
        setToDoList(JSON.parse(storedTodoList));
        setIsCheckedList(JSON.parse(storedCheckedList));
      }
    } catch (error) {
      console.error('Veri yüklenirken bir hata oluştu:', error);
    }
  };

  const saveTodoList = async () => {
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
      await AsyncStorage.setItem('isCheckedList', JSON.stringify(isCheckedList));
    } catch (error) {
      console.error('Veri kaydedilirken bir hata oluştu:', error);
    }
  };

  const handleInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleButtonPress = () => {
    console.log('Girilen metin:', textInputValue);
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

  // Uygulama her güncellendiğinde AsyncStorage'e kaydet
  useEffect(() => {
    saveTodoList();
  }, [todoList, isCheckedList]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello</Text>
      <TextInput
        style={styles.input}
        placeholder="Metin girin"
        onChangeText={handleInputChange}
        value={textInputValue}
      />
      <Button title="Gönder" onPress={handleButtonPress} />
      <Text>ToDo List</Text>
      {todoList.map((todo, index) => (
        <View key={index} style={styles.listRow}>
          <TouchableOpacity onPress={() => handleCheckBoxPress(index)}>
            <View style={styles.checkBox}>
              {isCheckedList[index] && <Text style={{ color: 'white' }}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text>{todo}</Text>
          <Button title="Sil" onPress={() => handleDeleteButtonPress(index)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '100%',
  },

  listRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  checkBox: {
    marginRight: 8,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
});
