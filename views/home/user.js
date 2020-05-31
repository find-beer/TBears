/**
 *  用户基本信息
 */

import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default () => (
    <View style={styles.isRow}>
        <ImageBackground source={images.headshot} style={styles.headshot} />
        <View>
            <Text style={styles.name}>叄个键盘</Text>
            <View style={styles.isRow}>
                <Text style={styles.city}>北京 丨</Text>
                <Text style={styles.time}>今天9:00</Text>
            </View>
        </View>
    </View>
);

const images = {
    headshot: require('../../assets/punchList/headshot.png'),
};

const styles = StyleSheet.create({
    isRow: {
        flexDirection: 'row',
    },
    container: {},
    headshot: {
        height: scaleSize(132),
        width: scaleSize(132),
        marginRight: scaleSize(39),
    },
    name: {
        fontSize: scaleFont(48),
        color: '#564F5F',
        marginBottom: scaleSize(15),
    },
    city: {
        fontSize: scaleFont(36),
        color: '#999999',
    },
    time: {
        fontSize: scaleFont(36),
        color: '#999999',
    }
});
