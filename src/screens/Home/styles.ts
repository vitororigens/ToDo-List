import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#272727',
    },
    header:{
        backgroundColor:'#0D0D0D',
        height:200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        height:32,  
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
    containerTarefa:{
        width:'100%',
        padding:24,
        marginTop: 55,
        flex:1,
    },
    estadoTarefa:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#333333',
        paddingBottom:20,
        borderBottomWidth:1,
        marginBottom:50,
    },
    
    textCriadas:{
        fontSize:16,
        color:'#4EA8DE'
    },
    textConcluidas:{
        fontSize:16,
        color:'#8284FA'
    },
})