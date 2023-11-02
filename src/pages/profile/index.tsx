import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import { useFetchUser } from "../../features/user/useFetchUser.hooks";
import { useParams } from "react-router-dom";
import { IFollow, IProfile, IUser } from "../../interface/user.interface";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useFetchThreads } from "../../features/threads/hooks/useFetchThread";
import Thread from "../../features/threads/components/ThreadItem";
import { IThreads } from "../../interface/thread.interface";
import FollowItem from "../../features/threads/components/FollowItem";

export default function ProfilePage() {
  const params = useParams();
  const idParams = Number(params.id);
  const { data } = useFetchUser(idParams);
  const user: IProfile = data;

  const { data: dataThreads } = useFetchThreads();
  const threads = dataThreads?.data.data;
  const { data: dataUser } = useFetchUser(idParams);

  return (
    <Box>
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
      <Box textAlign="center">
        <Text fontSize="3xl" fontWeight="semibold" mt={10}>
          {user?.user.fullname}
        </Text>
        <Text>@{user?.user.username}</Text>
        <Text>{user?.user.profile_description}</Text>
      </Box>

      <Tabs mt={8} colorScheme="green" >
        <TabList justifyContent="space-evenly">
          <Tab fontWeight="semibold">Threads</Tab>
          <Tab fontWeight="semibold">Followers</Tab>
          <Tab fontWeight="semibold">Following</Tab>
        </TabList>

        <TabPanels bg="blackAlpha.700" h='100vh'>
          <TabPanel px={10}>

              <Box color='white'>Data not found</Box>
            {threads
              ?.filter((a: IThreads) => a.user.id === idParams)
              .map((e: IThreads) => (
                <Thread
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
  );
}
