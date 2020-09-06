import React, {useMemo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '@actions/index.js';
import tabNavigatorConfig from '@router/tabNavigatorConfig';
import styles from '@styles/mainTab';

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
                    <Image
                        source={{uri: tabItem.iconInactiveUri}}
                        style={styles.tabBarItemIconPublish}
                    />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const onTabItemPress = tabItem => () => {
        tabItem.name !== 'Publish' && props.actions.switch_tab(tabItem.name);
    };
    return (
        <View style={styles.rootWrapper}>
            <View style={styles.root}>
                <View style={styles.tabScreen}>
                    {tabNavigatorConfig.map(tabItem => (
                        <ScreenContainer
                            {...props}
                            key={tabItem.name}
                            selected={tabItem.name === props.current_tab}>
                            <tabItem.screen {...props} />
                        </ScreenContainer>
                    ))}
                </View>
                <TabBar {...props} onTabItemPress={onTabItemPress} />
            </View>
        </View>
    );
});
