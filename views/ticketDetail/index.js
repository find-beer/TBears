import React from 'react';
import {View, Text, TextInput, Switch, Alert} from 'react-native';
import Header from '@views/common/header';
import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';

const activityInfos = [
    {
        title: '票种名称：',
        placeholder: '请填写',
        filedName: 'ticketName',
    },
    {
        title: '价格：',
        placeholder: '请选择',
        filedName: 'ticketPrice',
    },
];

const groupInfos = [
    {
        title: '拼团人数',
        placeholder: '请填写',
        filedName: 'groupPeopleNum',
    },
    {
        title: '拼团价',
        placeholder: '请选择',
        filedName: 'groupActivityPrice',
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

const ChildrenLine = props => (
    <View
        style={
            props.isLast ? styles.lastChildrenLineWrap : styles.childrenLineWrap
        }>
        <View>
            <Text style={styles.childrenLineTitle}>{props.title}</Text>
        </View>
        {props.children}
    </View>
);

export default class ticketDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitInfo: {
                ticketName: '',
                ticketPrice: '',
                isAllowGroup: true,
                groupPeopleNum: '',
                groupActivityPrice: '',
                ticketPriceExplain: '',
            },
        };
    }

    onInputChange = (item, value) => {
        let {submitInfo} = this.state;
        submitInfo[item.filedName] = value;
        this.setState({
            submitInfo,
        });
        console.log(submitInfo);
    };
    handleSaveEvent = () => {
        let {submitInfo} = this.state;
        Alert.alert('保存');
    };
    handleSwitchEvent = () => {
        const {submitInfo} = this.state;
        submitInfo.isAllowGroup = !submitInfo.isAllowGroup;
        this.setState(
            {
                submitInfo,
            },
            () => {
                console.log(this.state.submitInfo);
            },
        );
    };
    handleGetticketPriceExplainEvent = value => {
        const {submitInfo} = this.state;
        submitInfo.ticketPriceExplain = value;
        this.setState(
            {
                submitInfo,
            },
            () => {
                console.log(this.state.submitInfo);
            },
        );
    };
    render() {
        const {submitInfo} = this.state;
        return (
            <View style={styles.contentWrap}>
                <Header title="票种详情页" />
                {activityInfos.map((item, index) => (
                    <View key={index}>
                        <InfoLine title={item.title}>
                            <TextInput
                                onChangeText={this.onInputChange.bind(
                                    this,
                                    item,
                                )}
                                placeholder={item.placeholder}
                            />
                        </InfoLine>
                    </View>
                ))}
                <View style={styles.collage}>
                    <View style={styles.collageLineWrap}>
                        <Text style={styles.lineTitle}>是否允许拼团</Text>
                        <Switch
                            onValueChange={this.handleSwitchEvent}
                            value={submitInfo.isAllowGroup}
                        />
                    </View>
                    {submitInfo.isAllowGroup && (
                        <View>
                            {groupInfos.map((item, index) => (
                                <View key={index}>
                                    <ChildrenLine title={item.title}>
                                        <TextInput
                                            onChangeText={this.onInputChange.bind(
                                                this,
                                                item,
                                            )}
                                            placeholder={item.placeholder}
                                        />
                                    </ChildrenLine>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
                <View style={styles.ticketTypesWrap}>
                    <Text style={styles.ticketTypesTitle}>票种说明</Text>
                    <TextInput
                        multiline={true}
                        style={styles.desc}
                        numberOfLines={10}
                        maxLength={150}
                        placeholder="此处添加票种说明"
                        textAlignVertical="top"
                        onChangeText={this.handleGetticketPriceExplainEvent}
                    />
                </View>
                <Button
                    title="保存"
                    onTap={this.handleSaveEvent}
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
        color: '#564F5F',
        fontSize: scaleFont(42),
        marginRight: scaleSize(30),
    },
    collageLineWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleSize(54),
        paddingTop: scaleSize(54),
    },
    childrenLineWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleSize(100),
        paddingVertical: scaleSize(41),
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: scaleSize(2),
    },
    lastChildrenLineWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleSize(54),
        paddingHorizontal: scaleSize(46),
        paddingVertical: scaleSize(41),
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: scaleSize(2),
    },
    childrenLineTitle: {
        fontSize: scaleFont(38),
        color: '#666666',
    },
    ticketTypesWrap: {
        marginHorizontal: scaleSize(54),
        marginTop: scaleSize(54),
    },
    desc: {
        marginTop: scaleSize(24),
        fontSize: scaleFont(36),
        backgroundColor: '#F5F5F5',
        minHeight: scaleFont(323),
    },
    ticketTypesTitle: {
        color: '#564F5F',
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
    collage: {},
});
