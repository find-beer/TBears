import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    Image,
    Dimensions,
    PermissionsAndroid,
    Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
    init,
    Geolocation,
    addLocationListener,
    start,
    stop,
} from 'react-native-amap-geolocation';
import Header from '@views/common/header';
import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';
import enhanceFetch from '@utils/fetch';

async function useGeolocation() {
    // 对于 Android 需要自行根据需要申请权限
    // await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);

    // 使用自己申请的高德 App Key 进行初始化
    console.log('-----init-------');
    await init({
        ios: 'dda2ce0ca251baf59404a59c28b4edd5',
        //   android: "043b24fe18785f33c491705ffe5b6935"
    });
}

// useGeolocation();

// const geolocationInit = async () => {
//     await Geolocation.init({
//         ios: 'dda2ce0ca251baf59404a59c28b4edd5',
//         // android: 'key',
//     });

//     Geolocation.setOptions({
//         interval: 3000,
//         distanceFilter: 20,
//     });

//     Geolocation.addLocationListener(location => {
//         console.log(location);
//     });
// };

const imageUrl = {
    addPic: require('../../assets/publish/add-image.png'),
    location: require('../../assets/publish/location.png'),
    chooseBox: require('../../assets/publish/choose.png'),
    unchooseBox: require('../../assets/publish/unchoose.png'),
};
export default class UserPublish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPunchCard: false, // 是否标记打卡
            images: [],
            isPublishInCity: true,
            submitInfo: {
                address: '',
                clockIn: 0,
                clockinTag: '',
                content: '',
                displayCity: 1,
                location: '',
                picUrl: '',
                videoUrl: '',
            },
        };
    }

    onValueChange = () => {
        const {submitInfo} = this.state;
        submitInfo.clockIn = !this.state.isPunchCard ? 1 : 0;
        this.setState({
            isPunchCard: !this.state.isPunchCard,
            submitInfo,
        });
    };

    choosePicture = () => {
        const {images} = this.state;
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
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ');
            } else {
                const source = {uri: response.uri};
                images.push(source);
                console.log(source);
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    images,
                });
            }
        });
    };

    togglePublishInCity = value => {
        const {submitInfo} = this.state;
        submitInfo.displayCity = value ? 1 : 0;
        this.setState({
            isPublishInCity: value,
            submitInfo,
        });
    };

    submit = () => {
        enhanceFetch('/feed/publish', 'post', this.state.submitInfo).then(
            res => {
                console.log(res);
            },
        );
        // console.log('submit', this.state.submitInfo);
    };

    onChangeText(key, value) {
        const {submitInfo} = this.state;
        submitInfo[key] = value;
        this.setState({
            submitInfo,
        });
    }

    getLocation = () => {
        // console.log('aa', addLocationListener);
        // addLocationListener(location =>
        //     console.log(location, 999987654456789876545678),
        // );
        // start();
        // stop();
        // init({
        //     ios: 'dda2ce0ca251baf59404a59c28b4edd5',
        //     //   android: "043b24fe18785f33c491705ffe5b6935"
        // }).then(res => {
        //     Geolocation.getCurrentPosition(location => {
        //         console.log(location);
        //     });
        //     console.log('----init----', res);
        //     // console.log(Geolocation.getCurrentPosition);
        //     // Geolocation.getCurrentPosition(({coords}) => {
        //     //     console.log('========', coords, 999999999);
        //     // });
        // });
        // console.log(navigator, navigator.geolocation);
        // Geolocation.getCurrentPosition((res) => {
        //     console.log(res)
        // });
    };

    render() {
        const {
            isPunchCard,
            images,
            isPublishInCity,
            submitInfo: {content, clockinTag},
        } = this.state;
        return (
            <View style={styles.contentWrap}>
                <Header title="发布动态" />

                <View style={styles.mainContent}>
                    <View style={styles.inputWrap}>
                        <TextInput
                            value={content}
                            onChangeText={this.onChangeText.bind(
                                this,
                                'content',
                            )}
                            style={styles.textarea}
                            placeholderTextColor="#999999"
                            multiline={true}
                            numberOfLines={10}
                            placeholder="编辑文字内容..."
                        />
                    </View>

                    <View style={styles.pictures}>
                        {images.map((img, index) => (
                            <View key={index}>
                                <Image
                                    style={[
                                        styles.picture,
                                        (index + 1) % 3 && styles.picMargin,
                                    ]}
                                    source={img}
                                />
                            </View>
                        ))}
                        {images.length < 6 && (
                            <TouchableOpacity
                                onPress={this.choosePicture}
                                style={styles.addButton}>
                                <Image
                                    style={styles.addIcon}
                                    source={imageUrl.addPic}
                                />
                                <Text style={styles.grayFont}>
                                    添加图片/视频
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={styles.lineInfo}>
                        <View style={styles.switch}>
                            <Switch
                                value={isPunchCard}
                                onValueChange={this.onValueChange}
                            />
                            <Text style={styles.switchText}>标记为打卡</Text>
                        </View>

                        <TouchableOpacity
                            onPress={this.getLocation}
                            style={styles.locateBtn}>
                            <Image
                                style={styles.locationIcon}
                                source={imageUrl.location}
                            />
                            <Text style={styles.grayFont}>你在哪里</Text>
                        </TouchableOpacity>
                    </View>

                    {isPunchCard && (
                        <View style={styles.dakaTag}>
                            <Text style={styles.tagText}>输入打卡标签:</Text>
                            <TextInput
                                value={clockinTag}
                                onChangeText={this.onChangeText.bind(
                                    this,
                                    'clockinTag',
                                )}
                                style={styles.tagInput}
                            />
                        </View>
                    )}

                    <View style={[styles.rFlex, styles.publishToCity]}>
                        <Text style={styles.chooseText}>
                            是否允许发布到同城:
                        </Text>
                        <View style={[styles.chooseBoxs, styles.rFlex]}>
                            <TouchableOpacity
                                onPress={this.togglePublishInCity.bind(
                                    this,
                                    true,
                                )}
                                style={styles.rFlex}>
                                <Image
                                    style={styles.chooseIcon}
                                    source={
                                        isPublishInCity
                                            ? imageUrl.chooseBox
                                            : imageUrl.unchooseBox
                                    }
                                />
                                <Text style={styles.chooseText}>是</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.togglePublishInCity.bind(
                                    this,
                                    false,
                                )}
                                style={styles.rFlex}>
                                <Image
                                    style={styles.chooseIcon}
                                    source={
                                        !isPublishInCity
                                            ? imageUrl.chooseBox
                                            : imageUrl.unchooseBox
                                    }
                                />
                                <Text style={styles.chooseText}>否</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Button
                    title="发布"
                    onTap={this.submit}
                    style={{
                        backgroundColor: '#564F5F',
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: scaleSize(200),
                    }}
                    textStyle={{color: '#FFFFFF'}}
                />
            </View>
        );
    }
}
const wWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    contentWrap: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    mainContent: {
        paddingHorizontal: scaleSize(54),
        paddingTop: scaleSize(54),
    },
    inputWrap: {
        width: '100%',
        height: scaleSize(514),
        backgroundColor: '#FBFBFB',
        padding: scaleSize(54),
        borderRadius: scaleSize(24),
    },
    textarea: {
        width: '100%',
        height: '100%',
        fontSize: scaleFont(42),
    },
    pictures: {
        marginTop: scaleSize(54),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    picture: {
        height: scaleSize(379),
        width: scaleSize(289),
        borderRadius: scaleSize(24),
        marginBottom: scaleSize(54),
    },
    picMargin: {
        marginRight: scaleSize((wWidth - 289 - 54) / 2),
    },
    addIcon: {
        width: scaleSize(72),
        height: scaleSize(72),
        marginBottom: scaleSize(30),
    },
    addButton: {
        height: scaleSize(379),
        width: scaleSize(289),
        backgroundColor: '#FBFBFB',
        borderRadius: scaleSize(24),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grayFont: {
        color: '#999999',
        fontSize: scaleFont(36),
    },
    switch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchText: {
        fontSize: scaleSize(39),
        color: '#333333',
        marginLeft: scaleSize(6),
    },
    locateBtn: {
        height: scaleSize(72),
        width: scaleSize(243),
        paddingHorizontal: scaleSize(24),
        borderColor: '#999999',
        borderWidth: scaleSize(3),
        borderRadius: scaleSize(39),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationIcon: {
        height: scaleSize(45),
        width: scaleSize(33),
    },
    lineInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scaleSize(57),
    },
    dakaTag: {
        width: '100%',
        height: scaleSize(111),
        backgroundColor: 'rgba(135,120,247,0.08)',
        borderRadius: scaleSize(57),
        // opacity: 0.08,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scaleSize(42),
        marginTop: scaleSize(60),
    },
    tagText: {
        color: '#8778F7',
        fontSize: scaleFont(42),
        marginRight: scaleSize(10),
    },
    tagInput: {
        flex: 1,
        color: '#8778F7',
    },
    publishToCity: {
        marginTop: scaleSize(60),
    },
    chooseIcon: {
        width: scaleSize(42),
        height: scaleSize(42),
        marginRight: scaleSize(10),
    },
    rFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chooseBoxs: {
        width: scaleSize(351),
    },
    chooseText: {
        fontSize: scaleFont(42),
        color: '#564F5F',
    },
});
