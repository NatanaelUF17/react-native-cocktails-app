import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../../../components/common/header/Header';
import { Text, View } from 'react-native';
import DrawerMenuIcon from './DrawerMenuIcon';
import DrawerLabelOption from './DrawerLabelOption';
import StackNavigator from '../stack/StackNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black'
                },
                header: ({ navigation, route, options }) =>
                    <Header
                        navigation={navigation}
                        style={options.headerStyle}
                    />,
            }}
        >
            <Drawer.Screen
                name='StackNavigator'
                component={StackNavigator}
                options={{
                    drawerLabel: ({ focused, color }) =>
                        <DrawerLabelOption
                            text='Cocktails with alcohol'
                            color={color}
                            focused={focused}
                        />,
                    drawerActiveTintColor: '#0BC9D7',
                    drawerIcon: ({ focused, color, size }) =>
                        <DrawerMenuIcon
                            name='Cocktails with alcohol'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                }}
            />
            <Drawer.Screen
                name='Test1'
                component={Test1}
                options={{
                    drawerLabel: ({ focused, color }) =>
                        <DrawerLabelOption
                            text='Non-alcoholic cocktails'
                            color={color}
                            focused={focused}
                        />,
                    drawerActiveTintColor: '#0BC9D7',
                    drawerIcon: ({ focused, color, size }) =>
                        <DrawerMenuIcon
                            name='Non-alcoholic cocktails'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                }}
            />
            <Drawer.Screen
                name='Test2'
                component={Test2}
                options={{
                    drawerLabel: ({ focused, color }) =>
                        <DrawerLabelOption
                            text='Favorites cocktails'
                            color={color}
                            focused={focused}
                        />,
                    drawerActiveTintColor: '#0BC9D7',
                    drawerIcon: ({ focused, color, size }) =>
                        <DrawerMenuIcon
                            name='Favorites cocktails'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                }}
            />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}>
                <DrawerItem label='Close drawer' onPress={() => props.navigation.closeDrawer()} />
                <DrawerItem label='Toggle drawer' onPress={() => props.navigation.toggleDrawer()} />
            </DrawerItemList>
            <View style={{ height: 700, marginLeft: 31, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                <Text style={{ fontFamily: 'Raleway' }}>Version 1.0</Text>
            </View>
        </DrawerContentScrollView >
    )
}

function Test1() {
    return (
        <Text style={{ textAlign: 'center' }}>Hello from Non-alcoholic cocktails</Text>
    );
}
function Test2() {
    return (
        <Text style={{ textAlign: 'center' }}>Hello from favorites cocktails</Text>
    );
}