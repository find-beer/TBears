import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '@styles/dynamicTab';

export default class DynamicTab extends Component {
    state = {
        currentTab: 'activity',
    };
    handleChangeTab() {}
    render() {
        return (
            <View style={styles.tabWrapper}>
                <View style={styles.tabHeader}>
                    <View
                        style={styles.tabItem}
                        onPress={() => {
                            this.state.currentTab = 'activity';
                        }}>
                        <Text
                            style={
                                this.state.currentTab === 'activity'
                                    ? [styles.tabText, styles.tabTextActive]
                                    : styles.tabText
                            }>
                            活动
                        </Text>
                        {this.state.currentTab === 'activity' ? (
                            <View style={styles.tabBar} />
                        ) : null}
                    </View>
                    <View
                        style={styles.tabItem}
                        onPress={() => {
                            this.state.currentTab = 'dynamic';
                        }}>
                        <Text
                            style={
                                this.state.currentTab === 'dynamic'
                                    ? [styles.tabText, styles.tabTextActive]
                                    : styles.tabText
                            }>
                            动态
                        </Text>
                        {this.state.currentTab === 'dynamic' ? (
                            <View style={styles.tabBar} />
                        ) : null}
                    </View>
                </View>
                <ScrollView />
            </View>
        );
    }
}
