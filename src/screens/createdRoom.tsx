import { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "../components/UI/button";
import { supabase } from "../lib/supabase";

export default function CreatedRoomScreen() {
  const [roomName, setRoomName] = useState("");
  
  const createdEvent = async () => {
    try {
      const { error } = await supabase
        .from("rooms")
        .insert({ room_name: roomName });

      console.log(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1 justify-center items-start bg-slate-800 px-8">
      <Text className="text-2xl text-white">Nome da sala:</Text>
      <TextInput
        className="border-2 border-white w-full my-2 px-2 py-1 text-white"
        onChangeText={(e) => setRoomName(e)}
      />
      <Text className="text-2xl text-white">Imagem da sala:</Text>
      <TextInput className="border-2 border-white w-16 h-16 my-2 px-2 py-1 text-white" />
      {/* <Text className="text-2xl text-white">Descrição:</Text>
      <TextInput className="border-2 border-white w-full h-64 my-2 px-2 py-1 text-white" /> */}
      <Button
        title="Criar"
        className="w-full my-2 border-white"
        styleText="text-white text-center font-bold text-2xl"
        onPress={createdEvent}
      />
    </View>
  );
}
