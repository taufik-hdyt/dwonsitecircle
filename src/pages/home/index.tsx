import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Suggest from "../../features/threads/components/Suggest";
import CardProfile from "../../features/threads/components/CardProfile";
import { BsDot, BsFacebook, BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import ThreadDetail from "../../features/threads/components/ThreadDetail";
import Thread from "../../features/threads/components/ThreadItem";
import { useState } from "react";
import data from '../../mocks/thread.json'

function Home() {
  const [detail, setDetail] = useState(false);


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

          <Stack mt={6}>
            {
              data?.map((e)=> (
                <Thread
                key={e.id}
                onClick={() => setDetail(true)}
                comment={e.likes}
                likes={e.likes}
                name={e.name}
                time={'4h'}
                username={e.username}
                imgProfile="https://bit.ly/dan-abramov"
                content={e.content}
              />
              ))
            }
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

          <Card mt={4} bg="whiteAlpha.200" p={3}>
            <Flex>
              <Text display="flex" fontSize="sm" gap={1} color="whiteAlpha.800">
                Developedby <Text color="white">Your Name</Text>
              </Text>
              <Flex gap="3px" color="gray">
                <BsDot size={24} />
                <AiFillGithub size={20} />
                <AiFillLinkedin size={20} />
                <BsFacebook size={20} />
                <AiFillInstagram size={20} />
              </Flex>
            </Flex>
            <Text
              fontSize="x-small"
              color="whiteAlpha.600"
              display="flex"
              gap={2}
            >
              Powered by <Image w="30px" src="src/assets/logo.png" alt="logo" />{" "}
              Dumbways Indonesia #1Coding Bootcamp
            </Text>
          </Card>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Home;
