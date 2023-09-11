import { Image, Text, TouchableOpacity, View } from "react-native";
import { CardEventProps } from "./CardEvent";

export interface CardRoomProps {
  id: number;
  room_name: string;
  image: string;
  status: boolean;
  route?: () => void;
  num_events: number;
  event: CardEventProps[];
}

export const CardRoom = (props: CardRoomProps) => {
  return (
    <TouchableOpacity
      className={`w-48 m-1  aspect-square justify-center items-center border-2 border-transparent rounded-lg overflow-hidden ${
        props.status ? "" : "opacity-30"
      }`}
      onPress={props.route}
    >
      <Image
        source={{
          uri: props.image,
        }}
        className="w-full h-full absolute bottom-0 left-0"
        blurRadius={5}
      />
      <Text
        className="text-white font-bold text-4xl rounded-md"
        numberOfLines={1}
      >
        {props.room_name}
      </Text>
      <Text
        className={`text-center font-bold text-2xl p-1 rounded-md ${
          props.status ? "text-green-500" : "text-rose-500"
        }`}
        numberOfLines={2}
      >
        {props.status ? "Disponivel" : "Ocupado"}
      </Text>
      <View className="absolute bottom-0 right-0 p-2">
        <Text className="text-white font-extrabold">
          {props.num_events} / 100
        </Text>
      </View>
    </TouchableOpacity>
  );
};
