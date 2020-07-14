import React from 'react';
import {View, Text, TextInput, Switch, Alert, AsyncStorage} from 'react-native';
import Header from '@views/common/header';
import {StyleSheet} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';
let ticketTypeLists = [];

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
                price: '',
                assembleTage: false,
                assembleMemberCount: '',
                assemblePrice: '',
                illustration: '',
                assemble: 0,
                ticketState: 0,
            },
            activityInfos: [
                {
                    title: '票种名称：',
                    placeholder: '请填写',
                    filedName: 'ticketName',
                    value: '',
                },
                {
                    title: '价格：',
                    placeholder: '请选择',
                    filedName: 'price',
                    value: '',
                },
            ],
            groupInfos: [
                {
                    title: '拼团人数',
                    placeholder: '请填写',
                    filedName: 'assembleMemberCount',
                    value: '',
                },
                {
                    title: '拼团价',
                    placeholder: '请选择',
                    filedName: 'assemblePrice',
                    value: '',
                },
            ],
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
        const {
            ticketName,
            price,
            assembleTage,
            assembleMemberCount,
            assemblePrice,
            illustration,
        } = submitInfo;
        if (!ticketName) {
            Alert.alert('请填写票种名称');
        } else if (!price) {
            Alert.alert('请填写票价');
        } else if (!illustration) {
            Alert.alert('请填写票种说明');
        } else {
            if (assembleTage) {
                if (!assembleMemberCount) {
                    Alert.alert('请填写拼团人数');
                } else if (!assemblePrice) {
                    Alert.alert('请填写拼团价');
                } else {
                    submitInfo.assemble = 1;
                    if (!submitInfo.id) {
                        submitInfo.id = Date.now();
                        ticketTypeLists.push(submitInfo);
                    } else {
                        let data = ticketTypeLists;

                        data.map((item, index) => {
                            if ((item.id = submitInfo.id)) {
                                ticketTypeLists[index] = submitInfo;
                            }
                        });
                    }
                    this._storeData(ticketTypeLists);
                }
            } else {
                submitInfo.assemble = 0;
                if (!submitInfo.id) {
                    submitInfo.id = Date.now();
                    ticketTypeLists.push(submitInfo);
                } else {
                    let data = ticketTypeLists;
                    data.map((item, index) => {
                        if ((item.id = submitInfo.id)) {
                            ticketTypeLists[index] = submitInfo;
                        }
                    });
                }
                this._storeData(ticketTypeLists);
            }
        }
    };
    _storeData = async infoData => {
        try {
            await AsyncStorage.setItem(
                'ticketTypeLists',
                JSON.stringify(infoData),
            );
            // this.props.navigation.replace('ticketType');
            this.props.navigation.state.params.refresh();
            this.props.navigation.goBack();
        } catch (error) {
            Alert.alert('抛出错误', error);
        }
    };
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('ticketTypeLists');
            if (value !== null) {
                ticketTypeLists = JSON.parse(value);
            }
        } catch (error) {
            Alert.alert(error);
        }
    };
    handleSwitchEvent = () => {
        const {submitInfo} = this.state;
        submitInfo.assembleTage = !submitInfo.assembleTage;
        this.setState({
            submitInfo,
        });
    };
    handleGetillustrationEvent = value => {
        const {submitInfo} = this.state;
        submitInfo.illustration = value;
        this.setState({
            submitInfo,
        });
    };
    componentDidMount() {
        const {submitInfo, activityInfos, groupInfos} = this.state;
        const newInfo = this.props.navigation.state.params.value;
        if (newInfo) {
            newInfo.assembleTage = newInfo.assemble ? true : false;
            activityInfos[0].value = newInfo.ticketName;
            activityInfos[1].value = newInfo.price;
            groupInfos[0].value = newInfo.assembleMemberCount;
            groupInfos[1].value = newInfo.assemblePrice;
            this.setState({submitInfo: newInfo, activityInfos, groupInfos});
        }
        this._retrieveData();
    }
    render() {
        const {submitInfo, activityInfos, groupInfos} = this.state;
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
                                defaultValue={item.value}
                            />
                        </InfoLine>
                    </View>
                ))}
                <View style={styles.collage}>
                    <View style={styles.collageLineWrap}>
                        <Text style={styles.lineTitle}>是否允许拼团</Text>
                        <Switch
                            onValueChange={this.handleSwitchEvent}
                            value={submitInfo.assembleTage}
                        />
                    </View>
                    {submitInfo.assembleTage && (
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
                                            defaultValue={item.value}
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
                        defaultValue={submitInfo.illustration}
                        multiline={true}
                        style={styles.desc}
                        numberOfLines={10}
                        maxLength={150}
                        placeholder="此处添加票种说明"
                        textAlignVertical="top"
                        onChangeText={this.handleGetillustrationEvent}
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
