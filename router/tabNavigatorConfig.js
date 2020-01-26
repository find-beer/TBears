import HomeScreen from '@views/home/index'
import MeetScreen from '@views/meet/index'
import NoticeScreen from '@views/notice/index'
import MineScreen from '@views/mine/index'

export default [{
    name: 'Home',
    label: '首页',
    iconInactiveUri: 'http://q4pas9fmo.bkt.clouddn.com/home-inactive.png',
    iconActiveUri: 'http://q4pas9fmo.bkt.clouddn.com/home-active.png',
    screen: HomeScreen
}, {
    name: 'Meet',
    label: '擦肩',
    iconInactiveUri: 'http://q4pas9fmo.bkt.clouddn.com/meet-inactive.png',
    iconActiveUri: 'http://q4pas9fmo.bkt.clouddn.com/meet-active.png',
    screen: MeetScreen
}, {
    name: 'Publish',
    label: null,
    iconInactiveUri: 'http://q4pas9fmo.bkt.clouddn.com/publish.png',
    iconActiveUri: 'http://q4pas9fmo.bkt.clouddn.com/publish.png',
    screen: null
}, {
    name: 'Notice',
    label: '消息',
    iconInactiveUri: 'http://q4pas9fmo.bkt.clouddn.com/notice-inactive.png',
    iconActiveUri: 'http://q4pas9fmo.bkt.clouddn.com/notice-active.png',
    screen: NoticeScreen
}, {
    name: 'Mine',
    label: '我的',
    iconInactiveUri: 'http://q4pas9fmo.bkt.clouddn.com/mine-inactive.png',
    iconActiveUri: 'http://q4pas9fmo.bkt.clouddn.com/mine-active.png',
    screen: MineScreen
}]