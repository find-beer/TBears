import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    InfoOuter: {
        display: 'flex',
        alignItems: 'center',
    },
    avatarWrapper: {
        width: scaleSize(300),
        height: scaleSize(300),
        borderRadius: scaleSize(150),
        backgroundColor: '#fff',
        marginTop: scaleSize(109),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInner: {
        width: scaleSize(264),
        height: scaleSize(264),
        borderRadius: scaleSize(132),
    },
    userBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSize(30),
        height: scaleSize(92),
    },
    userName: {
        fontSize: scaleFont(66),
        fontWeight: 'bold',
        marginRight: scaleSize(8),
        color: '#fff',
    },
    userSex: {
        width: scaleSize(40),
        height: scaleSize(40),
        lineHeight: scaleSize(92),
        color: '#fff',
    },
    releationNet: {
        color: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(13),
        height: scaleSize(50),
    },
    netPerson: {
        fontSize: scaleFont(36),
        color: '#fff',
    },
    netPersonNum: {
        fontSize: scaleFont(42),
        color: '#fff',
    },
    netIcon: {
        width: scaleSize(46),
        height: scaleSize(46),
    },
    hobbyWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    hobbyInner: {
        width: scaleSize(810),
        height: scaleSize(80),
        borderRadius: scaleSize(40),
        borderWidth: scaleSize(3),
        borderColor: '#c2c2c2',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: scaleSize(56),
        paddingRight: scaleSize(56),
        backgroundColor: 'rgba(204,204,204,.23)',
        marginTop: scaleSize(42),
    },
    hobbyIcon: {
        width: scaleSize(60),
        height: scaleSize(60),
        marginTop: scaleSize(10),
    },
    hobbyItem: {
        fontSize: scaleFont(32),
        opacity: 0.78,
        color: '#fff',
        lineHeight: scaleSize(80),
    },
    userProfile: {
        marginTop: scaleSize(50),
        paddingLeft: scaleSize(80),
        paddingRight: scaleSize(80),
        position: 'relative',
    },
    locationIcon: {
        width: scaleSize(22),
        height: scaleSize(32),
        position: 'absolute',
        left: scaleSize(80),
        top: 1,
    },
    location: {
        fontSize: scaleFont(34),
        color: '#fff',
        position: 'absolute',
        left: scaleSize(100),
        top: 1,
    },
    profileText: {
        fontSize: scaleFont(36),
        color: '#fff',
    },
});
