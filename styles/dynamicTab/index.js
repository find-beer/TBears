import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    tabWrapper: {},
    tabHeader: {
        paddingLeft: scaleSize(357),
        paddingRight: scaleSize(357),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: scaleSize(130),
    },
    tabText: {
        fontSize: scaleFont(42),
        color: '#999',
    },
    tabTextActive: {
        fontSize: scaleFont(48),
        color: '#564f5f',
    },
    tabBar: {
        width: scaleSize(50),
        height: scaleSize(4),
        borderRadius: scaleSize(2),
        backgroundColor: '#564f5f',
        marginTop: scaleSize(10),
        marginLeft: scaleSize(20),
    },
});
