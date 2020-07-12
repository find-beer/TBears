import React, {Component} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import styles from '@styles/register';
const imgUrl = {
    arrowIcon: require('../../assets/mine/arrow_bottom.png'),
    avater: require('../../assets/mine/uploadAvater.png'),
};

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avaterImg: '',
            name: '',
            address: '',
            birthday: '',
            sex: '',
            description: '',
        };
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.bgWrapper}>
                    <View style={styles.registerForm}>
                        <View style={styles.flexImg}>
                            <Image
                                source={imgUrl.avater}
                                style={styles.avaterIcon}
                            />
                            <Text style={styles.label}>上传头像</Text>
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>昵称</Text>
                            <TextInput
                                value={this.state.name}
                                onChange={this.changePhone}
                                style={styles.formItem}
                            />
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>常驻地</Text>
                            <TextInput
                                value={this.state.userCode}
                                onChange={this.changeCode}
                                style={styles.formItem}
                            />
                            <Image
                                source={imgUrl.arrowIcon}
                                style={styles.arrowIcon}
                            />
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>出生年月</Text>
                            <TextInput
                                value={this.state.userCode}
                                onChange={this.changeCode}
                                style={styles.formItem}
                            />
                            <Image
                                source={imgUrl.arrowIcon}
                                style={styles.arrowIcon}
                            />
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>性别</Text>
                            <TextInput
                                value={this.state.userCode}
                                onChange={this.changeCode}
                                style={styles.formItem}
                            />
                            <Text style={styles.getSmsCodeBtn}>
                                {this.state.btnText}
                            </Text>
                        </View>
                        <TextInput
                            editable
                            maxLength={40}
                            placeholder="描述一下自己吧..."
                            style={styles.description}
                            multiline
                            numberOfLines={4}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
