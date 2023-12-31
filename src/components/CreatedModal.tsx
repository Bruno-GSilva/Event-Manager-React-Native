import * as React from "react";
import { View, Pressable } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { CreatedModalProps } from "../utils/types/interfaceCreatedModal";
import { IconDrawer } from "./UI/Icon";

export const CreatedModal = (props: CreatedModalProps) => {
  const [modalEvents, setModalEvents] = React.useState<boolean>(false);
  return (
    <>
      <View
        className={`z-30 absolute bottom-0 w-screen ${
          modalEvents ? "h-screen" : "h-0"
        }`}
      >
        {modalEvents && (
          <Pressable
            className={`z-30 absolute w-full h-full bg-[#00000070]`}
            onPress={() => setModalEvents(false)}
          >
            <View className="z-40 absolute bottom-0 right-0 mx-5 my-24">
              {props.firstIconName && (
                <Animated.View entering={SlideInDown.delay(350)}>
                  <IconDrawer
                    colorIcon={props.colorIcon}
                    nameIcon={props.firstIconName}
                    sizeIcon={props.sizeIcon}
                    label={props.labelIconFirst}
                    colorButton={props.color ? props.color : "bg-black"}
                    onPress={props.firstAction}
                  />
                </Animated.View>
              )}

              {props.secondIconName && (
                <Animated.View entering={SlideInDown.delay(150)}>
                  <IconDrawer
                    colorIcon={props.colorIcon}
                    nameIcon={props.secondIconName}
                    sizeIcon={props.sizeIcon}
                    label={props.labelIconSecond}
                    colorButton={props.color ? props.color : "bg-black"}
                    onPress={props.secondAction}
                  />
                </Animated.View>
              )}
            </View>
          </Pressable>
        )}
        <View className="z-40 absolute bottom-0 right-0 mx-5 my-7">
          <IconDrawer
            colorIcon={props.colorIcon}
            nameIcon={!modalEvents ? props.apresentationIcon! : "times"}
            sizeIcon={props.sizeIcon}
            onPress={() => setModalEvents(!modalEvents)}
            colorButton={
              props.apresentationColor ? props.apresentationColor : "bg-black"
            }
          />
        </View>
      </View>
    </>
  );
};
