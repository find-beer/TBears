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
        filedName: 'numberCount',
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
        filedName: 'activityType',
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
                // numberCount: '',
                enrollEndTime: '',
                location: '',
                activityAddress: '',
                // ticketVoList: [],
                activityType: '',
                state: 2,
                needInfo: 0, //0否 1是
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
        let dateString = dateFormat(date, 'yyyy-mm-dd HH:MM:ss');
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
        let {submitInfo} = this.state;
        submitInfo.activityType = value;
        this.setState({
            submitInfo,
        });
        this.togglePicker();
    };
    //存草稿
    handleSaveDraftEvent = () => {};

    //查询存草稿
    handleQueryDraftEvent = () => {
        enhanceFetch('/activity/querydraft', 'get').then(res => {
            console.log(res, '回显示处理');
        });
    };

    getAllActives = () => {
        enhanceFetch('/common/activitytype', 'get').then(res => {
            const typeMap = res.map(item => {
                return {
                    label: item._2,
                    value: item._2,
                    type: item._3,
                };
            });
            this.setState({typeMap});
        });
    };

    handlePublishEvent = () => {
        const {
            activityTitle,
            activityTime,
            enrollEndTime,
            activityAddress,
        } = this.state.submitInfo;
        if (!activityTitle) {
            Alert.alert('请填写活动标题');
        } else if (!activityTime) {
            Alert.alert('请填写活动时间');
        } else if (!enrollEndTime) {
            Alert.alert('请选择活动结束时间');
        } else if (!activityAddress) {
            Alert.alert('请填写活动位置');
        } else {
            enhanceFetch(
                '/activity/publish',
                'post',
                this.state.submitInfo,
            ).then(res => {
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
                            ) : item.infoType === 2 || item.infoType === 4 ? (
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

                <TextInput
                    multiline={true}
                    style={styles.desc}
                    numberOfLines={10}
                    placeholder="请书写文案..."
                    textAlignVertical="top"
                />

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
                        selectedValue={submitInfo.activityType}
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
        marginTop: scaleSize(54),
        marginHorizontal: scaleSize(54),
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
