/**
 *  卡片信息
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default props => {
    return (
        <View style={styles.container}>
            {props.data.map((item, index) => {
                return (
                    <View key={index} style={styles.itemContainer}>
                        <View style={styles.itemContent}>
                            <View style={styles.tag} />
                            <View style={styles.info}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.content}>
                                    {item.content}
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const shadowOpt = {
    width: 972,
    height: 560,
    color: '#000',
    border: 1,
    radius: 24,
    opacity: 24,
    x: 3,
    y: 24,
};

const styles = StyleSheet.create({
    container: {
        width: scaleSize(972),
        height: scaleSize(560),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemContainer: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContent: {
        flexDirection: 'row',
    },
    tag: {
        width: scaleSize(12),
        height: scaleSize(32),
        marginRight: scaleSize(24),
        backgroundColor: '#8E79FE',
        borderRadius: scaleSize(7),
    },
    title: {
        fontSize: scaleFont(40),
        color: '#999999',
        alignItems: 'center',
        marginBottom: scaleSize(24),
    },
    content: {
        fontSize: scaleFont(48),
        color: '#333333',
    },
});
