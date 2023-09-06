import { ScrollView, Text, View } from "react-native";
import { CardRoom } from "../../components/CardRoom";
import { CreatedModal } from "../../components/CreatedModal";
import { useNavigation } from "@react-navigation/native";

export default function RoomsScreen() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-slate-800">
      <View className="w-full flex-1 flex-wrap items-center p-2">
        <CardRoom route={()=> navigate("home")} roomName="sala 1" status="Disponivel" />
        <CardRoom roomName="sala 2" status="Ocupado" />
        <CardRoom roomName="sala 3" status="Em Manutenção" />
        <CardRoom roomName="sala 4" status="Ocupado" />
        <CardRoom roomName="sala 5" status="Em Manutenção" />
        <CardRoom route={()=> navigate("home")} roomName="sala 6" status="Disponivel" />
      </View>
    </View>
  );
}
