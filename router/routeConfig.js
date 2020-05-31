import MainTabScreen from '@views/mainTab/index'
import LoginScreen from '@views/login/index'
import InteractiveNotification from '@views/notice/interactiveNotification'
import ActivityList from '@views/notice/activityList'
import FriendsList from '@views/notice/friendsList'
import AddFriends from '@views/notice/addFriends'
import QrCode from '@views/qrCode'
import Complaint from '@views/complaint'
import Store from '@views/store'
import Config from '@views/config'
import StoreList from '@views/storeList'
import EditInfo from '@views/editInfo'
import PunchList from '@views/punchList';  // 榜单
import Apply from '@views/apply'; // 报名页
import RelationChain from '@views/relationChain'; // 关系链
import Home from '@views/home'; // 关系网首页

export default {
    MainTab: {
        screen: MainTabScreen
    },
    Login: {
        screen: LoginScreen
    },
    InteractiveNotification: {
        screen: InteractiveNotification
    },
    ActivityList: {
        screen: ActivityList
    },
    FriendsList: {
        screen: FriendsList
    },
    AddFriends: {
        screen: AddFriends
    },
    QrCode:{
        screen:QrCode
    },
    Complaint:{
        screen:Complaint
    },
    Store:{
        screen:Store
    },
    StoreList:{
        screen:StoreList
    },
    Config:{
        screen:Config
    },
    EditInfo:{
        screen:EditInfo
    },
    Mine:{
        screen: Home
    },
    PunchList: {
        screen: PunchList
    },
    Apply: {
        screen: Apply
    },
    RelationChain: {
        screen: RelationChain
    }
}