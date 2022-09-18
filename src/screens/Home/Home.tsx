import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity,FlatList, TextInput } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import {update} from '../../redux/counter/updateListSlice'



interface HomeProps {
    list: Array<ListItem>
}

const Home:React.FunctionComponent<HomeProps> = () => {

  const list = useSelector((state:any) => state.update.list)
  const dispatch = useDispatch()

  const [name, setName] = useState("");


  useEffect(() => {
    console.log('List : ',list)
  },[list])

  
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <TouchableOpacity onPress={() => dispatch(update(name))}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
