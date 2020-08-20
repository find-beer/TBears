import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {scaleSize} from '@utils/scaleUtil';
import Header from '@views/common/header';
import Card from './card';
import {ifIphoneX} from '@utils/screenUtil';
import _ from 'lodash';
import fetch from '@network';

export default class ActivityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {
                activityTime: '',
                activityAddress: '',
                memberCount: '',
                payGroupId: '', // 参加活动后群聊
                groupId: '', // 参加活动前群聊
            },
        };
    }

    getDetail() {
        fetch('http://121.89.223.103:8080/activity/activity/detail', 'get', {id: 1}).then(res => {
            this.setState({
                detail: _.merge({}, this.state.detail, res),
            });
        });
    }

    componentDidMount() {
        this.getDetail();
    }

    render() {
        const {detail} = this.state;
        const cardConfig = [
            {
                title: '活动时间',
                content: detail.activityTime,
            },
            {
                title: '活动地点',
                content: detail.activityAddress,
            },
            {
                title: '活动费用',
                content: '',
            },
            {
                title: '拼团费用',
                content: '',
            },
            {
                title: '活动人数',
                content: detail.memberCount,
            },
            {
                title: '拼团人数',
                content: '',
            },
        ];

        return (
            <View style={styles.container}>
                <Header title="活动详情" left={null} />
                <View style={styles.content}>
                    <Card data={cardConfig} />
                    <ImageBackground
                        source={images.photo}
                        style={styles.photo}
                    />
                    <Text style={styles.words}>
                        你好你好你好你好你好你好你好你好你好你好你好你
                    </Text>
                    <ImageBackground
                        source={images.photo}
                        style={styles.photo}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={{...styles.left, ...styles.button}}>
                        <Text style={styles.leftText}>进入群聊</Text>
                    </View>
                    <View style={{...styles.right, ...styles.button}}>
                        <Text style={styles.rightText}>报名成功</Text>
                    </View>
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
        position: 'relative',
        height: '100%',
    },
    content: {
        padding: scaleSize(54),
    },
    photo: {
        width: scaleSize(972),
        height: scaleSize(423),
    },
    words: {
        padding: scaleSize(20),
        fontSize: scaleSize(42),
        color: '#666666',
    },
    footer: {
        width: '100%',
        height: scaleSize(141),
        bottom: ifIphoneX(20, 0),
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {},
    leftText: {
        color: '#564F5F',
    },
    right: {
        backgroundColor: '#564F5F',
    },
    rightText: {
        color: '#FFFFFF',
    },
});
