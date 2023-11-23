import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    containerTarefa:{
        width:'100%',
        padding:24,
        marginTop: 55,
        height:250,
    },
    estadoTarefa:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#333333',
        paddingBottom:20,
        borderBottomWidth:1,
    },
    textCriadas:{
        fontSize:16,
        color:'#4EA8DE'
    },
    textConcluidas:{
        fontSize:16,
        color:'#8284FA'
    },
    containerLista:{
        width:'100%',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
     
    },
    task:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#262626',
        height:65,
        borderWidth:1,
        borderColor:'#333333',
        borderRadius:5,
        alignItems:'center',
        padding:15,
    },
    textTask:{
        fontSize:14,
        color:'#FFF'
    }
})