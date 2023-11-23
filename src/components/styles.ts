import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    containerLista:{
        width:'100%',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
     
    },
    task:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#333333',
        height:65,
        borderWidth:2,
        borderColor:'#262626',
        borderRadius:5,
        alignItems:'center',
        padding:15,
    },
    textTask:{
        fontSize:14,
        color:'#FFF'
    }
})