import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Toast,
    AsyncStorage,
} from 'react-native';
import styles from '@styles/hobbyList';
import enhanceFetch from '@utils/fetch';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbyList: [],
            checkedHobby: [],
            registerForm: this.props.navigation.state.params,
        };
    }
    componentDidMount() {
        this.getHobbyList();
    }
    getHobbyList() {
        enhanceFetch('user/listHobbyTagName', 'get').then(res => {
            res &&
                this.setState({
                    hobbyList: res,
                });
        });
    }
    activeItem(index) {
        // 取消选中
        if (this.state.checkedHobby.includes(index)) {
            let arr = [...this.state.checkedHobby];
            arr.splice(arr.findIndex(item => item === index), 1);
            this.setState({
                checkedHobby: arr,
            });
            return;
        }
        // 最多3个
        if (this.state.checkedHobby.length >= 5) {
            return;
        }
        // 选中
        this.setState({
            checkedHobby: [...this.state.checkedHobby, index],
        });
    }
    add0(m) {
        return m < 10 ? '0' + m : m;
    }
    format(times) {
        //shijianchuo是整数，否则要parseInt转换
        let time = new Date(times);
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        return `${y}-${this.add0(m)}-${this.add0(d)}`;
    }
    register() {
        if (this.state.checkedHobby.length < 1) {
            Toast.fail('兴趣爱好至少选择一个~');
        }
        let checked = [];
        for (let i = 0; i < this.state.checkedHobby.length; i++) {
            checked.push(this.state.hobbyList[i]);
        }
        let params = {
            ...this.state.registerForm,
            hobbyTagNameList: checked,
            birthday: this.format(
                Date.parse(new Date(this.state.registerForm.birthday)),
            ).toString(),
        };
        enhanceFetch('user/signUp', 'post', params).then(res => {
            this.props.navigation.navigate('MainTabScreen');
            AsyncStorage.setItem(
                'object',
                JSON.stringify({userToken: res.token}),
            );
        });
    }
    getClass(index) {
        return this.state.checkedHobby.includes(index)
            ? styles.hobbyActiveItem
            : styles.hobbyItem;
    }
    getTextClass(index) {
        return this.state.checkedHobby.includes(index)
            ? styles.hobbyActiveText
            : styles.hobbyText;
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.bgWrapper}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>点选你喜欢的</Text>
                    </View>
                    <View style={styles.hobbyBox}>
                        {this.state.hobbyList.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={item}
                                    style={this.getClass(index)}
                                    onPress={() => this.activeItem(index)}>
                                    <Text style={this.getTextClass(index)}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <View style={styles.startBoxWrapper}>
                        <TouchableOpacity
                            style={styles.startBox}
                            onPress={() => this.register()}>
                            <Text style={styles.startTbearsBtn}>
                                开启探熊APP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
