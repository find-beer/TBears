import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import routeConfig from '@router/routeConfig';
import stackNavigatorConfig from '@router/stackNavigatorConfig';
import store from '@store/index';

const AppContainer = createAppContainer(
    createStackNavigator(routeConfig, stackNavigatorConfig),
);

export default () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);
