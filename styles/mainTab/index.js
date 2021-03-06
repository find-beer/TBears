import { StyleSheet } from 'react-native'
import { scaleSize, scaleFont } from '@utils/scaleUtil'
import { ifIphoneX } from '@utils/screenUtil'

export default StyleSheet.create({
    rootWrapper: {
        paddingBottom: ifIphoneX(30, 0),
        backgroundColor: '#ffffff'
    },
    root: {
        flexGrow: 1,
        position: 'relative',
        height: '100%',
        backgroundColor: '#ffffff'
    },
    tabScreen: {
        flexGrow: 1
    },
    tabBar: {
        flexDirection: 'row',
        height: scaleSize(141),
        paddingLeft: scaleSize(50),
        paddingRight: scaleSize(50),
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2'
    },
    tabBarItem: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarItemPublish: {
        width: scaleSize(170)
    },
    tabBarItemIcon: {
        width: scaleSize(58),
        height: scaleSize(58)
    },
    tabBarItemLabel: {
        marginTop: scaleSize(9),
        fontSize: scaleFont(33),
        color: '#c2c2c2'
    },
    tabBarItemLabelActive: {
        color: '#564f5f'
    },
    tabBarItemIconPublish: {
        position: 'relative',
        top: scaleSize(-47),
        width: scaleSize(170),
        height: scaleSize(170)
    },
    screen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    screenHidden: {
        overflow: 'hidden',
        opacity: 0
    }
})