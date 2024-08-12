import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text, TextInput, Alert} from 'react-native';
import {MaterialIcons, Entypo} from "@expo/vector-icons";
import { styles } from './style';
import {ButtonInterface} from "../../components/button"
import {LoginTypes} from "../../navigations/login.navigation"
import {useAuth} from '../../hook/auth';
import {AxiosError} from 'axios';


export interface IAuthenticate{
    email?: string;
    password?: string;
}
export function Login({navigation}: LoginTypes){
    const [data, setData] = useState<IAuthenticate>();
    const {signIn, setLoading} = useAuth()
    async function handleSignIn(){
        if (data?.email && data.password){
            setLoading(true)
            try{
                await signIn(data)
            }catch(error){
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        }else{
            Alert.alert("Preencha todos os campos!!!!");
        }
    }
    function handleRegister(){
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate){
        setData({...data, ...item});
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View>
                    {/* logo */}
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon}/>
                    <TextInput placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(i) => handleChange({email:i})}>             
                    </TextInput>
                </View>
                <View style={styles.formRow}>
                    <Entypo name="key" style={styles.icon}/>
                    <TextInput
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={(i) => handleChange({password: i})}
                    />
                </View>
                <ButtonInterface title='LOGIN' onPressI={handleSignIn}/>
                <Text style={styles.text}>Você não possui uma conta?</Text>
                <ButtonInterface title='REGISTRE-SE AGORA' onPressI={handleRegister}/>
            </KeyboardAvoidingView>
        </View>
    );
}