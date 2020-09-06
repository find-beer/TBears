/**
 *  首页
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Header from '@views/common/header';
import User from './user';
import Card from './card';
import Photo from './photo';
import Action from './action';
import fetch from '@network';
import _ from 'lodash';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            relationDetailList: [],
        };
    }

    componentDidMount() {
        this.getDetail();
    }

    getDetail() {
        fetch('http://121.89.223.103:8080/user/user/relationfeed', 'get', {
            limit: 10,
            feedOffsetId: 0,
            activityOffsetId: 0,
        }).then(res => {
            this.setState({
                relationDetailList: res.relationDetailList,
            });
        });
    }

    renderItem(data) {
        if (!data || !data.activityDetailVO) {
            return null;
        }
        const cardConfig = [
            {
                title: '活动主题',
                content: data.activityDetailVO.activityTitle,
            },
            {
                title: '活动时间',
                content: data.activityDetailVO.activityTime,
            },
            {
                title: '活动地点',
                content: data.activityDetailVO.activityAddress,
            },
            {
                title: '活动人数',
                content: data.activityDetailVO.memberCount,
            },
        ];
        return (
            <View style={styles.itemContainer}>
                <User />
                <Card data={cardConfig} />
                <Photo data={[images.photo, images.photo, images.photo]} />
                <View style={styles.goToDetail}>
                    <Text style={styles.text}>查看活动详情</Text>
                </View>
                <Action />
            </View>
        );
    }

    render() {
        const {relationDetailList} = this.state;
        return (
            <View style={styles.container}>
                <Header title="首页" left={null} />
                {relationDetailList &&
                    relationDetailList.map(item => {
                        return this.renderItem(item);
                    })}
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
    itemContainer: {
        marginBottom: scaleSize(100),
    },
    goToDetail: {
        backgroundColor: '#564F5F',
        borderRadius: scaleSize(46),
        width: scaleSize(972),
        height: scaleSize(92),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: scaleSize(36),
        color: '#FFFFFF',
    },
});
