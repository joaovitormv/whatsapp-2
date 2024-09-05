import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer'
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { TabNavigation } from './tab.navigation';
import { Camera } from '../SCREENS/camera';
import {Imagens} from '../SCREENS/Imagens';
import { QrCode } from '../SCREENS/QrCode';

type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
    QrCode: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation : DrawerScreenNavigationProp
}

export function DrawerNavigation(){
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white",
            drawerStyle:{
                backgroundColor: "black",
            },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white"
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: "Perfil",
                    drawerIcon:()=>(
                        <Ionicons name="person" size={24} color="white"/>
                    ),  
                }}
            />

            <Drawer.Screen name='Camera' component={Camera}
                options={{
                    drawerIcon: () =>(
                        <Ionicons name="camera" size={24} color={"white"}/>
                    ),
                }}
            />

            <Drawer.Screen name='Imagem' component={Imagens}
                options={{
                    drawerIcon:()=>(
                        <Ionicons name="image" size={24} color={"white"}/>
                    ),
                }}
            />

            <Drawer.Screen name='QrCode' component={QrCode}
                options={{
                    drawerIcon: ()=>(
                        <MaterialIcons name='qr-code-scanner' color={"white"}/>
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}