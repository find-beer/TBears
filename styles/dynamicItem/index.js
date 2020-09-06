import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    dynamicItemWrap: {
        backgroundColor: '#fff',
        overflow: 'hidden',
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
    },
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleSize(45),
        marginBottom: scaleSize(54),
    },
    dynamicInfo: {
        flex: 1,
    },
    avatarInner: {
        width: scaleSize(132),
        height: scaleSize(132),
        marginRight: scaleSize(40),
    },
    name: {
        fontSize: scaleFont(42),
        color: '#564F5F',
        fontWeight: 'bold',
        marginTop: scaleSize(20),
        marginBottom: scaleSize(20),
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: scaleSize(36),
        color: '#999999',
        alignItems: 'center',
    },
    line: {
        height: scaleSize(33),
        width: scaleSize(2),
        borderRadius: scaleSize(2),
        backgroundColor: '#999999',
        marginRight: scaleSize(20),
        marginLeft: scaleSize(10),
    },
    relationBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: scaleSize(222),
        height: scaleSize(92),
        justifyContent: 'center',
    },
    relationText: {
        color: '#fff',
        fontSize: scaleFont(40),
    },
    dynamicTextBox: {},
    dynamicText: {
        fontSize: scaleSize(48),
        color: '#564F5F',
    },
    dynamicImg: {
        marginTop: scaleSize(32),
        width: '100%',
        height: scaleSize(970),
    },
    operationBox: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: scaleSize(50),
        marginTop: scaleSize(30),
    },
    oerationItem: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    operationIcon: {
        width: scaleSize(50),
        height: scaleSize(50),
        marginRight: scaleSize(20),
    },
    operationText: {
        fontSize: scaleSize(46),
        color: '#564F5F',
        textAlign: 'center',
    },
});
