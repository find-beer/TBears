import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    AsyncStorage,
} from 'react-native';
import {WebView} from 'react-native-webview';
import DatePicker from '@views/common/datePicker';
import Picker from '@views/common/picker';
import Header from '@views/common/header';
import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';
import dateFormat from '@utils/formatDate';
import enhanceFetch from '@utils/fetch';
const arrow = require('../../assets/mine/arrow_right.png');

// infoType: 1输入框  2日期选择 3页面跳转 4picker
const activityInfos = [
    {
        title: '活动标题',
        infoType: 1, // input
        placeholder: '请填写',
        filedName: 'activityTitle',
    },
    {
        title: '活动时间',
        infoType: 2, // calender select
        placeholder: '不选时间默认为长期活动',
        filedName: 'activityTime',
    },
    {
        title: '活动人数',
        infoType: 1,
        placeholder: '请填写',
        filedName: 'memberCount',
    },
    {
        title: '报名截止时间',
        infoType: 2,
        placeholder: '(默认活动开始前12小时)',
        filedName: 'enrollEndTime',
    },
    {
        title: '活动位置',
        infoType: 1,
        placeholder: '请填写',
        filedName: 'activityAddress',
    },
    {
        title: '增加票种',
        infoType: 3, // 页面跳转
        placeholder: '选择票种',
        filedName: 'ticketVoList',
    },
    {
        title: '活动类型',
        infoType: 4, // input
        placeholder: '请选择',
        filedName: 'activityTypeName',
    },
];

const InfoLine = props => (
    <View style={styles.lineWrap}>
        <View>
            <Text style={styles.lineTitle}>{props.title}</Text>
        </View>
        {props.children}
    </View>
);

export default class Publish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeMap: [],
            showCalendar: false,
            showPicker: false,
            currentFiled: '',
            submitInfo: {
                activityTitle: '',
                activityTime: '',
                memberCount: '',
                enrollEndTime: '',
                location: '123.236944,41.267244',
                activityAddress: '',
                ticketVoList: [],
                activityType: '',
                activityTypeName: '',
                state: 2,
                needInfo: 0, //0否 1是
                content: '',
            },
            ticketTypesNum: 0,
        };
    }

    choosePicker = item => {
        if (item.infoType === 2) {
            this.toggleCalendar(item.filedName);
        } else if (item.infoType === 4) {
            this.togglePicker();
        }
    };

    toggleCalendar = filedName => {
        this.setState({
            showCalendar: !this.state.showCalendar,
            currentFiled: filedName,
        });
    };

    togglePicker = () => {
        this.setState({
            showPicker: !this.state.showPicker,
        });
    };

    onCalendarSelect = date => {
        let dateString = dateFormat(date, 'yyyy-mm-dd HH:MM');
        let {submitInfo} = this.state;
        submitInfo[this.state.currentFiled] = dateString;
        this.setState({
            submitInfo,
        });
        this.toggleCalendar();
    };

    onInputChange = (item, value) => {
        let {submitInfo} = this.state;
        submitInfo[item.filedName] = value;
        this.setState({
            submitInfo,
        });
        console.log(submitInfo);
    };

    onPickerSelect = (value, index) => {
        console.log(value, 999);
        let {submitInfo, typeMap} = this.state;
        submitInfo.activityType = typeMap[index].type;
        submitInfo.activityTypeName = typeMap[index].label;
        this.setState({
            submitInfo,
        });
        this.togglePicker();
    };
    //存草稿
    handleSaveDraftEvent = () => {
        this.handleDataFetch(1);
    };

    //查询存草稿
    handleQueryDraftEvent = () => {
        enhanceFetch('/activity/querydraft', 'get').then(res => {
            res.data && this.setState({submitInfo: res.data});
        });
    };

    getAllActives = () => {
        enhanceFetch('/common/activitytype', 'get').then(res => {
            const typeMap = res.map(item => {
                return {
                    label: item._2,
                    value: item._1,
                    type: item._3,
                };
            });
            this.setState({typeMap});
        });
    };

    handlePublishEvent = () => {
        this.handleDataFetch(2);
    };
    handleDataFetch = state => {
        var nowDate = new Date();
        var endDate = new Date(new Date().getTime() + 12 * 60 * 60 * 1000);
        let params = this.state.submitInfo;
        const {
            activityTitle,
            activityTime,
            enrollEndTime,
            activityAddress,
            memberCount,
            activityType,
        } = this.state.submitInfo;
        if (!activityTitle) {
            Alert.alert('请填写活动标题');
        } else if (!memberCount) {
            Alert.alert('请填写活动人数');
        }
        // else if (!activityTime) {
        //     params.activityTime = this.getFormatDate(nowDate);
        //     // Alert.alert('请填写活动时间');
        // } else if (!enrollEndTime) {
        //     params.enrollEndTime = this.getFormatDate(endDate);
        //     // Alert.alert('请选择活动结束时间');
        // }
        else if (!activityAddress) {
            Alert.alert('请填写活动位置');
        } else {
            delete params.activityTypeName;
            // delete params.undefined;
            // if (this.state.submitInfo.memberCount) {
            //     params.memberCount = Number(this.state.submitInfo.memberCount);
            // }
            // params.content = '活动内容';
            // params.memberCount = 3;
            params.userType = 0;
            params.activityValid = 0; //长期活动和短期活动
            if (!this.state.submitInfo.activityTime) {
                params.activityTime = 0;
            }
            if (!activityTime) {
                params.activityValid = 1;
                params.activityTime = this.getFormatDate(nowDate);
            }
            if (!enrollEndTime) {
                params.enrollEndTime = this.getFormatDate(endDate);
            }
            if (!activityType) {
                params.activityType = 1; //活动类型,默认为长期活动1
            }
            params.state = state;
            console.log(params, '请求的参数');
            enhanceFetch('/activity/publish', 'post', params).then(res => {
                console.log(res);
            });
        }
    };
    goToAddTicketPage = () => {
        this.props.navigation.navigate('ticketType');
    };

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('ticketTypeLists');
            if (value !== null) {
                // We have data!!
                let ticketTypeLists = JSON.parse(value);
                const {submitInfo} = this.state;
                submitInfo.ticketVoList = ticketTypeLists;
                this.setState({ticketTypesNum: ticketTypeLists.length});
            }
        } catch (error) {
            Alert.alert(error);
        }
    };
    componentDidMount() {
        this._retrieveData();
        this.handleQueryDraftEvent();
        this.getAllActives();
    }
    componentDidUpdate() {
        this._retrieveData();
    }
    onMessage(e) {
        console.log(e.nativeEvent.data, 99999988);

        if (e.nativeEvent.data) {
            const {submitInfo} = this.state;
            submitInfo.content = e.nativeEvent.data;
            this.setState({
                submitInfo,
            });
        } else {
            // this.refs.webview.postMessage('我来自RN');
        }
    }

    getFormatDate = date => {
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var H = date.getHours();
        var M = date.getMinutes();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        if (H >= 0 && H <= 9) {
            H = '0' + H;
        }
        if (M >= 0 && M <= 9) {
            M = '0' + M;
        }
        let currentDate =
            date.getFullYear() +
            '-' +
            month +
            '-' +
            strDate +
            ' ' +
            H +
            ':' +
            M;
        return currentDate;
    };

    onLoadStart() {
        this.refs.webview.postMessage('<p>初始值，我来自RNb</p>');
    }
    render() {
        const {
            submitInfo,
            showCalendar,
            showPicker,
            typeMap,
            ticketTypesNum,
        } = this.state;
        return (
            <View style={styles.contentWrap}>
                <Header title="发布活动" />
                {activityInfos.map((item, index) => (
                    <View key={index}>
                        <InfoLine title={item.title}>
                            {item.infoType === 1 ? (
                                <TextInput
                                    onChangeText={this.onInputChange.bind(
                                        this,
                                        item,
                                    )}
                                    placeholder={item.placeholder}
                                />
                            ) : item.infoType === 2 ||
                              (item.infoType === 4 &&
                                  submitInfo.activityTime) ? (
                                <TouchableOpacity
                                    onPress={this.choosePicker.bind(
                                        this,
                                        item,
                                    )}>
                                    {submitInfo[item.filedName] ? (
                                        <Text>
                                            {submitInfo[item.filedName]}
                                        </Text>
                                    ) : (
                                        <Text style={styles.placeholder}>
                                            {item.placeholder}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            ) : item.infoType === 4 ? (
                                <Text style={styles.placeholder}>周边游</Text>
                            ) : (
                                <TouchableOpacity
                                    onPress={this.goToAddTicketPage}
                                    style={styles.returnTicketBtn}>
                                    <Text style={styles.returnTicketTxt}>
                                        {ticketTypesNum > 0
                                            ? `已设置${ticketTypesNum}个`
                                            : item.placeholder}
                                    </Text>
                                    <Image
                                        source={arrow}
                                        style={styles.arrow}
                                    />
                                </TouchableOpacity>
                            )}
                        </InfoLine>
                    </View>
                ))}
                {/*
                <TextInput
                    multiline={true}
                    style={styles.desc}
                    numberOfLines={10}
                    placeholder="请书写文案..."
                    textAlignVertical="top"
                /> */}
                <View style={styles.desc}>
                    <WebView
                        style={styles.desc}
                        ref="webview"
                        source={{uri: 'http://localhost:3000/'}}
                        onMessage={this.onMessage.bind(this)}
                        onLoadStart={this.onLoadStart.bind(this)}
                        injectedJavaScript="document.addEventListerer('message',function(e){eval(e.data,e.data = '你好')})"
                    />
                </View>
                <View style={styles.footer}>
                    <Button
                        style={{flex: 1}}
                        title="存为草稿"
                        onTap={this.handleSaveDraftEvent}
                    />
                    <Button
                        style={{backgroundColor: '#564F5F', flex: 1}}
                        textStyle={{color: '#FFFFFF'}}
                        title="立即发布"
                        onTap={this.handlePublishEvent}
                    />
                </View>

                <DatePicker
                    visible={showCalendar}
                    value={new Date()}
                    onConfirm={this.onCalendarSelect}
                    onCancel={this.toggleCalendar}
                    display="default"
                    mode="datetime"
                />
                {typeMap.length > 0 && (
                    <Picker
                        visible={showPicker}
                        // selectedValue={submitInfo.activityType}
                        onConfirm={this.onPickerSelect}
                        onCancel={this.togglePicker}
                        data={typeMap}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentWrap: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    lineWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleSize(54),
        paddingVertical: scaleSize(54),
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: scaleSize(2),
    },
    lineTitle: {
        fontSize: scaleFont(42),
        marginRight: scaleSize(30),
    },
    desc: {
        height: scaleSize(800),
        // marginTop: scaleSize(54),
        // marginHorizontal: scaleSize(54),
        fontSize: scaleFont(42),
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
    },
    placeholder: {
        color: '#999999',
    },
    returnTicketBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    returnTicketTxt: {
        color: '#999999',
    },
    arrow: {
        width: scaleSize(56),
        height: scaleSize(56),
    },
});
