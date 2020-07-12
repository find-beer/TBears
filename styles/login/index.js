import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    bgWrapper: {
        backgroundColor: '#fff',
        height: '100%',
    },
    header: {
        marginTop: scaleSize(235),
        marginBottom: scaleSize(170),
    },
    headerText: {
        fontSize: scaleFont(52),
        color: '#564F5F',
        textAlign: 'center',
    },
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#f2f2f2',
        marginBottom: scaleSize(87),
    },
    loginForm: {
        paddingLeft: scaleSize(110),
        paddingRight: scaleSize(110),
    },
    getSmsCodeBtn: {
        width: scaleSize(200),
        color: '#564F5F',
    },
    formItem: {
        flex: 1,
        paddingTop: scaleSize(36),
        paddingBottom: scaleSize(36),
        fontSize: scaleFont(42),
        margin: 0,
        padding: 0,
        textAlign: 'left',
        color: '#999999',
    },
});
