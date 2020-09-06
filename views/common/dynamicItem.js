import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '@styles/dynamicItem';
const imageUrl = {
    dianzan: '',
    pinglun: '',
    share: '',
};

export default class DynamicItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: {
                avatar: require('../../assets/mine/avatar.jpeg'),
                name: '钱罗罗',
                position: '北京',
                time: '今天9:00',
                text: '今天周末呀',
            },
        };
    }
    render() {
        return (
            <View style={styles.dynamicItemWrap}>
                <View style={styles.itemHeader}>
                    <Image
                        source={this.state.itemInfo.avatar}
                        style={styles.avatarInner}
                    />
                    <View style={styles.dynamicInfo}>
                        <Text style={styles.name}>
                            {this.state.itemInfo.name}
                        </Text>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoPosition}>
                                {this.state.itemInfo.position}
                            </Text>
                            <View style={styles.line} />
                            <Text style={styles.infoTime}>
                                {this.state.itemInfo.time}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dynamicTextBox}>
                    <Text style={styles.dynamicText}>
                        {this.state.itemInfo.text}
                    </Text>
                    <Image
                        source={this.state.itemInfo.avatar}
                        style={styles.dynamicImg}
                    />
                </View>
                <View style={styles.operationBox}>
                    <View style={styles.oerationItem}>
                        <Image
                            source={imageUrl.relationBtn}
                            style={styles.operationIcon}
                        />
                        <Text style={styles.operationText}>点赞123</Text>
                    </View>
                    <View style={styles.oerationItem}>
                        <Image
                            source={imageUrl.relationBtn}
                            style={styles.operationIcon}
                        />
                        <Text style={styles.operationText}>评论123</Text>
                    </View>
                    <View style={styles.oerationItem}>
                        <Image
                            source={imageUrl.relationBtn}
                            style={styles.operationIcon}
                        />
                        <Text style={styles.operationText}>分享</Text>
                    </View>
                </View>
            </View>
        );
    }
}
