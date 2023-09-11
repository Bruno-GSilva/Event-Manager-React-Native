import { createStackNavigator } from "@react-navigation/stack";
import RoomsScreen from "../screens/Rooms/Rooms";
import EventScreen from "../screens/Events/Event";
import CreatedRoomScreen from "../screens/createdRoom";

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
          name="event"
          component={EventScreen}
          options={{ headerTitle: "Eventos",  presentation:"modal"}}
        />
        <Screen
          name="room"
          component={RoomsScreen}
          options={{ headerTitle: "Selecione uma Sala Disponivel" }}
        />
        <Screen
          name="createdRoom"
          component={CreatedRoomScreen}
          options={{ headerTitle: "Criar Sala", presentation:"modal" }}
        />
      </Group>
    </Navigator>
  );
}
