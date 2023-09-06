import { Image, Text, TouchableOpacity } from "react-native";

interface CardRoomProps {
  roomName: string;
  status: "Disponivel" | "Ocupado" | "Em Manutenção";
  route?: ()=> void;
}

export const CardRoom = (props: CardRoomProps) => {
  return (
    <TouchableOpacity
      className={`w-48 m-1  aspect-square justify-center items-center border-2 border-transparent rounded-lg overflow-hidden ${
        props.status === "Disponivel"
          ? ""
          : props.status === "Ocupado"
          ? "opacity-30"
          : "text-amber-500"
      }`}
      onPress={props.route}
    >
      <Image
        source={{
          uri: "https://sm.ign.com/ign_br/screenshot/default/unnamed_5kh8.jpg",
        }}
        className="w-full h-full absolute bottom-0 left-0"
        blurRadius={10}
      />
      <Text
        className="text-white font-bold text-4xl rounded-md"
        numberOfLines={1}
      >
        {props.roomName}
      </Text>
      <Text
        className={`text-center font-bold text-2xl bg-[#00000060] p-1 rounded-md ${
          props.status === "Disponivel"
            ? "text-green-500"
            : props.status === "Ocupado"
            ? "text-rose-500"
            : "text-amber-500"
        }`}
        numberOfLines={2}
      >
        {props.status === "Disponivel"
          ? "Disponivel"
          : props.status === "Ocupado"
          ? "Ocupado"
          : "Em Manutenção"}
      </Text>
    </TouchableOpacity>
  );
};
