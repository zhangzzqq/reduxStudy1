import React from "react";
import { View, Button, Text } from "react-native";

export default self => (
  <View>
    <Text>home2</Text>
    <Button title="goHome1" onPress={() => self.navigation.navigate("ScreenSome1")} />
  </View>
);
