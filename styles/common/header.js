import { StyleSheet, Platform } from 'react-native'
import { scaleSize, scaleFont } from '@utils/scaleUtil'
import { ifIphoneX } from '@utils/screenUtil'

export default StyleSheet.create({
    headerContainer: {
        paddingTop: Platform.select({
            ios: ifIphoneX(44, 20),
            android: 20
        })
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: scaleSize(159),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
    headerLeft: {
        position: 'absolute',
        left: scaleSize(54)
    },
    headerGoBackIcon: {
        width: scaleSize(48.1),
        height: scaleSize(48.1)
    },
    headerTitle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleText: {
        fontSize: scaleFont(48),
        fontWeight: 'bold',
        color: '#333333'
    },
    headerRight: {
        position: 'absolute',
        right: scaleSize(54)
    }
})