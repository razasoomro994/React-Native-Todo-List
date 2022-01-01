import React, { useState } from 'react'

import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './component/Task';

export default function App() {
  const [task, setTask] = useState()
  const [taskItem, setTaskItem] = useState([]);

  const handleTask = () => {
    setTaskItem([...taskItem, task]),
    setTask('');
  }

  const deleteitem =(index) =>{
    let itemCopy=[...taskItem];
    itemCopy.splice(index,1)
    setTaskItem(itemCopy)
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.wrapper}>

        <Text style={styles.section_title}>
          Today's Tasks
        </Text>


        <View style={styles.items}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>deleteitem(index)}>
                <Task  text={item}/>
              </TouchableOpacity> 
            )
            })
          }


        </View>


      </View>

      <KeyboardAvoidingView style={styles.writeTaskWrapper} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={e => setTask(e)} />

        <TouchableOpacity onPress={handleTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+ </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',

  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  section_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'white',
  },
  items: {
    marginTop: 20,
    fontSize: 10,
    fontWeight: 'bold',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',

  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 60,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    borderRadius: 80,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  addText:{
    fontSize:40,
    padding:10,
    paddingBottom:18,
  }

});
