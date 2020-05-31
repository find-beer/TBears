import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {scaleSize} from '@utils/scaleUtil';

export default props => {
    return (
        <View style={styles.container}>
            {props.data.map(item => {
                return <ImageBackground source={item} style={styles.photo} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: scaleSize(54),
    },
    photo: {
        width: scaleSize(289),
        height: scaleSize(379),
        marginRight: scaleSize(53),
    },
});
