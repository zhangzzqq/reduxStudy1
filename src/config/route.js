import React from "react";
import { StackNavigator } from "react-navigation";

// 路由文件
import ScreenHome from "../screens/ScreenHome";
import ScreenSome1 from "../screens/ScreenSome1";
import ScreenSome2 from "../screens/ScreenSome2";

// 设置路由
const AppNavigator = StackNavigator(
  {
    ScreenHome: {
      screen: ScreenHome
    },
    ScreenSome1: {
      screen: ScreenSome1

    },
    ScreenSome2: {
      screen: ScreenSome2

    },
  },
  // { initialRouteName: "ScreenHome", headerMode: "screen" }
);

export default () => <AppNavigator />;
