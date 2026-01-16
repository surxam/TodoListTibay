import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Header  from '@/components/Header'
import { styles } from './styles'
import FormAdd from '@/components/FormAdd'
import Liste from '@/components/Liste'
import { Provider }  from 'react-redux'
import { store } from './store/store'
import StatTask from '@/components/StatTask'




const index = () => {
  return (
    <Provider store={store}>

    
    <View style={styles.container}>
      <Header />
      <StatTask />
      <FormAdd />
      <Liste />
      
    </View>
    </Provider>
  )
}

export default index

