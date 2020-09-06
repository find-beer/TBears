import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from '@styles/register';
const imgUrl = {
    arrowIcon: require('../../assets/mine/arrow_bottom.png'),
    avater: require('../../assets/mine/uploadAvater.png'),
};
import {
    Radio,
    DatePicker,
    Provider,
    List,
    Button,
} from '@ant-design/react-native';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            },
        };
    }
    onChange(value) {
        this.setState({
            birthday: value,
        });
    }
    changePosition(val) {
        console.log(val);
    }
    next() {}
    render() {
        return (
            <Provider>
                <View style={styles.bgWrapper}>
                    <List style={styles.registerForm}>
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
                                value={this.state.registerForm.name}
                                onChange={val =>
                                    this.setState({
                                        registerForm: {
                                            ...this.state.registerForm,
                                            name: val,
                                        },
                                    })
                                }
                                style={styles.formItem}
                            />
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>常驻地</Text>
                            <Image
                                source={imgUrl.arrowIcon}
                                style={styles.arrowIcon}
                            />
                        </View>
                        <View style={styles.dateBox}>
                            {/* <DatePicker
                                value={this.state.registerForm.birthday}
                                mode="date"
                                minDate={new Date(2015, 7, 6)}
                                maxDate={new Date()}
                                onChange={val => this.onChange(val)}
                                format="YYYY-MM-DD"
                                style={styles.datePicker}>
                                <List.Item
                                    arrow="horizontal"
                                    style={styles.birthdayLabel}>
                                    出生年月
                                </List.Item>
                            </DatePicker> */}
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>性别</Text>
                            {this.state.registerForm.sex ? (
                                <Text style={styles.formItem}>
                                    {this.state.sex}
                                </Text>
                            ) : (
                                <Image
                                    source={imgUrl.arrowIcon}
                                    style={styles.arrowIcon}
                                />
                            )}
                        </View>
                        <TextInput
                            editable
                            maxLength={40}
                            placeholder="描述一下自己吧..."
                            style={styles.description}
                            multiline
                            numberOfLines={4}
                        />
                        <Button
                            style={styles.registerBtnBox}
                            onPress={() => this.next()}>
                            <Text style={styles.registerBtnText}>下一步</Text>
                        </Button>
                    </List>
                </View>
            </Provider>
        );
    }
}
