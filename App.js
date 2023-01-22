import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Allitems from './components/allitems';
import Display from './components/display';
import Home from './components/home';
import { View, Text } from "react-native";
import Logoic from './components/logopic';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>


        <Drawer.Navigator>
          <Drawer.Screen name="home" component={Home}
            options={{
              title: 'Home', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }}
          />
          <Drawer.Screen name="allitems" component={Allitems} />
          <Drawer.Screen name="dislay" component={Display}
            options={{

              title: 'Reservations', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }} />

        </Drawer.Navigator>

      </NavigationContainer>

    </SafeAreaProvider>
  );
}
export default MyDrawer
