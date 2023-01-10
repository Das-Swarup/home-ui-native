import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import styles from './styles';


export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.header}>Hello world</Box>
    </NativeBaseProvider>
  );
}