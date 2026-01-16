import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/app/(tabs)/styles'
import { useSelector } from 'react-redux'

const StatTask = () => {
   //lecture des taches
   const todos = useSelector((state)=>state.task)

  return (
    <View>
      {todos.length > 0 && (
              <Text style={styles.counter}>
                {todos.filter((t) => !t.completed).length} tâche(s) restante(s)
              </Text>
            )}
    </View>
  )
}

export default StatTask