import React from 'react';
import {Modal, Picker, View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default props => {
    let [value, setValue] = React.useState('');
    let [index, setIndex] = React.useState(0);

    function onPickerChange(value, index) {
        setValue(value);
        setIndex(index);
    }
    return (
        <Modal transparent={true} animationType="slide" visible={props.visible}>
            <TouchableOpacity onPress={props.onCancel} style={styles.mask} />

            <View style={styles.picker}>
                <View style={styles.pickerHead}>
                    <TouchableOpacity
                        onPress={props.onCancel}
                        activeOpacity={0.8}>
                        <Text style={styles.cancelBtn}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.onConfirm.bind(this, value, index)}
                        activeOpacity={0.8}>
                        <Text style={styles.confirmBtn}>确定</Text>
                    </TouchableOpacity>
                </View>

                <Picker selectedValue={value} onValueChange={onPickerChange}>
                    {props.data.map(item => (
                        <Picker.Item label={item.label} value={item.value} />
                    ))}
                </Picker>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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
        right: 0,
    },
    pickerHead: {
        height: scaleSize(200),
        borderColor: '#F2F2F2',
        borderBottomWidth: scaleSize(3),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scaleSize(60),
    },
    pickerContent: {
        flex: 1,
        position: 'relative',
        top: scaleSize(-60),
    },
    cancelBtn: {
        fontSize: scaleFont(48),
    },

    confirmBtn: {
        fontSize: scaleFont(48),
        color: '#29ad48',
    },
});
