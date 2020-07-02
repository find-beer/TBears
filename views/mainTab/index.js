import React, {useState, useMemo, Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import * as actions from '@actions/index.js';
import tabNavigatorConfig from '@router/tabNavigatorConfig';
import styles from '@styles/mainTab';

const userPublish = require('../../assets/publish/user-publish.png');
const activityPublish = require('../../assets/publish/activity-publish.png');

const TabBar = props => (
    <View style={styles.tabBar}>
        {tabNavigatorConfig.map(tabItem => (
            <TouchableOpacity
                activeOpacity={1}
                style={[
                    styles.tabBarItem,
                    tabItem.name === 'Publish' && styles.tabBarItemPublish,
                ]}
                key={tabItem.name}
                onPress={props.onTabItemPress(tabItem)}>
                {tabItem.name === 'Publish' ? (
                    <View>
                        <Image
                            source={{uri: tabItem.iconInactiveUri}}
                            style={styles.tabBarItemIconPublish}
                        />
                        <Text>1{tabItem.label}</Text>
                    </View>
                ) : (
                    <View>
                        <Image
                            source={{
                                uri:
                                    props.current_tab === tabItem.name
                                        ? tabItem.iconActiveUri
                                        : tabItem.iconInactiveUri,
                            }}
                            style={styles.tabBarItemIcon}
                        />
                        <Text
                            style={[
                                styles.tabBarItemLabel,
                                props.current_tab === tabItem.name &&
                                    styles.tabBarItemLabelActive,
                            ]}>
                            {tabItem.label}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        ))}
    </View>
);

const ScreenContainer = ({selected, children}) => {
    const StaticScreen = useMemo(() => children, [children]);
    return (
        <View
            pointerEvents={selected ? 'auto' : 'none'}
            removeClippedSubviews={!selected}
            style={[styles.screen, !selected && styles.screenHidden]}>
            {StaticScreen}
        </View>
    );
};

const mapStateToProps = state => ({current_tab: state.current_tab});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

class MainTab extends Component {
    state = {
        isShowMask: false,
    };
    handleGoUserPublishPage = () => {
        let NavigationAction = NavigationActions.navigate({
            routeName: 'Publish',
            params: {},
        });
        this.props.navigation.dispatch(NavigationAction);
    };
    handleGoPublishPage = () => {
        let NavigationAction = NavigationActions.navigate({
            routeName: 'userPublish',
            params: {},
        });
        this.props.navigation.dispatch(NavigationAction);
    };
    render() {
        const props = this.props;
        const {isShowMask} = this.state;
        const onTabItemPress = tabItem => () => {
            if (tabItem.name === 'Publish') {
                // let NavigationAction = NavigationActions.navigate({
                //     routeName: 'userPublish',
                //     params: {},
                // });
                // props.navigation.dispatch(NavigationAction);
                this.setState({isShowMask: true});
            } else {
                props.actions.switch_tab(tabItem.name);
            }
        };
        const PublishHome = () => {
            return (
                <TouchableOpacity
                    style={styles.mask}
                    activeOpacity={1}
                    onPress={() => {
                        this.setState({isShowMask: false});
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.box}
                        onPress={this.handleGoUserPublishPage}>
                        <Text style={styles.publishTxt}>发布活动</Text>
                        <Image
                            style={styles.publishPic}
                            source={activityPublish}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.box}
                        onPress={this.handleGoPublishPage}>
                        <Text style={styles.publishTxt}>发布动态</Text>
                        <Image style={styles.publishPic} source={userPublish} />
                    </TouchableOpacity>
                </TouchableOpacity>
            );
        };
        return (
            <View style={styles.rootWrapper}>
                <View style={styles.root}>
                    <View style={styles.tabScreen}>
                        {tabNavigatorConfig.map(
                            tabItem =>
                                tabItem.screen && (
                                    <ScreenContainer
                                        {...props}
                                        key={tabItem.name}
                                        selected={
                                            tabItem.name === props.current_tab
                                        }>
                                        <tabItem.screen {...props} />
                                    </ScreenContainer>
                                ),
                        )}
                    </View>
                    {isShowMask && <PublishHome />}
                    <TabBar {...props} onTabItemPress={onTabItemPress} />
                </View>
            </View>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainTab);
