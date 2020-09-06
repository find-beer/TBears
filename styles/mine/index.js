import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    persionalTab: {},
    bgaWrapper: {
        width: '100%',
        height: scaleSize(1157),
        padding: scaleSize(54),
        backgroundColor: 'rgba(0,0,0,.5)',
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
    configFont: {
        fontSize: scaleFont(39),
        color: '#fff',
    },
    operationBox: {
        marginTop: scaleSize(54),
        height: scaleSize(76),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
    },
    operationBtn: {
        width: scaleSize(243),
        height: scaleSize(76),
        backgroundColor: '#fff',
        fontSize: scaleFont(36),
        color: '#ccc',
        borderRadius: scaleSize(38),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btnIcon: {
        width: scaleSize(32),
        height: scaleSize(32),
        marginTop: scaleSize(22),
    },
    btnText: {
        fontSize: scaleFont(36),
        color: '#333',
        lineHeight: scaleSize(76),
    },
    leftBtn: {
        marginRight: scaleSize(85),
    },
    lineSpace: {
        height: scaleSize(24),
        backgroundColor: '#f2f2f2',
    },
});
