import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button}>
          {/* Utilizando o ícone corretamente */}
          <Icon name="plus-circle" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
