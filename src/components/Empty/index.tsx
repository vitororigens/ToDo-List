import { Image, View, Text } from "react-native";
import { styles } from "./styles";

export function Empty(){
    return(
        <View style={styles.empty}>
            <Image source={require('../../assets/Clipboard.png')}/>
            <Text style={styles.title}>
            Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.subtitle}>
            Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}