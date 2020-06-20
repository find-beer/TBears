import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default class Apply extends React.Component {
    formItems = [
        {
            label: '【活动时间】',
            key: '2019-08-23  9:00',
        },
        {
            label: '【活动地址】',
            key: '北京市朝阳区XXXXXXXXXX',
        },
        {
            label: '【参加人数】',
            key: '2019-08-23  9:00',
        },
        {
            label: '【参加费用】',
            key: '2019-08-23  9:00',
        },
    ];

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>一起来团建嗨起来！</Text>
                <View style={styles.content}>
                    {this.formItems.map(item => {
                        return (
                            <View style={styles.formItem}>
                                <Text style={styles.label}>{item.label}</Text>
                                <Text style={styles.value}>{item.key}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: scaleSize(54),
    },
    header: {
        fontSize: scaleSize(58),
        color: '#564F5F',
        textAlign: 'center',
        paddingBottom: scaleSize(22),
        paddingLeft: scaleSize(54),
        paddingRight: scaleSize(54),
    },
    formItem: {
        fontSize: scaleSize(48),
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: scaleSize(32),
        paddingBottom: scaleSize(32),
        paddingLeft: scaleSize(54),
        paddingRight: scaleSize(54),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#F2F2F2',
    },
    label: {
        color: '#564F5F',
        marginRight: scaleFont(36),
    },
    value: {
        color: '#564F5F',
    },
});
