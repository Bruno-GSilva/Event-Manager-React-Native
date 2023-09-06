import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/Home";
import RoomsScreen from "../screens/Rooms/Rooms";

const { Group, Navigator, Screen } = createStackNavigator();

export default function NavigationStack() {
  return (
    <Navigator initialRouteName="room">
      <Group
        screenOptions={{
          headerTintColor: "#ffffff",
          headerStyle: { backgroundColor: "rgb(30 41 59)" },
        }}
      >
        <Screen
          name="home"
          component={HomeScreen}
          options={{ headerTitle: "Eventos",  presentation:"modal"}}
        />
        <Screen
          name="room"
          component={RoomsScreen}
          options={{ headerTitle: "Selecione uma Sala Disponivel" }}
        />
      </Group>
    </Navigator>
  );
}
