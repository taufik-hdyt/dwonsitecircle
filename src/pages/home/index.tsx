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
import { BsDot, BsFacebook,BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import ThreadDetail from "../../features/threads/components/ThreadDetail"
import Thread from "../../features/threads/components/ThreadItem";
import {useState} from 'react'

function Home() {
  const [detail,setDetail] = useState(false)

  return (
    <Grid gridTemplateColumns="270px 1.5fr 1.1fr" bg="blackAlpha.800" h="100vh">
      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Navbar />
      </GridItem>

{
  detail === false &&   <GridItem  overflowY="auto" px={6} py={4} borderRight="1px solid gray" >
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
    <Thread
    onClick={()=> setDetail(true)}
      comment={100}
      likes={389}
      name="Indah Pra Karya"
      time="4h"
      username="@indahaja"
      imgProfile="https://bit.ly/dan-abramov"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in a culpa accusamus exercitationem possimus inventore veniam laudantium. Facere eius illum culpa saepe, voluptate quis! Molestias eligendi quia fugiat ducimus?"
    />
    <Thread
    onClick={()=> setDetail(true)}
      comment={20}
      likes={334}
      name="Indah aja"
      time="3h"
      username="@indah"
      imgProfile="https://bit.ly/dan-abramov"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempore."
    />

    <Thread
    onClick={()=> setDetail(true)}
      comment={20}
      likes={334}
      name="Asih aja"
      time="3h"
      username="@asih"
      imgProfile="https://bit.ly/dan-abramov"
      content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat harum illum dolorum quibusdam facere, incidunt ipsa animi hic quod quia, consequatur quos at! Iusto amet voluptatum modi incidunt corporis exercitationem labore non quo minima? Quas vitae iste ullam. Consequatur vitae architecto, nisi nulla repellendus iure. Nemo excepturi maiores repellat.    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, obcaecati. Obcaecati alias porro eos neque quam possimus dolore qui, repellat eaque nesciunt quo nihil soluta dolorem exercitationem temporibus facere iure amet expedita, laborum explicabo. Quo reprehenderit nobis officia praesentium eos incidunt quam. Sunt tempora unde amet dolore, vero et impedit."
    />

  </Stack>
</GridItem>
}

      {
        detail &&       <GridItem borderRight='1px solid gray' px={6} py={6}>
        <HStack color="white" onClick={()=>setDetail(false)} cursor='pointer'>
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
      }


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
