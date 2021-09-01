import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Catalog, Dashboard, Home, Login, ProductDetails } from '../pages';
import { NavBar } from '../components';
import { Text } from 'react-native';
import { colors, nav } from '../styles';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>DsCatalog</Text>

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Login" component={Login} />
            {/* Dashboard administrativo*/}
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
};

export default Routes;