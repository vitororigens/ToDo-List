import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image 
            style={styles.logo}
            source={require('../../assets/Logo.png')} />

                
            </View>
             <Text>ToDo List</Text>
             
        </View>
    )
}