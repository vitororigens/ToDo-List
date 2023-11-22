import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#808080',
    },
    header:{
        backgroundColor:'#0D0D0D',
        height:200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        height:30,  
    },
    form:{
        width:'100%',
        padding:24,
        flexDirection:'row',
        position:'absolute',
        marginTop:150,
    },
    textInput:{
        flex:1,
        height:54,
        backgroundColor:'#262626',
        borderWidth:1,
        borderColor: '#0D0D0D',
        borderRadius:5,
        color:'#FFFFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 4,

    },
    button:{
        height:54,
        width:54,
        backgroundColor:'#1E6F9F',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    image:{

    }
})