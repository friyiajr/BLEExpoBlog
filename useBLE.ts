/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";

import * as ExpoDevice from "expo-device";

import base64 from "react-native-base64";

function useBLE() {
  const [allDevices, setAllDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [color, setColor] = useState("white");

  const connectToDevice = () => {};

  return {
    connectToDevice,
    allDevices,
    connectedDevice,
    color,
  };
}

export default useBLE;
