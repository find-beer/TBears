/**
 *  我的
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from '@styles/personalInfo';
const imageUrl = {
    configIcon: require('../../assets/mine/download-icon.png'),
    avatarBg: require('../../assets/mine/avatar-bg.png'),
    avatar: require('../../assets/mine/avatar.jpeg'),
    sexIcon: require('../../assets/mine/QR-icon.png'),
    netIcon: require('../../assets/mine/QR-icon.png'),
    hobbyIcon: require('../../assets/mine/bulb.png'),
    locationIcon: require('../../assets/mine/local.png'),
    QRCodeIcon: require('../../assets/mine/QR-icon.png'),
    EditIcon: require('../../assets/mine/edit.png'),
    done: require('../../assets/mine/undone-icon.png'),
    wareHouse: require('../../assets/mine/warehouse-icon.png'),
    unDone: require('../../assets/mine/undone-icon.png'),
};

export default class PersonalInfo extends Component {
    state = {
        userName: '王二麻子',
    };
    render() {
        return (
            <View style={styles.InfoOuter}>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={imageUrl.avatar}
                        style={styles.avatarInner}
                    />
                </View>
                <View style={styles.userBox}>
                    <Text style={styles.userName}>王二麻子</Text>
                    <Image source={imageUrl.sexIcon} style={styles.userSex} />
                </View>
                <View style={styles.releationNet}>
                    <Text style={styles.netPerson}>关系网人数：</Text>
                    <Image source={imageUrl.netIcon} style={styles.netIcon} />
                    <Text style={styles.netPersonNum}>8979</Text>
                </View>
                <View style={styles.hobbyWrapper}>
                    <View style={styles.hobbyInner}>
                        <Image
                            source={imageUrl.hobbyIcon}
                            style={styles.hobbyIcon}
                        />
                        <Text style={styles.hobbyItem}>篮球</Text>
                        <Text style={styles.hobbyItem}>火锅</Text>
                        <Text style={styles.hobbyItem}>爬山</Text>
                        <Text style={styles.hobbyItem}>Party</Text>
                        <Text style={styles.hobbyItem}>足疗</Text>
                        <Text style={styles.hobbyItem}>游泳</Text>
                    </View>
                </View>
                <View style={styles.userProfile}>
                    <Image
                        source={imageUrl.locationIcon}
                        style={styles.locationIcon}
                    />
                    <Text style={styles.location}>【北京】</Text>
                    <Text style={styles.profileText}>
                        &emsp;&emsp;&emsp;&emsp;钱罗罗能写完，能学会ReactNative,能升职加薪，能买房买车，以后再也不用写写代码了
                    </Text>
                </View>
            </View>
        );
    }
}
