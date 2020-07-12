import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Header from '@views/common/header';
import styles from '@styles/storeList';

const complainIcon = require('../../assets/mine/complain-icon.png');

export default class StoreList extends Component {
    state = {
        activityList: [
            {
                title: '今晚三里屯嗨起来',
                location: '北京三里屯工人体育馆',
                time: '2020-02-02',
                money: 20000,
                image: [],
            },
            {
                title: '今晚三里屯嗨起来',
                location: '北京三里屯工人体育馆',
                time: '2020-02-02',
                money: 20000,
                image: [],
            },
        ],
    };
    render() {
        let list = this.state.activityList;
        return (
            <View style={styles.storeListWrap}>
                <Header title="仓库" left={null} />
                <View style={styles.activityList}>
                    {list.map((item, index) => {
                        return (
                            <View style={styles.activityItem} key={index}>
                                <View style={styles.activityTitle}>
                                    <Text style={styles.titleText}>
                                        {item.title}
                                    </Text>
                                    <View style={styles.complainBtn}>
                                        <Image
                                            source={complainIcon}
                                            style={styles.complainIcon}
                                        />
                                        <Text style={styles.complainText}>
                                            投诉
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.activityItemInner}>
                                    【活动时间】{item.time}
                                </Text>
                                <Text style={styles.activityItemInner}>
                                    【活动地点】{item.location}
                                </Text>
                                <Text style={styles.activityItemInner}>
                                    【活动费用】{item.money}元
                                </Text>
                                <View style={styles.activityPhoto}>
                                    <Image style={styles.activityImage} />
                                    <Image style={styles.activityImage} />
                                    <Image style={styles.activityImage} />
                                </View>
                                <View style={styles.disbindBtn}>
                                    <Text style={styles.disbindBtnText}>
                                        解散活动
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
}
