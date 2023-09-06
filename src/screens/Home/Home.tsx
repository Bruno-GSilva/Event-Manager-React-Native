import { ScrollView, Text, View } from "react-native";
import { CreatedModal } from "../../components/CreatedModal";
import { CardEvent } from "../../components/CardEvent";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { navigate } = useNavigation()
  return (
    <View className="flex-1 items-center p-2 bg-slate-800">
      <ScrollView>
        <CardEvent
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/10/Circo-Voador.jpg?w=876&h=484&crop=1F"
          title="Meu primeiro evento"
          subTitle="criado em native"
          expiredDate="12/25 às 12h45"
          tagName="Bastidores"
        />
        <CardEvent
          image="https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2023/01/pedrosampaio_caraguatashow-4584-scaled.jpg"
          title="Meu primeiro evento"
          subTitle="criado em native"
          expiredDate="12/25 às 12h45"
          tagName="VIP"
        />
        <CardEvent
          image="https://mapacultural.secult.ce.gov.br/files/agent/10282/sana-750x375.jpg"
          title="Meu primeiro evento"
          subTitle="criado em native"
          expiredDate="12/25 às 12h45"
          tagName="Bastidores"
        />
      </ScrollView>
      <CreatedModal
        sizeIcon={26}
        color="bg-sky-500"
        colorIcon="white"
        firstIconName="tasks"
        labelIconFirst="new event"
        firstAction={() => navigate("room")}
        apresentationIcon="pen"
        apresentationColor="bg-sky-500"
      />
    </View>
  );
}
