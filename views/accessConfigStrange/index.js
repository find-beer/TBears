import React, {Component} from 'react';
import {View, Text, Switch} from 'react-native';
import Header from '@views/common/header';
import styles from '@styles/access';

export default class Config extends Component {
    state = {
        text: '',
        isEnabled: true,
    };
    toggleSwitch() {
        this.setState({
            isEnabled: !this.state.isEnabled,
        });
    }
    render() {
        return (
            <View style={styles.configWrap}>
                <Header title="设置" left={null} />
                <View style={styles.configInner}>
                    <View style={styles.configItem}>
                        <Text style={styles.configItemText}>
                            不让TA及TA的关系网好友看
                        </Text>
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={
                                this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleSwitch}
                            value={this.state.isEnabled}
                        />
                    </View>
                    <View style={styles.configItem}>
                        <Text style={styles.configItemText}>
                            不看TA及TA关系网好友动态
                        </Text>
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={
                                this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleSwitch}
                            value={this.state.isEnabled}
                        />
                    </View>
                    <Text style={styles.logoutBtn}>投诉</Text>
                </View>
            </View>
        );
    }
}
