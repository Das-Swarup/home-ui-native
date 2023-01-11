import React from "react";
import { HStack, Center, Flex, Spacer, Text, NativeBaseProvider, Box, Heading, Input, Icon, VStack, Pressable, ScrollView, Avatar, Button } from "native-base";
import { MaterialIcons, Ionicons, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import { useFonts, Parisienne_400Regular } from '@expo-google-fonts/parisienne';


export default function App() {

  const [selected, setSelected] = React.useState(1);

  let [fontsLoaded] = useFonts({
    Parisienne_400Regular,
  });

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box style={styles.header}>
          <VStack alignSelf="center">
            <Input placeholder="Search" variant="filled" width="250" borderRadius="5" py="1" px="2" fontSize={18} placeholderTextColor="black" color="black" InputLeftElement={<Icon ml="2" size="4" color="black" as={<Ionicons name="ios-search" />} />} />
          </VStack>
          <Flex direction="row" width={350} marginTop={8}>
            <Text fontSize={20}>Announcements</Text>
            <Spacer />
            <Text fontSize={20} color="success.500" underline>View All</Text>
          </Flex>

          <Flex marginTop={8} direction="row" align="center" width={280} backgroundColor="orange.200" padding={3} borderRadius={10}>
            <Icon backgroundColor="yellow.300" borderRadius={5} as={<Feather name="clock" size={40} color="black" />} />
            <Spacer />
            <Flex>
              <Text>Employeers Are Expected To Clock...</Text>
              <Text>1 hour ago</Text>
            </Flex>
          </Flex>

        </Box>
        <Box style={styles.headerTwo} marginTop={2}>
          <Text color="orange.500" style={{ fontFamily: "Parisienne_400Regular", fontSize: 40, }}>Welcome</Text>
          <HStack space={5} flexWrap={'nowrap'} marginLeft={5} marginRight={5}>
          <Center>
              <Flex style={styles.newCard} alignItems="center">
                <Avatar bg="green.500" source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                  
                </Avatar>
                <Text style={styles.headerText}>Megha</Text>
                <Text>UX Designer</Text>
                <Text>Joined Today</Text>
              </Flex>
            </Center>
            <Center>
              <Flex style={styles.newCard} alignItems="center">
                <Avatar bg="green.500" source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                  
                </Avatar>
                <Text style={styles.headerText}>Sahil</Text>
                <Text>UX Designer</Text>
                <Text>Joined Today</Text>
              </Flex>
            </Center>
            <Center>
              <Flex style={styles.newCard} alignItems="center">
                <Avatar bg="green.500" source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                  
                </Avatar>
                <Text style={styles.headerText}>Ravi</Text>
                <Text>UX Designer</Text>
                <Text>Joined Today</Text>
              </Flex>
            </Center>
          </HStack>
        </Box>

        <Box alignItems="center" marginTop={5} marginBottom={5}>
          <Flex direction="row" alignItems="center" width={320}>
        <Icon as={MaterialCommunityIcons} name="clock" size="2xl" color="blue.600" />
        <Spacer/>
        <Flex>
          <Text>03/01/23</Text>
          <Text>Clock In - hh:mm AM</Text>
          <Text>Clock In - hh:mm PM</Text>
        </Flex>
        <Spacer/>
        <Button width={100} backgroundColor="blue.600">Clock In</Button>
        <Spacer/>
        <Icon as={FontAwesome} name="angle-right" size="xl"/>
        </Flex>
        </Box>

        <Box style={styles.teamBox}>
          <Flex direction="row" width={350} alignItems="center">
            <Text fontSize={22} fontWeight={700}>My Team</Text>
            <Spacer />
            <Text fontSize={22} color="success.500" underline>View All</Text>
          </Flex>
          <Flex>
            <Spacer />
            <Flex direction="row" width={300}>
              <Text>Rashmi</Text><Spacer />
              <Text>Trainee</Text><Spacer />
              <Text>Present</Text><Spacer />
            </Flex>
            <Spacer />
            <Flex direction="row" width={300}>
              <Text>Rashmi</Text><Spacer />
              <Text>Trainee</Text><Spacer />
              <Text>Present</Text><Spacer />
            </Flex>
            <Spacer />
            <Flex direction="row" width={300}>
              <Text>Rashmi</Text><Spacer />
              <Text>Trainee</Text><Spacer />
              <Text>Present</Text><Spacer />
            </Flex>
            <Spacer />
            <Flex direction="row" width={300}>
              <Text>Rashmi</Text><Spacer />
              <Text>Trainee</Text><Spacer />
              <Text>Present</Text><Spacer />
            </Flex>
            <Spacer />
            <Flex direction="row" width={300}>
              <Text>Rashmi</Text><Spacer />
              <Text>Trainee</Text><Spacer />
              <Text>Present</Text><Spacer />
            </Flex>
            <Spacer />
            <Flex direction="row" width={300}>
              <Text>Rashmi</Text><Spacer />
              <Text>Trainee</Text><Spacer />
              <Text>Present</Text><Spacer />
            </Flex>
          </Flex>

        </Box>

        <Box style={styles.teamBox} >
          <Flex direction="row" width={350} alignItems="center">
            <Text fontSize={22} fontWeight={700}>Quick Links</Text>
          </Flex>
          <Flex>
            <Spacer />
            <Flex direction="row" width={350}>
              <Text>Holiday Calender</Text><Spacer />
              <Text>Leave Policy</Text><Spacer />
              <Text>Payroll Manual</Text><Spacer />
            </Flex>
          </Flex>
        </Box>

        <Box style={styles.teamBox} >
          <Flex direction="row" width={350} alignItems="center">
            <Text fontSize={22} fontWeight={700}>Celebrations</Text>
          </Flex>
          <Flex>
            <Spacer />
            <Flex direction="row" width={350}>
              <Text>Holiday Calender</Text><Spacer />
              <Text>Leave Policy</Text><Spacer />
              <Text>Payroll Manual</Text><Spacer />
            </Flex>
            <Flex direction="row" width={350}>
              <Text>Holiday Calender</Text><Spacer />
              <Text>Leave Policy</Text><Spacer />
              <Text>Payroll Manual</Text><Spacer />
            </Flex>
            <Flex direction="row" width={350}>
              <Text>Holiday Calender</Text><Spacer />
              <Text>Leave Policy</Text><Spacer />
              <Text>Payroll Manual</Text><Spacer />
            </Flex>
            <Flex direction="row" width={350}>
              <Text>Holiday Calender</Text><Spacer />
              <Text>Leave Policy</Text><Spacer />
              <Text>Payroll Manual</Text><Spacer />
            </Flex>
          </Flex>
        </Box>

        <Box style={styles.teamBox} marginBottom={20}>
          <Flex direction="row" width={350} alignItems="center">
            <Text fontSize={22} fontWeight={700}>My Tasks</Text>
          </Flex>
          <Flex>
            <Spacer />
            <Flex direction="row" width={350}>
              <Text>Attendance</Text><Spacer />
              <Text>17</Text><Spacer />
              <Text>View</Text><Spacer />
            </Flex>
            <Flex direction="row" width={350}>
              <Text>Attendance</Text><Spacer />
              <Text>17</Text><Spacer />
              <Text>View</Text><Spacer />
            </Flex>
            <Flex direction="row" width={350}>
              <Text>Attendance</Text><Spacer />
              <Text>17</Text><Spacer />
              <Text>View</Text><Spacer />
            </Flex>
            <Flex direction="row" width={350}>
              <Text>Attendance</Text><Spacer />
              <Text>17</Text><Spacer />
              <Text>View</Text><Spacer />
            </Flex>
          </Flex>
        </Box>


      </ScrollView>


      {/* Bottom buttons */}

      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center" bottom={0} position="absolute">

        <HStack bg="primary.100" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="success.700" size="xl" />
              <Text bold color="success.700" fontSize="20">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
            <Avatar bg="green.500" source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                  AJ
                </Avatar>
              <Text bold color="success.700" fontSize="12">
                My Space
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name={selected === 3 ? 'notifications' : 'notifications-none'} />}  color="success.700" size="xl" />
              <Text bold color="success.700" fontSize="12">
                Notifications
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>



      {/* Bottom buttons */}
    </NativeBaseProvider>
  );
}