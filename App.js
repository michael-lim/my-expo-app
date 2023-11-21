import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/index.js';

// import { NativeWindStyleSheet } from "nativewind";
// NativeWindStyleSheet.setOutput({
//   default: "native",
// });



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />

  {/* <View className="flex-1 items-center justify-center bg-red-400 ">
      <Text className="text-white text-5xl">성공했다!</Text>
      </View> */}
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
