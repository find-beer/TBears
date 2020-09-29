import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    bgWrapper: {
        backgroundColor: '#fff',
        height: '100%',
    },
    flexImg: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: scaleSize(150),
        marginBottom: scaleSize(100),
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 0,
    },
    avaterIcon: {
        alignSelf: 'center',
        width: scaleSize(278),
        height: scaleSize(278),
        marginBottom: scaleSize(50),
        borderRadius: scaleSize(139),
    },
    registerForm: {
        paddingLeft: scaleSize(110),
        paddingRight: scaleSize(110),
    },
    label: {
        fontSize: scaleFont(42),
        color: '#999999',
        width: scaleSize(200),
    },
    birthdayLabel: {
        fontSize: scaleFont(42),
        color: '#999999',
    },
    birthdayBox: {
        marginBottom: scaleSize(87),
        paddingBottom: scaleSize(36),
        paddingLeft: 0,
        paddingRight: 0,
        color: '#999999',
    },
    arrowIcon: {
        width: scaleSize(60),
        height: scaleSize(60),
        marginLeft: scaleSize(6),
    },
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: scaleSize(2),
        borderBottomColor: '#eee',
        marginBottom: scaleSize(87),
        paddingBottom: scaleSize(36),
    },
    formItem: {
        flex: 1,
        fontSize: scaleFont(42),
        margin: 0,
        padding: 0,
        textAlign: 'left',
        color: '#999999',
    },
    description: {
        width: '100%',
        height: scaleSize(300),
        borderWidth: scaleSize(3),
        padding: scaleSize(10),
        borderColor: '#f2f2f2',
        borderTopWidth: scaleSize(3),
    },
    registerBtnBox: {
        width: '100%',
        height: scaleSize(120),
        borderRadius: scaleSize(40),
        backgroundColor: '#8A8DF9',
        marginTop: scaleSize(70),
    },
    registerBtnText: {
        color: '#fff',
    },
    sexBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    radio: {
        borderWidth: scaleSize(1),
        borderColor: '#999',
        margin: scaleSize(10),
    },
    dateLabel: {
        color: '#999999',
        fontSize: scaleSize(42),
    },
    dateBox: {
        marginLeft: scaleSize(-40),
        marginTop: scaleSize(-70),
        marginBottom: scaleSize(50),
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
});
