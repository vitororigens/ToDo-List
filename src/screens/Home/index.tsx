import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View, Text, ScrollView, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { Tarefas } from '../../components/Tarefas';
import { Empty } from '../../components/Empty';

export function Home() {
    const [tarefas, setTarefas] = useState<string[]>([])
    const [tarefasName, setTarefasName] = useState('')
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    function handleTarefaAdd() {
        if(tarefas.includes(tarefasName)){
            return Alert.alert('Tarefa já existe', 'Você já possui uma tarefa pendente com esse nome ' )
        }
        setTarefas(prevState => ([...prevState, tarefasName]))
        setTarefasName('')
    }
    function handleTarefaRemove(name: string) {
        Alert.alert('Remover', `Remover tarefa ${name}`, [
            {
                text: 'Sim',
                onPress: () => setTarefas(prevState => prevState.filter(tarefa => tarefa !== name))
            },
            {
                text: 'Não',
                style:'cancel'

            }
        ])
    }
    function handleTarefaSelected(name: string) {
        if (selectedTasks.includes(name)) {
            setSelectedTasks(prevState => prevState.filter(task => task !== name));
        } else {
            setSelectedTasks(prevState => [...prevState, name]);
        }
    }

    const totalTaskCreated = tarefas.length
    const totalTaskChecked = selectedTasks.length; 


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
                    onChangeText={text => setTarefasName(text)}
                    value={tarefasName}
                />
                <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                    <Icon name="plus-circle" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTarefa}>
                <View style={styles.estadoTarefa}>
                    <Text style={styles.textCriadas}>
                        Criadas {totalTaskCreated}
                    </Text>
                    <Text style={styles.textConcluidas}>
                        Concluídas {totalTaskChecked}
                    </Text>
                </View>
               <FlatList
               data={tarefas}
               keyExtractor={item => item}
               renderItem={({item}) =>(
                <Tarefas
                key={item}
                name={item}
                onRemove={() => handleTarefaRemove(item)}
                selected={selectedTasks.includes(item)}
                onSelected={() => handleTarefaSelected(item)}
            />

               )}
               showsVerticalScrollIndicator={false}
               ListEmptyComponent={() =>(
                <Empty/>
               )}
               />
               
               
              
            </View>

        </View>
    );
}
