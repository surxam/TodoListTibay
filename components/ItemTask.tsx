import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/app/(tabs)/styles'
import { useDispatch } from 'react-redux'
import { modifier, supprimer } from '@/app/(tabs)/store/slices/taskSlice'

const ItemTask = ({task}) => {
  const dispatch = useDispatch(); //pour écrire dans le store
  //supp la tâche

      const toggleTodo =(id) =>{
        console.log('toggle :',id)
        dispatch(modifier(id))
      }

    const deleteTodo = (id) => { 
      console.log('delete:',id) 
      dispatch(supprimer(id))
    }

  return (
    <View style={styles.todoItem}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleTodo(task.id)}
          >
            <View
              style={[
                styles.checkboxInner,
                task.completed && styles.checkboxChecked,
              ]}
            >
              {task.completed && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
    
          <Text
            style={[
              styles.todoText,
              task.completed && styles.todoTextCompleted,
            ]}
          >
            {task.title}
          </Text>
    
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => deleteTodo(task.id)}
          >
            <Text style={styles.deleteText}>✕</Text>
          </TouchableOpacity>
        </View>
  )
}

export default ItemTask