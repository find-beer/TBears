import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import Header from '@views/common/header';
import {scaleSize, scaleFont} from '@utils/scaleUtil';
import Button from '@views/common/button';
import {BoxShadow} from 'react-native-shadow';

const imageUrl = {
    cardBg: require('../../assets/publish/ticket-card.png'),
    location: require('../../assets/publish/location.png'),
    chooseBox: require('../../assets/publish/choose.png'),
    unchooseBox: require('../../assets/publish/unchoose.png'),
};
const optionDialog = require('../../assets/publish/option-dialog.png');
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
        marginBottom: scaleSize(250),
    },
    tickeCard: {
        width: scaleSize(972),
        height: scaleSize(296),
        marginTop: scaleSize(72),
        marginHorizontal: scaleSize(54),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#F2F2F2',
        borderWidth: scaleSize(5),
        borderRadius: scaleSize(12),
        backgroundColor: '#ffffff',
    },
    tickeCardContent: {
        height: scaleSize(194),
        justifyContent: 'space-between',
        marginLeft: scaleSize(48),
    },
    tickeDetailsContent: {
        // width: scaleSize(486),
        height: scaleSize(79),
        flexDirection: 'row',
        alignItems: 'center',
    },
    tickeTypeName: {
        color: '#8778F7',
        fontSize: scaleSize(57),
        marginRight: scaleSize(33),
    },
    tickeGroupNums: {
        color: '#333333',
        fontSize: scaleSize(51),
    },
    tickeUseTips: {
        color: '#666666',
        fontSize: scaleSize(48),
    },
    selected: {
        width: scaleSize(54),
        height: scaleSize(54),
        marginRight: scaleSize(48),
    },
    bearTipsWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        height: scaleSize(203),
        marginLeft: scaleSize(54),
        marginRight: scaleSize(54),
        marginTop: scaleSize(200),
    },
    bearTipIcon: {
        width: scaleSize(48),
        height: scaleSize(48),
        marginRight: scaleSize(22),
    },
    smallBearTips: {
        width: scaleSize(890),
        height: scaleSize(203),
        justifyContent: 'space-between',
    },
    smallBearTipsTxt: {
        marginLeft: scaleSize(56),
        marginTop: scaleSize(33),
    },
    smallBearTipsContent: {
        marginLeft: scaleSize(56),
        marginBottom: scaleSize(33),
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
    },
});

export default class selectTicketTypes extends React.Component {
    state = {
        tickeTypesData: [
            {
                type: '成人票',
                groups: '（3人成团）',
                price: '',
                status: true,
                tips: '说明：飞虎恶风开发',
            },
            {
                type: '学生票',
                groups: '（3人成团）',
                price: '¥ 60',
                status: false,
                tips: '说明：学生使用',
            },
        ],
        rtTnstructionsData: [
            '1、本活动由主办法委托探熊待处理退款事宜；',
            '2、本活动由主办法委托探熊待处理退款事宜处理退款事宜；',
            '3、本活动由主办法委托探熊待处理退款事宜。',
        ],
    };
    submit = () => {
        console.log('submit', this.state.submitInfo);
    };
    handleSelectTicketEvent = value => {
        // console.log(888, value, 999);
        const {tickeTypesData} = this.state;
        tickeTypesData.map((item, index) => {
            if (index === value) {
                tickeTypesData[index].status = !item.status;
            } else {
                tickeTypesData[index].status = false;
            }
            return tickeTypesData;
        });
        this.setState({tickeTypesData});
    };
    render() {
        const {tickeTypesData} = this.state;
        const shadowOpt = {
            width: scaleSize(972),
            height: scaleSize(296),
            borderColor: '#290768',
            borderRightWidth: scaleSize(5),
            borderBottomWidth: scaleSize(30),
            radius: scaleSize(12),
            opacity: 0.1,
            // x:0,
            // y:8,
            // style:{marginVertical:5}
        };
        return (
            <View style={styles.container}>
                <Header title="选择(拼团)票种" left={null} />
                <View style={styles.ticketTypeListWrap}>
                    <FlatList
                        data={tickeTypesData}
                        renderItem={({item, index}) => (
                            <>
                                <ImageBackground
                                    key={index}
                                    style={styles.tickeCard}>
                                    <View style={styles.tickeCardContent}>
                                        <View
                                            style={styles.tickeDetailsContent}>
                                            <Text style={styles.tickeTypeName}>
                                                {item.type}
                                            </Text>
                                            <Text style={styles.tickeTypeName}>
                                                {item.price}
                                            </Text>
                                            <Text style={styles.tickeGroupNums}>
                                                {item.groups}
                                            </Text>
                                        </View>
                                        <Text style={styles.tickeUseTips}>
                                            {item.tips}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={this.handleSelectTicketEvent.bind(
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
                                </ImageBackground>
                                {index === tickeTypesData.length - 1 && (
                                    <View style={styles.bearTipsWrap}>
                                        <Image
                                            source={smallBearIcon}
                                            style={styles.bearTipIcon}
                                        />
                                        <ImageBackground
                                            style={styles.smallBearTips}
                                            source={optionDialog}>
                                            <Text
                                                style={styles.smallBearTipsTxt}>
                                                小熊叮嘱：
                                            </Text>
                                            <Text
                                                style={
                                                    styles.smallBearTipsContent
                                                }>
                                                参加活动的时候，要注意保证自己的安全哦
                                            </Text>
                                        </ImageBackground>
                                    </View>
                                )}
                            </>
                        )}
                    />
                </View>

                <Button
                    title="确定"
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
