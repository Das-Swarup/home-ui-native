import React from "react";
import { NativeBaseProvider, Box, Heading, Input } from "native-base";
import styles from './styles';


export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.header}>
        <Input style={styles.search} placeholder="Search People & Places" />
      </Box>
    </NativeBaseProvider>
  );
}