import { View, Text, Pressable } from 'react-native';

export default function NavBar() {
  return (
    <View className='flex-row border-t border-slate-200 bg-white'>
      <Pressable className='flex-1 items-center py-2'>
        <Text className='text-lg'>🏠</Text>
        <Text className='text-xs text-slate-500'>Home</Text>
      </Pressable>
      <Pressable className='flex-1 items-center py-2'>
        <Text className='text-lg'>🔍</Text>
        <Text className='text-xs text-slate-500'>Search</Text>
      </Pressable>
      <Pressable className='flex-1 items-center py-2'>
        <Text className='text-lg'>👤</Text>
        <Text className='text-xs font-bold text-sky-600'>Profile</Text>
      </Pressable>
      <Pressable className='flex-1 items-center py-2'>
        <Text className='text-lg'>⚙️</Text>
        <Text className='text-xs text-slate-500'>Settings</Text>
      </Pressable>
    </View>
  );
}