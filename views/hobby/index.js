import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from '@styles/hobbyList';
import {hobbyList} from './hobbyList';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbyList: hobbyList,
            checkedHobby: [],
            registerForm: {
                headPicUrl:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597719505224&di=8ba41df83bad100434d4ab8e6b8dc121&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180918%2F15%2F1537256695-VHPonEfJju.jpeg',
                name: '钱罗罗',
                lat: '116.399712',
                lng: '40.053582',
                locationStr: '北京市海淀区育新花园',
                birthday: '1995-02-24',
                sex: '女',
                introduction: '无',
                uid: 0,
                loginToken: '',
                hobbyTagNameList: ['滑板', '跑步', '网球'],
            },
        };
    }
    componentDidMount() {
        this.getHobbyList();
    }
    getHobbyList() {
        fetch('http://121.89.223.103:8080/user/listHobbyTagName', 'get').then(
            res => {
                if (res.code === 0) {
                    // 去首页
                    console.log(res);
                }
            },
        );
    }
    activeItem(index) {}
    register() {
        fetch('http://121.89.223.103:8080/user/modifyUser', 'put', {
            ...this.state.registerForm,
        }).then(res => {
            if (res.code === 0) {
                // 去首页
                console.log(res);
            } else {
            }
        });
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.bgWrapper}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>点选你喜欢的</Text>
                    </View>
                    <View style={styles.hobbyBox}>
                        {hobbyList.map((item, index) => {
                            return (
                                <View key={item.value} style={styles.hobbyItem}>
                                    <Text style={styles.hobbyText}>
                                        {item.label}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                    <View style={styles.startBoxWrapper}>
                        <View
                            style={styles.startBox}
                            onPress={() => this.register()}>
                            <Text style={styles.startTbearsBtn}>
                                开启探熊APP
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
