import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home';
import Header from '../../components/common/Header/Header';
import { Image } from 'react-native';
import { WithAlcoholIcon } from '../../assets/icons';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
            screenOptions={{
                header: ({ navigation, route, options }) => <Header navigation={navigation} style={options.headerStyle} />,
                headerStyle: {
                    backgroundColor: 'black'
                }
            }}
        >
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    drawerLabel: 'Cocktails with alcohol',
                    drawerActiveTintColor: 'black',
                    drawerIcon: ({ focused, color, size }) => <Image source={WithAlcoholIcon} />
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
        </DrawerContentScrollView>
    )
}