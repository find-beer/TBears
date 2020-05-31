/**
 *  打卡榜单
 */

import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '@views/common/header';
import Card from './card';

export default class PunchList extends React.Component {
    render() {
        return (
            <View>
                <Header title="打卡榜单" />
                <FlatList
                    data={[
                        {name: '李二麻子', number: 123, desc: 'haha'},
                        {name: '李二麻子', number: 123, desc: 'haha'},
                        {name: '李二麻子', number: 123, desc: 'haha'},
                        {name: '李二麻子', number: 123, desc: 'haha'},
                    ]}
                    renderItem={({item, index}) => (
                        <Card key={item.name} data={item} index={index} />
                    )}
                />
            </View>
        );
    }
}
