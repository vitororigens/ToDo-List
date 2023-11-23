import { View, Text, TouchableOpacity, } from "react-native"
import { styles } from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons'
type props = {
    name: string,
    onRemove: () => void,
    selected: boolean,
    onSelected: () => void,
}

export function Tarefas({ name, onRemove, selected, onSelected }: props) {
    return (

        <View style={styles.containerLista}>
            <View style={styles.task}>
                <TouchableOpacity onPress={() => onSelected(name)} >
                    <MaterialCommunityIcons
                        name={selected ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
                        size={32}
                        color='#4EA8DE'

                    />
                </TouchableOpacity>
                <Text style={styles.textTask}>{name}</Text>
                <MaterialCommunityIcons
                    onPress={onRemove}
                    name="trash-can-outline"
                    color='#808080'
                    size={32}
                />
            </View>
        </View>

    )
}