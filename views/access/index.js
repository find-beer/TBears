import React, {Component} from 'react';
import {View, Switch, Text} from 'react-native';
import styles from '@styles/complaint';

export default class Access extends Component {
    state = {
        text: '',
    };
    render() {
        return (
            <View style={styles.complaintWrap}>
                <View style={styles.complaintInput} />
                <Text style={styles.complaintSubmitBtn}>提交</Text>
            </View>
        );
    }
}
