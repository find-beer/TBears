/**
 *  首页
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Header from '@views/common/header';
import User from './user';
import Card from './card';
import Photo from './photo';
import Action from './action';

export default class Home extends React.Component {
    static cardConfig = [
        {
            title: '活动标题',
            content: '起来团建',
        },
        {
            title: '活动标题',
            content: '起来团建',
        },
        {
            title: '活动标题',
            content: '起来团建',
        },
        {
            title: '活动标题',
            content: '起来团建',
        },
    ];

    render() {
        return (
            <View style={styles.container}>
                <Header title="首页" left={null} />
                <View>
                    <User />
                    <Card data={Home.cardConfig} />
                    <Photo data={[images.photo, images.photo, images.photo]} />
                    <View style={styles.goToDetail}>
                        <Text style={styles.text}>查看活动详情</Text>
                    </View>
                    <Action />
                </View>
            </View>
        );
    }
}

const images = {
    photo: require('../../assets/relationChain/bg-intro.png'),
};

const styles = StyleSheet.create({
    container: {
        padding: scaleSize(54),
    },
    goToDetail: {
        backgroundColor: '#564F5F',
        borderRadius: scaleSize(46),
        width: scaleSize(972),
        height: scaleSize(92),
        // marginBottom: scaleSize(56),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: scaleSize(36),
        color: '#FFFFFF',
    },
});
