import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import Header from '@views/common/header';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';

const arrow = require('../../assets/mine/arrow_right.png');
const voice = require('../../assets/publish/voice-icon.png');
const smallBearIcon = require('../../assets/publish/small-bear-icon.png');
const selected = require('../../assets/publish/choose.png');
const unselected = require('../../assets/publish/unchoose.png');

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    ticketTypeListWrap: {
        flex: 1,
        marginBottom: scaleSize(150),
    },
    item: {
        fontSize: scaleSize(36),
        color: '#999999',
        marginHorizontal: scaleSize(54),
    },
    tickeCardPic: {
        height: scaleSize(506),
    },
    tickeCard: {
        width: scaleSize(1080),
        height: scaleSize(506),
        marginBottom: scaleSize(60),
        marginTop: scaleSize(54),
    },
    tickeCardContent: {
        flexDirection: 'row',
        marginLeft: scaleSize(54),
        marginTop: scaleSize(72),
    },
    tickeTypeSituation: {
        width: scaleSize(486),
        height: scaleSize(162),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tickeType: {
        color: '#333333',
        fontSize: scaleSize(42),
    },
    studentTicket: {
        color: '#8778F7',
        fontSize: scaleSize(57),
    },
    GroupPrice: {
        color: '#333333',
        fontSize: scaleSize(42),
    },
    tickePrice: {
        color: '#8778F7',
        fontSize: scaleSize(57),
    },
    btnWrap: {
        height: scaleSize(236),
        marginLeft: scaleSize(54),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    butLeft: {
        width: scaleSize(260),
        height: scaleSize(90),
        backgroundColor: '#F5F5F5',
        borderRadius: scaleSize(45),
    },
    butRight: {
        width: scaleSize(260),
        height: scaleSize(90),
        backgroundColor: '#F5F5F5',
        borderRadius: scaleSize(45),
    },
    returnTicket: {
        flexDirection: 'row',
        height: scaleSize(175),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleSize(54),
        marginTop: scaleSize(60),
        borderTopWidth: scaleSize(3),
        borderBottomWidth: scaleSize(3),
        borderColor: '#F2F2F2',
    },
    returnTicketBtn: {
        flexDirection: 'row',
        height: scaleSize(175),
        alignItems: 'center',
    },
    returnTicketTitle: {
        fontSize: scaleSize(48),
        color: '#564F5F',
    },
    returnTicketTxt: {
        fontSize: scaleSize(39),
        color: '#999999',
    },
    arrow: {
        width: scaleSize(56),
        height: scaleSize(56),
    },
    header: {
        flexDirection: 'row',
        height: scaleSize(90),
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        paddingLeft: scaleSize(55),
    },
    voice: {
        width: scaleSize(60),
        height: scaleSize(60),
        marginRight: scaleSize(17),
    },
    headerTips: {
        color: '#999999',
        fontSize: scaleSize(39),
    },
    rtItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scaleSize(60),
        marginLeft: scaleSize(54),
        marginRight: scaleSize(54),
        height: scaleSize(67),
    },
    rtTxt: {
        color: '#564F5F',
        fontSize: scaleSize(48),
    },
    selected: {
        width: scaleSize(54),
        height: scaleSize(54),
    },
    bearTip: {
        height: scaleSize(162),
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: scaleSize(54),
        borderColor: '#F2F2F2',
        borderBottomWidth: scaleSize(3),
    },
    bearTipIcon: {
        width: scaleSize(48),
        height: scaleSize(48),
        marginRight: scaleSize(20),
    },
    bearTipTxt: {
        fontSize: scaleSize(39),
        color: '#8778F7',
    },
    structions: {
        marginTop: scaleSize(54),
        marginLeft: scaleSize(54),
    },
    structionsTitle: {
        color: '#999999',
        fontSize: scaleSize(39),
    },
    structionsLists: {
        marginTop: scaleSize(12),
        color: '#999999',
        fontSize: scaleSize(39),
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
    },
});

export default class tickeType extends React.Component {
    state = {
        returnTicData: [
            {
                title: '支持退票，委托探熊退款',
                status: true,
            },
            {
                title: '不接受退票',
                status: false,
            },
        ],
        rtTnstructionsData: [
            '1、本活动由主办法委托探熊待处理退款事宜；',
            '2、本活动由主办法委托探熊待处理退款事宜处理退款事宜；',
            '3、本活动由主办法委托探熊待处理退款事宜。',
        ],
        dataList: [{key: 'Devin'}],
    };
    handleSaveEvent = () => {
        Alert.alert('哇咔咔，保存功能还没有联调哦');
    };

    handleNewTickeTypeEvent = () => {
        Alert.alert('哇咔咔，创建新票种功能还没有联调哦');
    };
    handleEditEvent = () => {
        Alert.alert('哇咔咔，编辑功能还没有联调哦');
    };
    handleDeleteEvent = () => {
        Alert.alert('哇咔咔，删除功能还没有联调哦');
    };
    handleGoRefundTicketEvent = () => {
        Alert.alert('哇咔咔，去往退票页面,还没有打通哦');
    };
    handleSelectEvent = value => {
        const {returnTicData} = this.state;
        returnTicData.map((item, index) => {
            if (index === value) {
                returnTicData[index].status = !item.status;
            } else {
                returnTicData[index].status = false;
            }
            return returnTicData;
        });
        this.setState({returnTicData});
    };
    render() {
        const {returnTicData, rtTnstructionsData, dataList} = this.state;
        return (
            <>
                {!true ? (
                    <View style={styles.container}>
                        <Header title="票种" left={null} />
                        <View style={styles.ticketTypeListWrap}>
                            <FlatList
                                data={dataList}
                                renderItem={({item, index}) => (
                                    <>
                                        <ImageBackground
                                            style={styles.tickeCard}
                                            source={require('../../assets/publish/ticket-card.png')}>
                                            <View
                                                style={styles.tickeCardContent}>
                                                <View
                                                    style={
                                                        styles.tickeTypeSituation
                                                    }>
                                                    <Text
                                                        style={
                                                            styles.tickeType
                                                        }>
                                                        票种
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.studentTicket
                                                        }>
                                                        学生票
                                                    </Text>
                                                    {/* <Text
                                                        style={
                                                            styles.studentTicket
                                                        }>
                                                        拼团价（3人）
                                                    </Text> */}
                                                </View>
                                                <View
                                                    style={
                                                        styles.tickeTypeSituation
                                                    }>
                                                    <Text
                                                        style={
                                                            styles.GroupPrice
                                                        }>
                                                        拼团价
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.tickePrice
                                                        }>
                                                        60元
                                                    </Text>
                                                    {/* <Text
                                                        style={
                                                            styles.tickePrice
                                                        }>
                                                        30元
                                                    </Text> */}
                                                </View>
                                            </View>
                                            <View style={styles.btnWrap}>
                                                <Button
                                                    style={styles.butLeft}
                                                    title="编辑"
                                                    textStyle={{
                                                        color: '#333333',
                                                        fontSize: scaleSize(42),
                                                    }}
                                                    onTap={this.handleEditEvent}
                                                />
                                                <Button
                                                    style={styles.butRight}
                                                    title="删除"
                                                    textStyle={{
                                                        color: '#999999',
                                                        fontSize: scaleSize(42),
                                                    }}
                                                    onTap={
                                                        this.handleDeleteEvent
                                                    }
                                                />
                                            </View>
                                        </ImageBackground>
                                        <Text style={styles.item}>
                                            说明：需持学生证需持学生证需持学生证…需持学生证需持
                                            学生证需持学生证需持学生证需持学生证需持学生证…
                                        </Text>
                                        {index == dataList.length - 1 && (
                                            <View style={styles.returnTicket}>
                                                <Text
                                                    style={
                                                        styles.returnTicketTitle
                                                    }>
                                                    退票设置
                                                </Text>
                                                <View
                                                    style={
                                                        styles.returnTicketBtn
                                                    }>
                                                    <Text
                                                        style={
                                                            styles.returnTicketTxt
                                                        }
                                                        onPress={
                                                            this
                                                                .handleGoRefundTicketEvent
                                                        }>
                                                        支持退票
                                                    </Text>
                                                    <Image
                                                        source={arrow}
                                                        style={styles.arrow}
                                                    />
                                                </View>
                                            </View>
                                        )}
                                    </>
                                )}
                            />
                        </View>
                        <View style={styles.footer}>
                            <Button
                                style={{backgroundColor: '#F5F5F5', flex: 1}}
                                title="创建新票种"
                                onTap={this.handleNewTickeTypeEvent}
                            />
                            <Button
                                style={{backgroundColor: '#564F5F', flex: 1}}
                                textStyle={{color: '#FFFFFF'}}
                                title="保存"
                                onTap={this.handleSaveEvent}
                            />
                        </View>
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Header title="票种" left={null} />
                        <View style={styles.header}>
                            <Image source={voice} style={styles.voice} />
                            <Text style={styles.headerTips}>
                                提示：活动开始后不允许更改退款设置
                            </Text>
                        </View>
                        {returnTicData.map((item, index) => {
                            return (
                                <View key={index} style={styles.rtItem}>
                                    <Text style={styles.rtTxt}>
                                        {item.title}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={this.handleSelectEvent.bind(
                                            this,
                                            index,
                                        )}>
                                        <Image
                                            source={
                                                item.status
                                                    ? selected
                                                    : unselected
                                            }
                                            style={styles.selected}
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                        <View style={styles.bearTip}>
                            <Image
                                source={smallBearIcon}
                                style={styles.bearTipIcon}
                            />
                            <Text style={styles.bearTipTxt}>
                                提示：活动开始后不允许更改退款设置
                            </Text>
                        </View>
                        <View style={styles.structions}>
                            <Text style={styles.structionsTitle}>退票说明</Text>
                            {rtTnstructionsData.map((item, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={styles.structionsLists}>
                                        {item}
                                    </Text>
                                );
                            })}
                        </View>
                        <View style={styles.footer}>
                            <Button
                                style={{backgroundColor: '#F5F5F5', flex: 1}}
                                title="创建新票种"
                                onTap={this.handleNewTickeTypeEvent}
                            />
                            <Button
                                style={{backgroundColor: '#564F5F', flex: 1}}
                                textStyle={{color: '#FFFFFF'}}
                                title="保存"
                                onTap={this.handleSaveEvent}
                            />
                        </View>
                    </View>
                )}
            </>
        );
    }
}
