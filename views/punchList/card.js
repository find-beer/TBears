import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {scaleSize, scaleFont} from '@utils/scaleUtil';

export default class Card extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.base}>
                    <View style={styles.left}>
                        <ImageBackground
                            source={images.order[this.props.index]}
                            style={styles.orderimg}>
                            {![0, 1, 2].includes(this.props.index) && (
                                <Text style={styles.ordertext}>
                                    {this.props.index + 1}
                                </Text>
                            )}
                            {![0, 1, 2].includes(this.props.index) && (
                                <View style={styles.spliteline(30)} />
                            )}
                        </ImageBackground>

                        <ImageBackground
                            source={images.headshot}
                            style={styles.headshot}
                        />

                        <Text style={styles.name}>{this.props.data.name}</Text>
                    </View>

                    <Text style={styles.number}>
                        共打卡 {this.props.data.number} 次
                    </Text>
                </View>

                <Text numberOfLines={2} style={styles.desc}>
                    {this.props.data.desc}
                </Text>

                <View style={styles.spliteline()} />
            </View>
        );
    }
}

const images = {
    order: [
        require('../../assets/punchList/order1.png'),
        require('../../assets/punchList/order2.png'),
        require('../../assets/punchList/order3.png'),
    ],
    headshot: require('../../assets/punchList/headshot.png'),
};

const styles = StyleSheet.create({
    container: {
        paddingTop: scaleSize(42),
        paddingBottom: scaleSize(42),
        paddingLeft: scaleSize(54),
        paddingRight: scaleSize(54),
    },
    base: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleSize(21),
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderimg: {
        width: scaleSize(49),
        height: scaleSize(79.8),
        marginRight: scaleSize(30),
        alignItems: 'center',
    },
    ordertext: {
        fontSize: scaleSize(36),
        color: '#564F5F',
    },
    headshot: {
        width: scaleSize(84),
        height: scaleSize(84),
        marginRight: scaleSize(18),
    },
    name: {
        fontSize: scaleFont(42),
        color: '#564F5F',
        width: scaleFont(500),
    },
    number: {
        fontSize: scaleFont(32),
        color: '#897FDD',
    },
    desc: {
        width: '88%',
        marginLeft: scaleSize(79),
        fontSize: scaleFont(36),
        color: '#999999',
        marginBottom: scaleSize(42),
    },
    spliteline: width => ({
        height: scaleSize(1),
        width: width ? scaleSize(width) : '100%',
        backgroundColor: '#999999',
    }),
});
