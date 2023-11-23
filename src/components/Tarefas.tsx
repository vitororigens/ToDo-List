import { View, Text, Image, TouchableOpacity, } from "react-native"
import { styles } from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Tarefas() {
    return (
        <View style={styles.containerTarefa}>
            <View style={styles.estadoTarefa}>
                <Text style={styles.textCriadas}>
                    Criadas 0
                </Text>
                <Text style={styles.textConcluidas}>
                    Concluídas 0
                </Text>
            </View>
            <View style={styles.containerLista}>
               <View style={styles.task}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='check-circle'
                    size={32}
                    color='#4EA8DE'
                    />
                </TouchableOpacity>
                <Text style={styles.textTask}>Cortar cabelo</Text>
                <MaterialCommunityIcons name="trash-can-outline"
                color='#808080'
                size={32}
                />
               </View>
            </View>
        </View>
    )
}