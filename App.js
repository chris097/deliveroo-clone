import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-700 text-center text-4xl">Hello Fam!</Text>
      <StatusBar />
    </View>
  );
}

