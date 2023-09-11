import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { CreatedModal } from "../../components/CreatedModal";
import { CardEvent } from "../../components/CardEvent";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { CardRoomProps } from "../../components/CardRoom";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";

interface RoutesParam {
  roomId: number;
}

export default function EventScreen() {
  const { navigate } = useNavigation();
  const [data, setData] = useState<CardRoomProps[]>([]);

  const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();

  useEffect(() => {
    const getEvent = async () => {
      let { data: rooms, error } = await supabase.from("rooms").select("*");
      try {
        if (rooms) {
          console.log("chegou os dados");
          setData(rooms);
        } else {
          return console.log(error);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getEvent();
  }, []);

  if (data.length <= 0) {
    return (
      <View className="flex-1 justify-center items-center bg-slate-800">
        <ActivityIndicator size={32} color={"white"}/>
        <Text className="text-4xl text-white">carregando...</Text>
      </View>
    );
  } else {
    console.log(data);
  }

  return (
    <View className="flex-1 items-center p-2 bg-slate-800">
      <ScrollView>
        {data.map(({ id, event }) =>
          id === params.roomId
            ? event.length !== undefined
              ? event.map((item) => (
                  <CardEvent
                    day={item.day}
                    image={item.image}
                    title={item.title}
                    key={item.image}
                    subTitle={item.subTitle}
                    expiredDate={item.expiredDate}
                    tagName={item.tagName}
                  />
                ))
              : null
            : null
        )}
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
