/**
 *  报名支付页
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '@views/common/header';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import { ifIphoneX } from '@utils/screenUtil'

export default class Apply extends React.Component {
    formItems = [
        {
            label: '活动时间',
            key: '2019-08-23  9:00',
        },
        {
            label: '活动地址',
            key: '北京市朝阳区XXXXXXXXXX',
        },
        {
            label: '参加人数',
            key: '2019-08-23  9:00',
        },
        {
            label: '参加费用',
            key: '2019-08-23  9:00',
        },
    ];

    render() {
        return (
            <View style={styles.container}>
                <Header title="报名" />
                <Text style={styles.header}>[活动] 一起来团建！</Text>
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
                <View style={styles.footer}>
                    <Text style={styles.footerText}>确认支付</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    header: {
        fontSize: scaleSize(48),
        color: '#564F5F',
        paddingTop: scaleSize(54),
        paddingBottom: scaleSize(22),
        paddingLeft: scaleSize(54),
        paddingRight: scaleSize(54),
    },
    formItem: {
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
        fontSize: scaleFont(39),
        color: '#564F5F',
        marginRight: scaleFont(36),
    },
    value: {
        fontSize: scaleFont(32),
        color: '#564F5F',
    },
    footer: {
        width: '100%',
        height: scaleSize(141),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#564F5F',
        position: 'absolute',
        bottom: ifIphoneX(20, 0),
    },
    footerText: {
        fontSize: scaleFont(48),
        color: '#FFFFFF',
    },
});
