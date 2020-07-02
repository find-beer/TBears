/**
 * 互动通知
 */

import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Header from '@views/common/header';
import styles from '@styles/notice/interactiveNotification';

export default props => {
    const data = [
        {
            key: '1',
            avatarUri: 'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
            activity: '王二麻子点赞了你的动态',
        },
        {
            key: '2',
            avatarUri: 'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
            activity: '王二麻子评论了你：真好真好真好',
        },
        {
            key: '3',
            avatarUri: 'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
            activity: '王二麻子点赞了你的动态',
        },
    ];
    const renderInteractiveListItem = data => (
        <View style={styles.interactiveListItemWrapper}>
            <View style={styles.interactiveListItem}>
                <View>
                    <Image
                        style={styles.interactiveListItemAvatar}
                        source={{uri: data.item.avatarUri}}
                    />
                </View>
                <View style={styles.interactiveListItemActivityWrapper}>
                    <Text style={styles.interactiveListItemActivity}>
                        {data.item.activity}
                    </Text>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.root}>
            <Header {...props} title="互动列表" />
            <View style={styles.interactiveListWrapper}>
                <FlatList
                    style={styles.interactiveList}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderInteractiveListItem}
                />
            </View>
        </View>
    );
};
