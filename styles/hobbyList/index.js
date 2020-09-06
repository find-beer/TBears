import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    bgWrapper: {
        backgroundColor: '#fff',
        height: '100%',
    },
    header: {
        marginTop: scaleSize(240),
        marginBottom: scaleSize(150),
    },
    headerText: {
        fontSize: scaleFont(48),
        color: '#999999',
        textAlign: 'center',
    },
    hobbyBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: scaleSize(50),
        paddingRight: scaleSize(50),
        marginBottom: scaleSize(80),
    },
    hobbyItem: {
        height: scaleSize(100),
        paddingLeft: scaleSize(50),
        paddingRight: scaleSize(50),
        borderRadius: scaleSize(50),
        marginRight: scaleSize(20),
        marginBottom: scaleSize(20),
        backgroundColor: '#dddddd',
    },
    hobbyActiveItem: {
        height: scaleSize(100),
        paddingLeft: scaleSize(50),
        paddingRight: scaleSize(50),
        borderRadius: scaleSize(50),
        marginRight: scaleSize(20),
        marginBottom: scaleSize(20),
        backgroundColor: '#295cf0',
        color: '#ffffff',
    },
    hobbyText: {
        lineHeight: scaleSize(100),
        color: '#564F5F',
        fontSize: scaleFont(42),
    },
    handleAddBox: {
        marginTop: scaleSize(90),
        marginBottom: scaleSize(200),
    },
    handleAdd: {
        fontSize: scaleFont(42),
        color: '#999999',
        textAlign: 'center',
    },
    startBoxWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scaleSize(80),
    },
    startBox: {
        width: scaleSize(560),
        height: scaleSize(160),
        borderRadius: scaleSize(80),
        borderWidth: scaleSize(1),
        borderColor: '#333333',
        backgroundColor: '#ffffff',
    },
    startTbearsBtn: {
        lineHeight: scaleSize(160),
        fontSize: scaleFont(52),
        color: '#333333',
        textAlign: 'center',
    },
});
