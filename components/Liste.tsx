import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemTask from './ItemTask';
import NoTask from './NoTask';
import StatTask from './StatTask';
import { useSelector } from 'react-redux';


const Liste = () => {
  //lecture de la liste des tâches dans le store
  const dataTasks = useSelector(((state)=>state.task));


  return (
    <FlatList 
      data={dataTasks}
      renderItem={({item})=><ItemTask task={item} />}
      keyExtractor={(item)=>item.id}
      ListEmptyComponent={NoTask}
      ListFooterComponent={StatTask}
    />
  )
}

export default Liste