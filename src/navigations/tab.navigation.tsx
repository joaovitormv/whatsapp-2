import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Mensagem} from "../SCREENS/mensagem"
import { Perfil } from '../SCREENS/perfil';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import { MessageNavigation } from './message.navigation';

type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>

export type TabTypes = {
    navigation: TabScreenNavigationProp
}

export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabParamList>()
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveBackgroundColor: "black",
                tabBarActiveTintColor: "white",
                headerShown: false,
                tabBarInactiveBackgroundColor: "black",
                tabBarInactiveTintColor: "white",
            }}
        >
            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: ()=>(
                        <Ionicons name="person" size={24} color={"white"}/>
                    ),
                }}
            />
            <Tab.Screen name='Mensagem' component={Mensagem}
                options={{
                    tabBarIcon: ()=>(
                        <AntDesign name="message1" size={24} color={"white"}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}