/**
 *  陌生人主页
 */

import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import DynamicTab from '@views/common/dynamicTab';
import DynamicItem from '@views/common/dynamicItem';
import PersonalInfo from '@views/common/personalInfo';
import styles from '@styles/strangerMain';
const imageUrl = {
    configIcon: require('../../assets/mine/download-icon.png'),
    avatar: require('../../assets/mine/avatar.jpeg'),
};

export default () => (
    <View>
        <ImageBackground style={styles.persionalTab} source={imageUrl.avatar}>
            <View style={styles.bgaWrapper}>
                <PersonalInfo />
                <View style={styles.settingBox}>
                    <Image
                        source={imageUrl.configIcon}
                        style={styles.configIcon}
                    />
                </View>
            </View>
        </ImageBackground>
        <View style={styles.operationBox}>
            <View style={styles.chatBox}>
                <Image source={imageUrl.configIcon} style={styles.chatIcon} />
                <Text style={styles.chatText}>聊天</Text>
            </View>
        </View>
        <View style={styles.lineSpace} />
        <DynamicTab />
        <View>
            <DynamicItem />
            <DynamicItem />
            <DynamicItem />
        </View>
    </View>
);
