import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default class Action extends React.Component {
    state = {
        likeNum: 0,
        joinNum: 0,
    };

    giveLike() {}

    join() {}

    share() {}

    render() {
        const list = [
            {
                icon: images.likeImage,
                text: `点赞${this.state.likeNum}`,
                hander: this.giveLike,
            },
            {
                icon: images.joinImage,
                text: `已加入${this.state.joinNum}`,
                hander: this.join,
            },
            {
                icon: images.shareImage,
                text: `分享`,
                hander: this.share,
            },
        ];

        return (
            <View style={styles.container}>
                {list.map((item, index) => {
                    return (
                        <View key={index} style={styles.action}>
                            <ImageBackground
                                source={item.icon}
                                style={styles.icon}
                            />
                            <Text>{item.text}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const images = {
    likeImage: require('../../assets/home/like.png'),
    joinImage: require('../../assets/home/join.png'),
    shareImage: require('../../assets/home/share.png'),
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scaleSize(40),
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: scaleSize(50),
        height: scaleSize(50),
        marginRight: scaleSize(19),
    },
});
