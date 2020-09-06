import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '@styles/login';
import fetch from '@network/index.js';
import {Button, Toast, Provider} from '@ant-design/react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPhone: '',
            userCode: '',
            btnText: '获取验证码',
            count: 60,
            result: '',
        };
    }
    changePhone(phone) {
        this.setState({
            userPhone: phone,
        });
    }
    changeCode(code) {
        this.setState({
            userCode: code,
        });
    }
    getSmsCode() {
        if (this.state.count !== 60) {
            return;
        }
        let validePhone = /^1\d{10}$/.test(this.state.userPhone);
        if (validePhone) {
            this.getSmsCodeRequest();
        }
    }
    getSmsCodeRequest() {
        fetch(
            `http://121.89.223.103:8080/user/getVerifyCode/${
                this.state.userPhone
            }`,
            'get',
        ).then(res => {
            if (res.code === 0) {
                this.startCountDown();
            } else {
                Toast.fail(res.msg || '发送失败，请稍后重试');
            }
        });
    }
    startCountDown() {
        const {count} = this.state;
        if (count === 1) {
            this.setState({
                count: 60,
                liked: true,
                btnText: '重新发送',
            });
        } else {
            this.setState({
                count: count - 1,
                liked: false,
                btnText: `${this.state.count}s`,
            });
            setTimeout(this.startCountDown.bind(this), 1000);
        }
    }
    login() {
        fetch('http://121.89.223.103:8080/user/login', 'get', {
            phoneNumber: this.state.userPhone,
            verifyCode: this.state.userCode,
        }).then(res => {
            if (res.code === 0) {
                // 去首页
            } else {
                Toast.fail(res.msg || '登录失败，请重试');
            }
        });
    }
    render() {
        return (
            <Provider>
                <View style={styles.bgWrapper}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>登录后更精彩</Text>
                        <Text style={styles.headerText}>
                            {this.state.result}
                        </Text>
                    </View>
                    <View style={styles.loginForm}>
                        <View style={styles.flexBox}>
                            <TextInput
                                value={this.state.userPhone}
                                onChangeText={val => this.changePhone(val)}
                                style={styles.formItem}
                                placeholder="输入手机号"
                            />
                        </View>
                        <View style={styles.flexBox}>
                            <TextInput
                                value={this.state.userCode}
                                onChangeText={val => this.changeCode(val)}
                                style={styles.formItem}
                                placeholder="输入验证码"
                            />
                            <Text
                                style={styles.getSmsCodeBtn}
                                onPress={() => this.getSmsCode()}>
                                {this.state.btnText}
                            </Text>
                        </View>
                        <Button
                            style={styles.loginBtnBox}
                            onPress={() => this.login()}>
                            <Text style={styles.loginBtnText}>登录</Text>
                        </Button>
                    </View>
                </View>
            </Provider>
        );
    }
}
