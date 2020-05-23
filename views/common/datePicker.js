
import React from 'react'
import { Text, TouchableOpacity, Modal, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet } from 'react-native'
import { scaleSize, scaleFont } from '@utils/scaleUtil'

export default props => {

    let [date, setDate] = React.useState(new Date());
    function onChange(event, value) {
        // console.log(value);
        setDate(value);
    }

    function onConfirm(date) {
        props.onConfirm(date);
    }
    return (
        <Modal transparent={true} animationType="slide" visible={props.visible}>
            <TouchableOpacity onPress={props.onCancel} style={styles.mask} />
    
            <View style={styles.datePicker}>
                <View style={styles.pickerHead}>
                    <TouchableOpacity onPress={props.onCancel} activeOpacity={0.8}>
                        <Text style={styles.cancelBtn}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onConfirm.bind(this, date)} activeOpacity={0.8}>
                        <Text style={styles.confirmBtn}>确定</Text>
                    </TouchableOpacity>
                </View>
    
                <DateTimePicker
                    style={styles.pickerContent}
                    value={date}
                    onChange={onChange}
                    timeZoneOffsetInMinutes={480}
                    is24Hour={true}
                    display={props.display}
                    mode={props.mode}
                    locale="zh"
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    datePicker: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    mask: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    pickerHead: {
        height: scaleSize(200),
        borderColor: '#F2F2F2',
        borderBottomWidth: scaleSize(3),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scaleSize(60)
    },
    pickerContent: {
        flex: 1,
        position: 'relative',
        top: scaleSize(-60)
    },
    cancelBtn: {
        fontSize: scaleFont(48)
    },

    confirmBtn: {
        fontSize: scaleFont(48),
        color: '#29ad48'
    }
})