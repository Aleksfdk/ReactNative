import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {

const [states, setStates] = useState([]);

const [inpText, setinpText] = useState();

const Addtodo = (datas) => {

setStates(prev =>[...prev, {
  id: Date.now().toString(),
  title: datas
}])
};

const newTodo = () => {
  Addtodo(inpText);
  setinpText('');
};
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Hello world!</Text>
      <View>
        <Image style={styles.images} source={require("./src/img/index.jpg")} />
      </View>
      <View style={styles.block}>
        <TextInput style={styles.input} onChangeText={text =>setinpText(text)}
        value={inpText}
        />
        <Button style={styles.buttons} title="Start!" onPress={newTodo} />
      </View>
      <View>
        {states.map(todo => {
          return <Text key={todo.id}>{todo.title}</Text>
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  texts: {
    color: "black",
    fontSize: 24
  },
  images: {
    width: 100,
    height: 100,
    marginVertical: 20
  },
  buttons: {
    fontSize: 20
  },
  input: {
    width: "50%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "grey"
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    fontSize: 22
  }
});
