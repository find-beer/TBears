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
import Comment from './comment'

export default class Page extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title="动态详情" left={null} />
                <View>
                    <User />
                    <Text style={styles.words}>今天天气真好！</Text>
                    <Photo data={[images.photo, images.photo, images.photo]} />
                    <Action />
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
        marginBottom: scaleSize(36)
    },
});
