import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from '@styles/register';
const imgUrl = {
    arrowIcon: require('../../assets/mine/arrow_bottom.png'),
    avater: require('../../assets/mine/uploadAvater.png'),
};
import ImagePicker from 'react-native-image-picker';
import {
    Provider,
    List,
    Button,
    TextareaItem,
    DatePicker,
} from '@ant-design/react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import fetch from '@network/index.js';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerForm: {
                headPicUrl: '',
                name: '钱罗罗',
                lat: '116.399712',
                lng: '40.053582',
                locationStr: '北京市海淀区育新花园',
                birthday: undefined,
                sex: '女',
                introduction: '无',
                uid: 0,
                loginToken: '',
            },
        };
    }
    confirmBirthday(value) {
        this.setState({
            birthday: value,
        });
    }
    changePosition(val) {
        console.log(val);
    }
    next() {
        console.log(this.state.registerForm);
        this.props.navigation.navigate('MainTabScreen');
    }
    changeDate(val) {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                birthday: val,
            },
        });
    }
    onSelectSex(index, value) {
        console.log(index, value);
    }
    componentDidMount() {}
    choosePicture() {
        this.setState({});
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '图片库',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 600,
            maxHeight: 600,
            aspectX: 2,
            aspectY: 1,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ');
            } else {
                const source = {uri: 'data:image/jpeg;base64,' + response.data};
                this.uploadImage(source.uri);
                this.setState({
                    registerForm: {
                        ...this.state.registerForm,
                        headPicUrl: source,
                    },
                });
            }
        });
    }
    uploadImage(fileData) {
        let formData = new FormData();
        formData.append({
            imgFile: fileData,
        });
        fetch(
            'http://121.89.223.103:8080/common/uploadImage',
            'post',
            formData,
        ).then(res => {
            console.log(res);
        });
    }
    render() {
        return (
            <Provider>
                <View style={styles.bgWrapper}>
                    <List style={styles.registerForm}>
                        <TouchableOpacity
                            style={styles.flexImg}
                            onPress={() => this.choosePicture()}>
                            <Image
                                source={
                                    this.state.registerForm.headPicUrl ||
                                    imgUrl.avater
                                }
                                style={styles.avaterIcon}
                            />
                            <Text style={styles.label}>上传头像</Text>
                        </TouchableOpacity>
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
                            {this.state.registerForm.locationStr ? (
                                <Text style={styles.formItem}>
                                    {this.state.registerForm.locationStr}
                                </Text>
                            ) : (
                                <Image
                                    source={imgUrl.arrowIcon}
                                    style={styles.arrowIcon}
                                />
                            )}
                        </View>
                        <View style={styles.dateBox}>
                            <DatePicker
                                value={this.state.registerForm.birthday}
                                mode="date"
                                minDate={new Date(2015, 7, 6)}
                                maxDate={new Date(2026, 11, 3)}
                                onChange={val => this.changeDate(val)}
                                format="YYYY-MM-DD">
                                <List.Item arrow="horizontal">
                                    <Text style={styles.dateLabel}>
                                        出生日期
                                    </Text>
                                </List.Item>
                            </DatePicker>
                        </View>
                        <View style={styles.flexBox}>
                            <Text style={styles.label}>性别</Text>
                            <RadioGroup
                                style={styles.sexBox}
                                onSelect={(index, value) =>
                                    this.onSelectSex(index, value)
                                }>
                                <RadioButton value={1}>
                                    <Text>男</Text>
                                </RadioButton>

                                <RadioButton value={2}>
                                    <Text>女</Text>
                                </RadioButton>
                            </RadioGroup>
                        </View>
                        <View style={styles.flexBox}>
                            <TextareaItem
                                placeholder="描述一下自己吧..."
                                style={styles.introduction}
                                rows={4}
                                value={this.state.registerForm.introduction}
                                onChange={val =>
                                    this.setState({
                                        registerForm: {
                                            ...this.state.registerForm,
                                            introduction: val,
                                        },
                                    })
                                }
                            />
                        </View>
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
