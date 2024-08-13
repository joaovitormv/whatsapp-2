import {View, Text, Image} from "react-native";
import {styles} from "./style";
import {useAuth} from "../../hook/auth";
import { ButtonInterface } from "../../components/button";

export function Perfil(){
    const {user, signOut} = useAuth()
    const logo = require("../../assets/WhatsApp2.jpg.png")
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <View>
                <Image source={logo}/>
            </View>
            <View>
                <ButtonInterface title="Sair" 
                onPressI={async()=>await signOut()}>
                </ButtonInterface>
            </View>
        </View>
    )
}