import HomeScreen from '@views/home/index';
import MeetScreen from '@views/activities/index';
import NoticeScreen from '@views/notice/index';
import MineScreen from '@views/mine/index';
import Publish from '@views/publish/index';

export default [
    {
        name: 'Home',
        label: '首页',
        iconInactiveUri: require('@assets/tab/home_unselected.png'),
        iconActiveUri: require('@assets/tab/home_selected.png'),
        screen: HomeScreen,
    },
    {
        name: 'Meet',
        label: '擦肩',
        iconInactiveUri: require('@assets/tab/meet_unselected.png'),
        iconActiveUri: require('@assets/tab/meet_selected.png'),
        screen: MeetScreen,
    },
    {
        name: 'Publish',
        // label: '发布',
        iconInactiveUri: require('@assets/tab/publish.png'),
        iconActiveUri: require('@assets/tab/publish.png'),
        screen: Publish,
    },
    {
        name: 'Notice',
        label: '消息',
        iconInactiveUri: require('@assets/tab/msg_unselected.png'),
        iconActiveUri: require('@assets/tab/msg_selected.png'),
        screen: NoticeScreen,
    },
    {
        name: 'Mine',
        label: '我的',
        iconInactiveUri: require('@assets/tab/mine_unselected.png'),
        iconActiveUri: require('@assets/tab/mine_selected.png'),
        screen: MineScreen,
    },
];
