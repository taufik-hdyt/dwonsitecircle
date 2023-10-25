import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Suggest from "../../features/threads/components/Suggest";
import CardProfile from "../../features/threads/components/CardProfile";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import ThreadDetail from "../../features/threads/components/ThreadDetail";
import Thread from "../../features/threads/components/ThreadItem";
import { useState } from "react";
import Footer from "../../components/Footer";
import { useFetchThreads } from "../../api/Thread/useFetchThread";
import { IThreads } from "../../libs/interface/interface";

function Home() {
  const [detail, setDetail] = useState(false);

  const { data: threads, isLoading: loadingThread } = useFetchThreads();
  const dataThreads = threads?.data;

  return (
    <Grid gridTemplateColumns="270px 1.5fr 1.1fr" bg="blackAlpha.800" h="100vh">
      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Navbar />
      </GridItem>

      {detail === false && (
        <GridItem overflowY="auto" px={6} py={4} borderRight="1px solid gray">
          <Text color="white" fontSize="lg">
            Home
          </Text>
          <HStack mt={5} justify="space-between">
            <HStack>
              <Avatar size="sm" mr={3} />
              <Input
                variant="unstyled"
                color="whiteAlpha.400"
                placeholder="What is happening?!"
                _focus={{ color: "white" }}
              />
            </HStack>
            <HStack>
              <Box cursor="pointer">
                <BiImageAdd size={25} color="green" />
              </Box>
              <Button colorScheme="whatsapp" size="xs" px={3} rounded="full">
                Post
              </Button>
            </HStack>
          </HStack>

          <Stack mt={8}>
            {loadingThread && <Skeleton w="full" h={100} />}
            {dataThreads?.map((e: IThreads) =>
                <Thread
                  key={e.id}
                  onClick={() => setDetail(true)}
                  comment={200}
                  likes={100}
                  name={e.user.fullname}
                  time={e.createdAt}
                  username={`@${e.user.username}`}
                  imgProfile={"https://bit.ly/dan-abramov"}
                  content={e.content}
                  imageContent={e.image}
                />

            )}
          </Stack>
        </GridItem>
      )}

      {detail && (
        <GridItem borderRight="1px solid gray" px={6} py={6}>
          <HStack
            color="white"
            onClick={() => setDetail(false)}
            cursor="pointer"
          >
            <BsArrowLeftShort size={24} />
            <Text>Status</Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus tempore rerum quae repellat hic explicabo architecto
            eos nemo quod suscipit.
          </HStack>
          <Box mt={6}>
            <ThreadDetail />
          </Box>
        </GridItem>
      )}

      <GridItem px={6} py={4}>
        <CardProfile />
        <Box mt={4}>
          <Suggest />
          <Footer />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Home;
