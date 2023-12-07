import { Avatar, Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useFetchUser } from "../../features/user/useFetchUser.hooks";
import { useParams } from "react-router-dom";
import { IFollow, IProfile } from "../../interface/user.interface";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useFetchThreads } from "../../features/threads/hooks/useFetchThread";
import { IThreads } from "../../interface/thread.interface";
import FollowItem from "../../features/threads/components/FollowItem";
import ThreadProfile from "../../features/profile/component/ThreadProfile";
import Navbar from "../../components/Navbar";

export default function ProfilePage() {
  const params = useParams();
  const idParams = Number(params.id);

  const { data } = useFetchUser(idParams);
  const user: IProfile = data;

  const { data: dataThreads } = useFetchThreads();
  const threads = dataThreads?.data.data;
  const { data: dataUser } = useFetchUser(idParams);

  return (
    <Grid gridTemplateColumns="300px 1fr" bg="blackAlpha.700" minH="100vh">
      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Navbar />
      </GridItem>

      {/* <GridItem>
      <Box px={6} py={8}>
          <HStack justify="space-evenly">
            <Box textAlign="center">
              <Avatar size="2xl" src={user?.user.profile_picture} />
              <Text mt={2} color="white" fontWeight="semibold">
                {user?.user.fullname}
              </Text>
              <Text color="white" >
                {user?.user.profile_description}
              </Text>
            </Box>
            <HStack spacing={20}>
              <Stack fontSize="xl" spacing={0} color="white" textAlign="center">
                <Text fontWeight="semibold">0</Text>
                <Text>Post</Text>
              </Stack>
              <Stack fontSize="xl" spacing={0} color="white" textAlign="center">
                <Text fontWeight="semibold">{user?.followers.length ? user.followers.length : 0}</Text>
                <Text>Followers</Text>
              </Stack>
              <Stack fontSize="xl" spacing={0} color="white" textAlign="center">
                <Text fontWeight="semibold">{user?.followings.length ? user.followings.length : 0}</Text>
                <Text>Following</Text>
              </Stack>
            </HStack>
          </HStack>
        </Box>
        <Box  display="flex" justifyContent="center" alignItems="center"  pb={3} borderBottom="1px solid gray" mt={6} >
          <CgMenuGridR color="white" size={30} />
        </Box>

      </GridItem> */}

      <GridItem>
        <Box bg="blackAlpha.700" minH="100vh">
          <Box
            pos="relative"
            bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
            h="200px"
          >
            <Avatar
              left="50%"
              transform="translate(-50%, 0)"
              pos="absolute"
              bottom={-10}
              mx="auto"
              size="xl"
              src={user?.user.profile_picture}
            />
          </Box>
          <Box color="white" textAlign="center">
            <Text fontSize="3xl" fontWeight="semibold" mt={10}>
              {user?.user.fullname}
            </Text>
            <Text>@{user?.user.username}</Text>
            <Text>{user?.user.profile_description}</Text>
          </Box>

          <Tabs mt={8} colorScheme="cyan">
            <TabList justifyContent="space-evenly" color="white">
              <Tab w="full" fontWeight="semibold">
                Threads
              </Tab>
              <Tab w="full" fontWeight="semibold">
                Followers
              </Tab>
              <Tab w="full" fontWeight="semibold">
                Following
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {threads
                  ?.filter((a: IThreads) => a.user.id === idParams)
                  .map((e: IThreads) => (
                    <ThreadProfile
                      key={e.id}
                      likes={e.likes}
                      content={e.content}
                      idThread={e.id}
                      imageContent={e.image}
                      imgProfile={e.user.profile_picture}
                      name={e.user.fullname}
                      replies={e.replies}
                      time={e.createdAt}
                      username={e.user.username}
                      idUser={e.user.id}
                    />
                  ))}
              </TabPanel>
              <TabPanel px={10}>
                <Stack spacing={4}>
                  {dataUser?.followers.map((e: IFollow) => (
                    <FollowItem
                      id={e.id}
                      imgProfile={e.profile_picture}
                      name={e.fullname}
                      username={e.username}
                    />
                  ))}
                </Stack>
              </TabPanel>
              <TabPanel px={10}>
                <Stack spacing={4}>
                  {dataUser?.followings.map((e: IFollow) => (
                    <FollowItem
                      id={e.id}
                      imgProfile={e.profile_picture}
                      name={e.fullname}
                      username={e.username}
                    />
                  ))}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </GridItem>
    </Grid>
  );
}
