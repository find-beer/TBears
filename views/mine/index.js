/**
 *  我的
 */

import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import Header from '@views/common/header';
import DynamicTab from '@views/common/dynamicTab';
import DynamicItem from '@views/common/dynamicItem';
import PersonalInfo from '@views/common/personalInfo';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from '@styles/mine';
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

export default () => (
    <View>
        <Header title="我的" left={null} />
        <ImageBackground style={styles.persionalTab} source={imageUrl.avatar}>
            <View style={styles.bgaWrapper}>
                <PersonalInfo />
                <View style={styles.settingBox}>
                    <Image
                        source={imageUrl.configIcon}
                        style={styles.configIcon}
                    />
                    <Text style={styles.configFont}>设置</Text>
                </View>
                <View style={styles.operationBox}>
                    <View style={styles.operationBtn}>
                        <Image
                            source={imageUrl.QRCodeIcon}
                            style={styles.btnIcon}
                        />
                        <Text style={styles.btnText}>二维码</Text>
                    </View>
                    <View style={styles.operationBtn}>
                        <Image
                            source={imageUrl.EditIcon}
                            style={styles.btnIcon}
                        />
                        <Text style={styles.btnText}>仓库</Text>
                    </View>
                    <View style={styles.operationBtn}>
                        <Image
                            source={imageUrl.EditIcon}
                            style={styles.btnIcon}
                        />
                        <Text style={styles.btnText}>编辑资料</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <View style={styles.lineSpace} />
        <DynamicTab />
        <View>
            <DynamicItem />
        </View>
    </View>
);
