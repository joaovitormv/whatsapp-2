import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import {MaterialIcons, Entypo, Ionicons} from "@expo/vector-icons";
import {styles} from "./style"
import { LoginTypes } from '../../navigations/login.navigation';
import { ButtonInterface } from '../../components/button';
import {apiUser} from '../../services/data'
import { AxiosError } from 'axios';
import {useAuth} from '../../hook/auth';




export interface IRegister{
    name?: string
    email?: string
    password?: string
}

interface IError {
    errors: {
        field: string, 
        message: string, 
        rule: string
    }[]
}

export function Register({navigation}: LoginTypes){
    const [data, setData] = useState<IRegister>();
    const {setLoading} = useAuth();
    async function handleRegister(){
        if (data?.email && data.name && data.password){
            setLoading(true)
            try{
                console.log(data)
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!!!`)
                navigation.navigate("Login")
            }catch(error){
                const err = error as AxiosError
                console.log(err)
                const msg = err.response?.data === 'string' ? err.response.data: 'Erro desconhecido';
                Alert.alert(msg)
            }
            setLoading(false)
        }else{
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleGoBack(){
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister){
        setData({...data, ...item});
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text>Logo</Text>
                <View style={styles.formRow}>
                    <Ionicons name="person" style={styles.icon}/>
                    <TextInput
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        placeholder='Nome'
                        onChangeText={(i) => handleChange({name: i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon}/>
                    <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(i) => handleChange({email: i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="key" style={styles.icon}/>
                    <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Senha'
                    autoCapitalize='none'
                    secureTextEntry= {true}
                    onChangeText={(i) => handleChange({password: i})}
                    />
                </View>
                <ButtonInterface title="REGISTER" onPressI={handleRegister}/>
                <ButtonInterface title="VOLTAR" onPressI={handleGoBack}/>
            </KeyboardAvoidingView>

        </View>
    )
}