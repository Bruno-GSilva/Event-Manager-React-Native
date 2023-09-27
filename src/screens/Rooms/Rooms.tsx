import { Pressable, ScrollView, Text, View } from "react-native";
import { CardRoom } from "../../components/CardRoom";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { CreatedModal } from "../../components/CreatedModal";
import { CardRoomProps } from "../../utils/types/InterfaceCard";

export default function RoomsScreen() {
  const [selectEvent, setSelectEvent] = useState("");
  const [data, setData] = useState<CardRoomProps[] | null>();

  const readEvent = async () => {
    let { data: rooms, error } = await supabase.from("rooms").select("*");
    setData(rooms);
    console.log(rooms);
  };

  const { navigate } = useNavigation();

  useEffect(() => {
    readEvent();
    console.log(selectEvent);
  }, [selectEvent]);

  return (
    <View className="flex-1 justify-center items-center bg-slate-800">
      <View className="flex-row gap-2 p-2 my-2">
        <Pressable
          className="px-8 py-4 border-2 border-white active:bg-emerald-500"
          onPress={() => setSelectEvent("2")}
        >
          <Text className="text-white ">02</Text>
        </Pressable>
        <Pressable
          className="px-8 py-4 border-2 border-white active:bg-emerald-500"
          onPress={() => setSelectEvent("23")}
        >
          <Text className="text-white ">23</Text>
        </Pressable>
        <Pressable
          className="px-8 py-4 border-2 border-white active:bg-emerald-500"
          onPress={() => setSelectEvent("31")}
        >
          <Text className="text-white ">31</Text>
        </Pressable>
      </View>

      <View className="w-full flex-1 flex-wrap items-center p-2">
        {selectEvent &&
          data?.map(({ event, ...rooms }) => (
            <CardRoom
              id={0}
              key={rooms.id}
              room_name={rooms.room_name}
              image={rooms.image}
              status={false}
              num_events={0}
              event={event}
            />
          ))}
      </View>

      <CreatedModal
        sizeIcon={26}
        color="bg-sky-500"
        colorIcon="white"
        firstIconName="door-open"
        labelIconFirst="Nova sala"
        firstAction={() => navigate("createdRoom")}
        apresentationIcon="plus"
        apresentationColor="bg-sky-500"
      />
    </View>
  );
}
