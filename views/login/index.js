import React, {Component} from 'react';
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native';
import styles from '@styles/login';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPhone: '',
            userCode: '',
            btnText: '获取验证码',
            timer: null,
            count: 60,
            result: '',
        };
        this.changePhone = this.changePhone.bind(this);
        this.changeCode = this.changeCode.bind(this);
        this.getSmsCode = this.getSmsCode.bind(this);
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
        if (this.state.timer) {
            return;
        }
        let validePhone = /^1\d{10}$/.test(this.state.phone);
        if (validePhone) {
            this.getSmsCodeRequest();
            this.startCountDown();
            this.setState({
                result: '2222',
            });
        }
    }
    getSmsCodeRequest() {
        console.log('requset sms code');
    }
    startCountDown() {
        this.timer = setInterval(() => {
            this.setState(
                {
                    count: this.state.count--,
                },
                () => {
                    if (this.state.count < 0) {
                        clearInterval(this.state.timer);
                        this.setState({
                            timer: null,
                            count: 60,
                            btnText: '重新获取',
                        });
                    } else {
                        this.setState({
                            btnText: `${this.state.count}s后重新获取`,
                        });
                    }
                },
            );
        }, 1000);
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.bgWrapper}>
                    <View style={styles.header}>
                        {/* <Text style={styles.headerText}>登录后更精彩</Text> */}
                        <Text style={styles.headerText}>
                            {this.state.result}
                        </Text>
                    </View>
                    <View style={styles.loginForm}>
                        <View style={styles.flexBox}>
                            <TextInput
                                value={this.state.userPhone}
                                onChangeText={this.changePhone}
                                style={styles.formItem}
                                placeholder="输入手机号"
                            />
                        </View>
                        <View style={styles.flexBox}>
                            <TextInput
                                value={this.state.userCode}
                                onChangeText={this.changeCode}
                                style={styles.formItem}
                                placeholder="输入验证码"
                            />
                            <Text
                                style={styles.getSmsCodeBtn}
                                onPress={this.getSmsCode}>
                                {this.state.btnText}
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
