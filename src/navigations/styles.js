import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    darkBlue:{
        backgroundColor:'#050C3D',
        fontSize:14,
        color:'#ffffff',
        width:2,
        marginTop:0,  
        marginLeft:0,
        marginBottom:0,
        borderRadius:0
    },
    lightBlue:{
        backgroundColor:'#6379FF',
        fontSize:50,
        color:'#ffffff',
        
        marginTop:0,  
        marginLeft:0,
        marginBottom:0,      
        borderRadius:0
    },

    drawerContent:{
        flex:1,    
    },
    userInfoSection:{
        alignItems:'center'
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:16,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    
    drawerSection:{
        marginTop:60
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },

    iconImg:{flexDirection: 'row', paddingTop:14},
    drawerItemLabel:{color: '#ffffff', fontSize:14},
    drawerItemView:{flexDirection: 'row',width:"100%"},
    drawerItemAndIconBind:{flexDirection: 'row',marginTop: 0,width:"90%"}

})