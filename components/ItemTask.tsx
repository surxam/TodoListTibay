import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';  
import { useDispatch } from 'react-redux'
import { modifier, supprimer } from '@/app/(tabs)/store/slices/taskSlice'
import { styles } from '@/app/(tabs)/styles'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

const ItemTask = ({ task }) => {
  const dispatch = useDispatch()

  const toggleTodo = (id) => {
    dispatch(modifier(id))
  }

  const deleteTodo = (id) => {
    dispatch(supprimer(id))
  }


  const onSwipeableRightOpen = () => {
     dispatch(supprimer(task.id))
  }

 
  const renderRightActions = () => {
    return (
      <View style={styles.swipeDelete}>
        <Text style={styles.swipeDeleteText}>Supprimer</Text>
      </View>
    )
  }

   const RightAction = () => {
      return(
        <View style={styles.rightAction}>
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

         <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => deleteTodo(task.id)}
          >
            <Text style={styles.deleteText}>✕</Text>
          </TouchableOpacity>
        </View>
      )
    }

  return (
    <ReanimatedSwipeable
        containerStyle={styles.todoItem}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        leftThreshold={40}
        renderRightActions={RightAction}>
          
      <View style={styles.todoItem}>
       

        <Text
          style={[
            styles.todoText,
            task.completed && styles.todoTextCompleted,
          ]}
        >
          {task.title}
        </Text>

        
        
      </View>
    </ReanimatedSwipeable>
  )
}

export default ItemTask
