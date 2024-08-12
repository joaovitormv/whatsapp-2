import {View, Text} from "react-native";
import {styles} from "./style";
import {useAuth} from "../../hook/auth";
import { ButtonInterface } from "../../components/button";

export function Perfil(){
    const {user, signOut} = useAuth()
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <View>
                {/* colocar alguma imagem */}
            </View>
            <View>
                <ButtonInterface title="Sair" 
                onPressI={async()=>await signOut()}>
                </ButtonInterface>
            </View>
        </View>
    )
}