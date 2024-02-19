import React from 'react';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './components/card';
import Introducao from './components/introducao';

const projetosNicoly = [
  {
    titulo: 'C3News',
    descricao: 'Projeto desenvolvido com HTML 5, CSS e JavaScript. Neste projeto, realizamos um portal de notícias 100% responsivo para dispositivos móveis e web. Havia também uma to-do list para a publicação de matérias.',
    imagem: require('./assets/c3news.png'),
  },
  {

    titulo: 'OctoPlay',
    descricao: 'Projeto desenvolvido com React, integrando frontend e backend com NodeJS. Onde era possível cadastrar, editar, excluir e editar jogos. Além disso, era possível realizar login e cadastro de usuários.',
    imagem: require('./assets/octoplay.png'),
  },

];

export default function App() 


{

  const [verProjetosNicoly, setVerProjetosNicoly] = useState(false);
  return (
    <View className='p-0' >
      <ScrollView>

        <View className='bg-[#88743ca2] p-4 mb-0'>
          <Text className='text-black text-3xl mt-4 text-center'>📚 Sobre Nicoly 🎨</Text>
        </View>
        <View className='flex-1 mt-0 -ml-2 bg-[#88743ca2]'>
          <View className='p-4'>
            <Text className='text-2xl font-bold ml-2 text-gray-800'>
              Tecnologias:
            </Text>
            <View className='bg-[#000000] rounded-3xl h-1 w-2/5 mb-8' >
            </View>
            <View className='flex-row items-center justify-between'>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <AntDesign name="HTML" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>HTML</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome name="css3" size={24} color="black" />

                <Text className='text-lg text-gray-600 ml-2'>CSS</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome5 name="js" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>JavaScript</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome6 name="react" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>React</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome5 name="node" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>NodeJS</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <MaterialCommunityIcons name="tailwind" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>Tailwind</Text>
              </View>
            </View>
          </View>
        </View>
        <View>

        </View>

       <View >
        
          <Introducao
            nome='Nicoly Val'
            descricao='Desenvolvedora de Sistemas, 3° semestre, 16 anos'
            descricaoLonga='Sou Nicoly, natural de Campinas-SP, e atualmente conto com 16 anos de idade. Encontro-me matriculada no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonado por litaratura e por tudo que ela pode nos proporcionar e musicas instrumentais, e por isso, estou sempre buscando inateragir mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos.'
            imagemSrc={require('./assets/nicolyval.jpg')}
          />
          
          <TouchableOpacity className='bg-[#88743ca2] p-2 rounded-md mt-4' onPress={() => setVerProjetosNicoly(!verProjetosNicoly)}>
            <Text className='text-white text-center'>Conheça os projetos</Text>
          </TouchableOpacity>
       
        {verProjetosNicoly && (
          <View className="p-1 w-full mx-auto rounded-md">
            {projetosNicoly.map((projeto, index) => (
              <Card
                key={index}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
              />
            ))}
          </View>
        )}
       </View>
       <StatusBar style="auto" />
       
      
      </ScrollView>
  
    </View>
  );
}
