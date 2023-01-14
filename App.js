import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Allitems from './components/allitems';
import Display from './components/display';
import Home from './components/home';
import { View, Text } from "react-native"

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>


        <Drawer.Navigator>
          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="allitems" component={Allitems} />
          <Drawer.Screen name="dislay" component={Display} />

        </Drawer.Navigator>

      </NavigationContainer>

    </SafeAreaProvider>
  );
}
export default MyDrawer
