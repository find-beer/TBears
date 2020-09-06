import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {getStatusBarHeight} from '@utils/screenUtil';
import {scaleFont, scaleSize} from '@utils/scaleUtil';
import {ScrollView} from 'react-navigation';
import {SafeAreaView} from 'react-native-safe-area-context';


const imageUrl = {
    search: require('../../assets/activities/search.png'),
};

const typeMap = [{
    type: '周边游',
    icon: require('../../assets/activities/travel-around.png'),
}, {
    type: '电影演出',
    icon: require('../../assets/activities/movie.png'),
}, {
    type: '轰趴桌游',
    icon: require('../../assets/activities/Cartagena.png'),
}, {
    type: '户外运动',
    icon: require('../../assets/activities/outdoor.png'),
}, {
    type: '游乐园',
    icon: require('../../assets/activities/amusement-park.png'),
}, {
    type: '沉浸式娱乐',
    icon: require('../../assets/activities/game.png'),
}, {
    type: '文化体验',
    icon: require('../../assets/activities/cultural.png'),
}, {
    type: '新奇探索',
    icon: require('../../assets/activities/explore.png'),
}];

const activitiesMap = [{
    img: require('../../assets/mine/avatar.jpeg'),
    title: '某某某主题',
    singlePrice: '￥60',
    groupPrice: '￥30',
    groupNum: 3,
}, {
    img: require('../../assets/mine/avatar.jpeg'),
    title: '某某某主题',
    singlePrice: '￥60',
    groupPrice: '￥30',
    groupNum: 3,
}, {
    img: require('../../assets/mine/avatar.jpeg'),
    title: '某某某主题',
    singlePrice: '￥60',
    groupPrice: '￥30',
    groupNum: 3,
}, {
    img: require('../../assets/mine/avatar.jpeg'),
    title: '某某某主题',
    singlePrice: '￥60',
    groupPrice: '￥30',
    groupNum: 3,
}];
export default class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            currentTab: 0,
        };

    }

    onSearchChange = (value) => {
        this.setState({
            keyword: value,
        });
    };

    changeTab(value) {
        this.setState({
            currentTab: value,
        });
    }

    render() {
        const {
            keyword,
            currentTab,
        } = this.state;
        return (
            <SafeAreaView>
                <View style={styles.pageWrap}>
                    <View style={[styles.searchBox, styles.rFlex]}>
                        <Image source={imageUrl.search} style={styles.searchIcon}/>
                        <TextInput
                            style={styles.searchText}
                            placeholder="输入想去的地方"
                            placeholderTextColor="#999999"
                            value={keyword}
                            onChangeText={this.onSearchChange}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >

                        <View style={styles.swiperContainer}>
                            <Swiper
                                style={styles.swiper}
                                height={200}
                                showsButtons={false}
                                paginationStyle={{bottom: 6}}
                                autoplay={true}
                                loop={true}
                            >
                                <Image source={require('../../assets/mine/avatar.jpeg')} style={styles.bannerImg}/>
                                <Image source={require('../../assets/mine/avatar.jpeg')} style={styles.bannerImg}/>
                                <Image source={require('../../assets/mine/avatar.jpeg')} style={styles.bannerImg}/>
                            </Swiper>
                        </View>

                        <View style={styles.typeWrapper}>
                            {
                                typeMap.map((act) => (
                                    <TouchableOpacity style={styles.typeItem} key={act.type}>
                                        <Image style={styles.typeIcon} source={act.icon}/>
                                        <Text style={styles.typeText}>{act.type}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>


                        <View style={styles.tabWrap}>
                            <View style={styles.tabLine}>
                                <TouchableOpacity onPress={this.changeTab.bind(this, 0)} style={styles.cFlex}>
                                    <Text
                                        style={[styles.tabName, currentTab === 0 ? styles.activeTab : styles.unactiveTab]}>带你</Text>
                                    {currentTab === 0 && <View style={styles.tabBorder}/>}
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.changeTab.bind(this, 1)} style={styles.cFlex}>
                                    <Text
                                        style={[styles.tabName, currentTab === 1 ? styles.activeTab : styles.unactiveTab]}>参加</Text>
                                    {currentTab === 1 && <View style={styles.tabBorder}/>}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cardsWrap}>
                            {
                                activitiesMap.map((item) => (
                                    <View style={styles.activityCard}>
                                        <Image source={item.img} style={styles.activityImage}/>
                                        <Text style={[styles.cardText, styles.cardTitle]}>{item.title}</Text>
                                        <Text style={[styles.cardText, styles.purpleText]}>单人价:{item.singlePrice}</Text>
                                        <Text
                                            style={[styles.cardText, styles.purpleText]}>{item.groupNum}人成团: {item.groupPrice}</Text>
                                        <TouchableOpacity style={[styles.button, styles.rFlex]}>
                                            <Text style={styles.buttonText}>加入群聊</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
const wWidth = Dimensions.get('window').width;
const statusBarHeight = getStatusBarHeight();
const styles = StyleSheet.create({
    pageWrap: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingHorizontal: scaleSize(54),
    },
    rFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        height: scaleSize(100),
        width: '100%',
        backgroundColor: '#F2F2F2',
        borderRadius: scaleSize(51),
        paddingHorizontal: scaleSize(54),
        marginBottom: scaleSize(40),
    },
    searchIcon: {
        width: scaleSize(45),
        height: scaleSize(45),
        marginRight: scaleSize(39),
    },
    searchText: {
        fontSize: scaleFont(42),
        flex: 1,
    },
    swiperContainer: {
        height: scaleSize(420),
    },
    swiper: {
        height: scaleSize(420),
        // borderRadius: scaleSize(12)
    },
    bannerImg: {
        height: scaleSize(420),
        width: '100%',
        borderRadius: scaleSize(12),
    },
    typeIcon: {
        width: scaleSize(120),
        height: scaleSize(120),
    },
    typeItem: {
        display: 'flex',
        width: scaleSize(210),
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: scaleSize((wWidth - 280 - 36) / 8),
        marginTop: scaleSize(60),
    },
    typeWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-around'
    },
    typeText: {
        fontSize: scaleFont(36),
        color: '#333333',
        marginTop: scaleSize(27),
    },
    tabWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scaleSize(60),
    },
    tabLine: {
        display: 'flex',
        width: scaleSize(360),
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabBorder: {
        width: scaleSize(50),
        height: scaleSize(6),
        backgroundColor: '#564F5F',
        borderRadius: scaleSize(3),
        marginTop: scaleSize(12),
    },
    tabName: {
        fontSize: scaleFont(48),
    },
    activeTab: {
        color: '#564F5F',
    },
    unactiveTab: {
        color: '#999999',
    },
    cFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    activityCard: {
        display: 'flex',
        flexDirection: 'column',
        width: scaleSize(460),
        marginTop: scaleSize(60),
    },
    activityImage: {
        width: '100%',
        height: scaleSize(420),
        borderRadius: scaleSize(12),
    },
    cardsWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardText: {
        marginTop: scaleSize(27),
    },
    cardTitle: {
        fontSize: scaleFont(48),
        color: '#564F5F',
    },
    purpleText: {
        color: '#7765E5',
        fontSize: scaleFont(45),
    },
    button: {
        height: scaleSize(76),
        width: scaleSize(460),
        borderRadius: scaleSize(55),
        backgroundColor: '#564F5F',
        justifyContent: 'center',
        marginTop: scaleSize(30),
    },
    buttonText: {
        color: '#ffffff',
        fontSize: scaleSize(42),
    },

});
