/**
 * 挖好友
 */

import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import {scaleSize} from '@utils/scaleUtil';
import Header from '@views/common/header';
import styles from '@styles/notice/addFriends';

export default props => {
    const renderFriendsNav = () => (
        <View style={styles.addFriendsNav}>
            <View style={styles.addFriendsSearchWrapper}>
                <Image
                    source={{
                        uri: 'http://q4pas9fmo.bkt.clouddn.com/search.png',
                    }}
                    style={styles.addFriendsSearchIcon}
                />
                <TextInput
                    style={styles.addFriendsSearchInput}
                    placeholder="输入手机号/探熊号"
                    placeholderTextColor="#999999"
                />
            </View>
            <View style={styles.addFriendsNavFeatures}>
                <View
                    style={[
                        styles.addFriendsNavFeature,
                        {borderBottomWidth: 1, borderBottomColor: '#f2f2f2'},
                    ]}>
                    <Text style={styles.addFriendsNavFeatureText}>扫一扫</Text>
                    <View />
                </View>
                <View style={styles.addFriendsNavFeature}>
                    <Text style={styles.addFriendsNavFeatureText}>
                        手机联系人
                    </Text>
                    <View />
                </View>
            </View>
        </View>
    );

    const sections = [
        {
            key: '1',
            data: [{}],
            renderItem: renderFriendsNav,
        },
        {
            key: '2',
            timeline: '近三天',
            data: [
                {
                    avatarUri:
                        'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
                    nickname: '李二麻子',
                    verifyMessage: '李二麻子你好',
                    verifyStatus: 1,
                },
                {
                    avatarUri:
                        'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
                    nickname: '李二麻子',
                    verifyMessage: '李二麻子你好',
                    verifyStatus: 1,
                },
            ],
        },
        {
            key: '3',
            timeline: '三天前',
            data: [
                {
                    avatarUri:
                        'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
                    nickname: '李二麻子',
                    verifyMessage: '李二麻子你好',
                    verifyStatus: 1,
                },
                {
                    avatarUri:
                        'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
                    nickname: '李二麻子',
                    verifyMessage: '李二麻子你好',
                    verifyStatus: 1,
                },
                {
                    avatarUri:
                        'http://q4pas9fmo.bkt.clouddn.com/group-avatar.png',
                    nickname: '李二麻子',
                    verifyMessage: '李二麻子你好',
                    verifyStatus: 0,
                },
            ],
        },
    ];

    const renderItem = ({item, index, section}) => (
        <View
            style={[
                styles.addFriendsListItemRowFrontWrapper,
                index == 0 && {marginTop: scaleSize(24)},
            ]}>
            {index == 0 && (
                <View style={styles.addFriendsListItemTimeline}>
                    <Text style={styles.addFriendsListItemTimelineText}>
                        {section.timeline}
                    </Text>
                </View>
            )}
            <View style={styles.addFriendsListItemRowFront}>
                <View style={styles.addFriendsListItemFrontLeft}>
                    <Image
                        source={{uri: item.avatarUri}}
                        style={styles.addFriendsListItemAvatar}
                    />
                    <View style={styles.addFriendsListItemHint}>
                        <Text style={styles.addFriendsListItemName}>
                            {item.nickname}
                        </Text>
                        <Text style={styles.addFriendsListItemOverview}>
                            {item.verifyMessage}
                        </Text>
                    </View>
                </View>
                <View style={styles.addFriendsListItemFrontRight}>
                    {item.verifyStatus == 1 ? (
                        <Text style={styles.verifyStatusText}>已添加</Text>
                    ) : (
                        <TouchableOpacity activeOpacity={0.6}>
                            <View style={styles.verifyStatusBtn}>
                                <Text style={styles.verifyStatusBtnText}>
                                    查看
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.root}>
            <Header {...props} title="挖好友" />
            <View style={styles.addFriendsWrapper}>
                <SectionList
                    sections={sections}
                    alwaysBounceVertical={false}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};
