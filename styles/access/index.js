import { StyleSheet } from 'react-native'
import { scaleSize, scaleFont } from '@utils/scaleUtil'

export default StyleSheet.create({
    configWrap:{

    },
    configInner:{
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingLeft:scaleSize(54),
        paddingRight:scaleSize(54)
    },
    configItem:{
        height:scaleSize(170),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems:'center'
    },
    configItemText:{
        fontSize:scaleFont(42),
        color:'#333',
        lineHeight:scaleSize(170)
    },
    configItemDes:{
        fontSize:scaleFont(39),
        color:'#999',
        lineHeight:scaleSize(170)
    },
    configItemArrow:{
        width:scaleSize(80),
        height:scaleSize(80),
    },
    logoutBtn:{
        fontSize:scaleFont(42),
        textAlign:'center',
        color:'rgba(194,61,77,0.82)',
        paddingTop:scaleSize(54)
    }
})