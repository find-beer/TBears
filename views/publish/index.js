import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from '@views/common/datePicker';
import Picker from '@views/common/picker';
import Header from '@views/common/header';
import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';
import dateFormat from '@utils/formatDate';

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

const typeMap = [
    {
        value: '电影演出',
        label: '电影演出',
    },
    {
        value: '轰趴桌游',
        label: '轰趴桌游',
    },
    {
        value: '户外运动',
        label: '户外运动',
    },
    {
        value: '游乐园',
        label: '游乐园',
    },
    {
        value: '沉浸式娱乐',
        label: '沉浸式娱乐',
    },
    {
        value: '文化体验',
        label: '文化体验',
    },
    {
        value: '新奇探索',
        label: '新奇探索',
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
            showCalendar: false,
            showPicker: false,
            currentFiled: '',
            submitInfo: {
                activityTitle: '',
                activityTime: '',
                numberCount: '',
                enrollEndTime: '',
                activityAddress: '',
                ticketVoList: [],
                activityType: '',
            },
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

    render() {
        const {submitInfo, showCalendar, showPicker} = this.state;
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
                                <TouchableOpacity>
                                    <Text>{item.placeholder}</Text>
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
                    <Button style={{flex: 1}} title="存为草稿" />
                    <Button
                        style={{backgroundColor: '#564F5F', flex: 1}}
                        textStyle={{color: '#FFFFFF'}}
                        title="立即发布"
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

                <Picker
                    visible={showPicker}
                    selectedValue={submitInfo.activityType}
                    onConfirm={this.onPickerSelect}
                    onCancel={this.togglePicker}
                    data={typeMap}
                />
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
});
