/**
 *  动态详情
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scaleSize} from '@utils/scaleUtil';
import Header from '@views/common/header';
import User from './user';
import Photo from './photo';
import Action from './action';
import Comment from './comment';
import fetch from '@network';
import _ from 'lodash';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {
                cityName: '',
                clockIn: 0,
                clockInTag: '',
                commentNum: 0,
                content: '',
                id: 0,
                likeNum: 0,
                location: '',
                picUrl: '',
                publishTime: 0,
                userVO: {
                    order: 0,
                    pic: '',
                    userId: 0,
                    userName: '',
                },
                videoUrl: '',
            },
        };
    }

    getDetail() {
        fetch('http://121.89.223.103:8080/feed/detail', 'get', {id: 1}).then(
            res => {
                this.setState({
                    detail: _.merge({}, this.state.detail, res),
                });
            },
        );
    }

    componentDidMount() {
        this.getDetail();
    }

    render() {
        const {detail} = this.state;

        return (
            <View style={styles.container}>
                <Header title="动态详情" left={null} />
                <View>
                    <User data={detail} />
                    <Text style={styles.words}>{detail.content}</Text>
                    <Photo data={[images.photo, images.photo, images.photo]} />
                    <Action data={detail} />
                    <Comment />
                    <Comment />
                    <Comment />
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
    words: {
        fontSize: scaleSize(48),
        color: '#564F5F',
        marginBottom: scaleSize(36),
    },
});
