import React from 'react';
import { Text, View, Image } from 'react-native';

const Introducao = ({ nome, descricao, descricaoLonga, imagemSrc }) => {
  return (
    <View>
      <Image
        source={imagemSrc}
        className='w-96 mr-8 h-72 mt-2'
        resizeMode="cover"
      />
      <Text className='text-center text-3xl mt-4'>
        {nome}
      </Text>
      <Text className='text-center text-lg text-gray-600 mt-1'>
        {descricao}
      </Text>
      <Text className='text-justify text-lg text-gray-600 mt-12'>
        {descricaoLonga}
      </Text>
    </View>
  );
};

export default Introducao;