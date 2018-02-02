import React from "react";
import { View, Button, Text } from "react-native";

export default self => (
  <View>
    <Text>home1</Text>
    <Button title="goHome2" onPress={() => self.navigation.navigate("ScreenSome2")} />
  </View>
);
