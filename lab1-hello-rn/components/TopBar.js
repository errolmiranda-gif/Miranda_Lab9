import { View, Text } from 'react-native';

export default function TopBar() {
  return (
    <View className='flex-row items-center justify-between bg-sky-600 px-4 py-3'>
      <Text className='text-xl font-bold text-white'>Miranda Mobile</Text>
      <Text className='text-2xl text-white'>☰</Text>
    </View>
  );
}