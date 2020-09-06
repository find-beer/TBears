import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default StyleSheet.create({
    storeListWrap: {
        borderStyle: 'solid',
        borderColor: '#ccc',
    },
    activityItem: {
        paddingTop: scaleSize(72),
        paddingBottom: scaleSize(72),
        marginBottom: scaleSize(24),
        paddingLeft: scaleSize(54),
        paddingRight: scaleSize(54),
        backgroundColor: '#fff',
    },
    activityTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: scaleSize(24),
    },
    titleText: {
        color: '#333',
        fontSize: scaleFont(48),
    },
    complainBtn: {
        width: scaleSize(167),
        height: scaleSize(62),
        borderStyle: 'solid',
        borderWidth: scaleSize(3),
        borderColor: '#564f5f',
        borderRadius: scaleSize(46),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    complainIcon: {
        width: scaleSize(34),
        height: scaleSize(34),
        marginRight: scaleSize(12),
    },
    complainText: {
        fontSize: scaleFont(33),
        color: '#333',
    },
    activityItemInner: {
        marginBottom: scaleSize(24),
        fontSize: scaleFont(42),
        color: '#666',
    },
    activityPhoto: {
        paddingTop: scaleSize(42),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    activityImage: {
        width: scaleSize(290),
        height: scaleSize(380),
        backgroundColor: 'red',
        borderRadius: scaleSize(10),
    },
    btnBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    operateBtn: {
        width: scaleSize(470),
        height: scaleSize(90),
        borderRadius: scaleSize(45),
        backgroundColor: '#564F5F',
        marginTop: scaleSize(54),
    },
    operateBtnText: {
        lineHeight: scaleSize(90),
        textAlign: 'center',
        fontSize: scaleFont(36),
        color: '#fff',
        fontWeight: 'bold',
    },
});
