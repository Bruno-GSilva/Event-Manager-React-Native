import Icon from "@expo/vector-icons/FontAwesome5";
import * as React from "react";
import { View, Image, Text } from "react-native";
import { CardEventProps } from "../utils/types/InterfaceCard";

export const CardEvent = (props: CardEventProps) => {
  return (
    <View className="relative w-96 h-64 my-1 justify-end border-2 border-dashed border-slate-100 shadow-md shadow-black">
      <Image
        source={{
          uri: props.image,
        }}
        className="w-full h-full absolute bottom-0 left-0"
        blurRadius={8}
      />
      {props.tagName && (
        <View className="w-32 p-2 justify-center items-center mx-2 border-2 rounded-md  border-amber-500">
          <Text className="text-xl font-bold text-slate-100" numberOfLines={1}>{props.tagName}</Text>
        </View>
      )}
      <View className="w-full flex-row justify-between items-center p-2">
        <View>
          <Text className="w-52 text-white font-bold text-xl" numberOfLines={1}>
            {props.title}
          </Text>
          <Text className="w-52 text-white font-bold" numberOfLines={1}>
            {props.subTitle}
          </Text>
        </View>
        <View className="flex-row-reverse gap-1 items-center m-2">
          <Text className="text-green-500 font-bold">{props.expiredDate}</Text>
          <Icon name="clock" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};
