/**
 *  陌生人主页
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import DynamicTab from '@views/common/dynamicTab';
import DynamicItem from '@views/common/dynamicItem';
import PersonalInfo from '@views/common/personalInfo';
import styles from '@styles/friendMain';
const imageUrl = {
    configIcon: require('../../assets/mine/download-icon.png'),
    avatar: require('../../assets/mine/avatar.jpeg'),
    realtion: require('../../assets/mine/relation.png'),
};

export default class Stanger extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <ImageBackground
                        style={styles.persionalTab}
                        source={imageUrl.avatar}>
                        <View style={styles.bgaWrapper}>
                            <PersonalInfo />
                            <View style={styles.settingBox}>
                                <Image
                                    source={imageUrl.configIcon}
                                    style={styles.extendsConfig}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.operationBox}>
                        <View style={styles.itemBox}>
                            <Image
                                source={imageUrl.realtion}
                                style={styles.itemIcon}
                            />
                            <Text style={styles.itemText}>聊天</Text>
                        </View>
                        <View style={styles.itemBox}>
                            <Image
                                source={imageUrl.realtion}
                                style={styles.itemIcon}
                            />
                            <Text style={styles.itemText}>关系链</Text>
                        </View>
                    </View>
                    <View style={styles.lineSpace} />
                    <DynamicTab />
                    <View>
                        <DynamicItem />
                        <DynamicItem />
                        <DynamicItem />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
