import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/app/(tabs)/styles'
import { useDispatch } from 'react-redux';
import { ajouter } from '@/app/(tabs)/store/slices/taskSlice';

const FormAdd = () => {
    //déclaration de variable TextTache
    const [textTache,setTextTache] = useState('');
    //pour écrire dans le store
    const dispatch = useDispatch()

    //fonction pour ajouter une tâche
    const addTodo = () => { 

        //formatage d'une nouvelle tache
        const newTodo = {
          id:Date.now().toString(),
          title:textTache,
          completed:false
        }
        dispatch(ajouter(newTodo))
        setTextTache('')
    }
    //end addTodo


  return (
    <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ajouter une nouvelle tâche..."
              value={textTache}
              onChangeText={setTextTache}
              onSubmitEditing={addTodo}
            />
            <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
    </View>
  )
}

export default FormAdd