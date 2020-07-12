import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    persionalTab: {},
    bgaWrapper: {
        height: scaleSize(1000),
        padding: scaleSize(54),
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    extendsConfig: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: scaleSize(92),
        height: scaleSize(92),
    },
    settingBox: {
        margin: scaleSize(56),
        height: scaleSize(48),
        width: scaleSize(140),
        position: 'absolute',
        right: 0,
        display: 'flex',
        flexDirection: 'row',
    },
    configIcon: {
        width: scaleSize(48),
        height: scaleSize(48),
        marginRight: scaleSize(12),
    },
    operationBox: {
        overflow: 'hidden',
        height: scaleSize(260),
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 60,
        paddingLeft: 60,
    },
    itemBox: {
        height: scaleSize(150),
        width: scaleSize(340),
        borderRadius: scaleSize(30),
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemIcon: {
        width: scaleSize(60),
        height: scaleSize(60),
        marginRight: scaleSize(20),
    },
    itemText: {
        fontSize: scaleFont(44),
        color: '#000',
        lineHeight: scaleSize(150),
    },
    lineSpace: {
        height: scaleSize(24),
        backgroundColor: '#f2f2f2',
    },
});
