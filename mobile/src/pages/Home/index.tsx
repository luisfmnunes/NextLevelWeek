import React, {useEffect, useState} from 'react';
import {Feather as Icon} from '@expo/vector-icons'
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select';
import api from '../../services/api'

interface IBGEUFRequest{
    sigla: string;
}

interface IBGECityRequest{
    nome: string;
}

const Home = () => {
    const navigation = useNavigation();

    const [ufs,setUfs] = useState<string[]>([]);
    const [cities,setCities] = useState<string[]>([]);
    const [selectedUf,setSelectedUf] = useState<string>('0');
    const [selectedCity, setSelectedCity] = useState<string>('0');

    useEffect(()=> {
        api.get<IBGEUFRequest[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
            const UFs = res.data.map(uf => uf.sigla)
            setUfs(UFs)
        })
    }, [])

    useEffect(() => {
        api.get<IBGECityRequest[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(res => {
            const ufCities = res.data.map(city => city.nome)
            setCities(ufCities)
        })
    },[selectedUf])

    function handleNavigationToPoints(){
        if(selectedUf !== '0' && selectedCity !== '0'){
            navigation.navigate('Points', {uf:selectedUf, city: selectedCity});
        }
        else{
            Alert.alert('Campos Vazios','Por favor, Preencha os campos de cidade e UF.')
        }
    }

    function handleUfsItems(){
        const items = ufs.map(uf => ({key:uf, label: uf, value: uf}))
        return items
    }

    function handleCitiesItems(){
        const items = cities.map(city => ({key:city, label: city, value: city}))
        return items
    }

    return (
       <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
      >
          <ImageBackground 
            source = {require('../../assets/home-background.png')} 
            style={styles.container}
            imageStyle={{ width: 274, height: 368 }}
        >
            <View style = {styles.main} >
                <Image source={require('../../assets/logo.png')} />
                <Text style = {styles.title}>Seu marketplace de coleta de residuos</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>

            <View style={styles.footer}>
                {/* <TextInput style={styles.input} placeholder='Digite a UF' onChangeText={text => setUf(text)} maxLength={2} autoCapitalize='characters'></TextInput>
                <TextInput style={styles.input} placeholder='Digite a Cidade' onChangeText={text => setCity(text)}></TextInput> */}
                <View style={{marginBottom:16}}>
                    <RNPickerSelect 
                        onValueChange = {(value) => {
                            setSelectedUf(value)
                            setSelectedCity('0')
                        }} 
                        items={handleUfsItems()} 
                        placeholder={{label:'Selecione seu Estado',value:'0', color: '#BBB'}}
                    />
                </View>
                <View style={{marginBottom:16}}>
                    <RNPickerSelect onValueChange = {(value) => setSelectedCity(value)} items={handleCitiesItems()} placeholder={{label:'Selecione sua Cidade',value:'0', color: '#BBB'}} value={selectedCity} />
                </View>
                <RectButton style={styles.button} onPress = {handleNavigationToPoints}>
                    <View style = {styles.buttonIcon}>  
                        <Text>
                            <Icon name='arrow-right' color = '#FFF' size={24}></Icon>
                        </Text>
                    </View>
                    <Text style = {styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>
            
        </ImageBackground>
       </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

  const pickerStyle = StyleSheet.create({
      inputIOS:{
        borderRadius: 10
      },
      inputAndroid:{
        borderRadius: 10
      }
  })
export default Home;