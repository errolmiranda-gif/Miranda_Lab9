import './global.css';
import { Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-slate-50'>
        <TopBar />
        <ScrollView
          className='flex-1'
          contentContainerClassName='p-6'
        >
          <Text className='text-center text-3xl font-bold text-slate-900'>
            Hello, World!
          </Text>
          <Text className='mt-2 text-center text-base text-slate-600'>
            I&apos;m Errol Miranda
          </Text>
          <Pressable className='mt-6 items-center rounded-lg bg-sky-600 py-3 active:opacity-80'>
            <Text className='font-bold text-white'>Get Started</Text>
          </Pressable>
          <Pressable className='mt-3 items-center rounded-lg border border-sky-600 py-3 active:opacity-80'>
            <Text className='font-bold text-sky-600'>Learn More</Text>
          </Pressable>
          <Pressable className='mt-3 items-center rounded-lg bg-red-500 py-3 active:opacity-80'>
            <Text className='font-bold text-white'>Delete</Text>
          </Pressable>
        </ScrollView>
        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}