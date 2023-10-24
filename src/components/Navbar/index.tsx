import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import {  AiOutlineUser, AiOutlineHeart,AiOutlineHome } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  return (
    <Stack h="full" justify="space-between">
      <Box>
        <Heading color="green">circle</Heading>
        <Stack mt={8} spacing={6}>
          <HStack cursor="pointer" color="white">
            <AiOutlineHome size={25} />
            <Text fontSize="sm  ">Home</Text>
          </HStack>
          <HStack cursor="pointer" color="white">
            <TbUserSearch size={25} />
            <Text fontSize="sm  ">Search</Text>
          </HStack>
          <HStack cursor="pointer" color="white">
            <AiOutlineHeart color="transparant" size={25} />
            <Text fontSize="sm  ">Follows</Text>
          </HStack>
          <HStack cursor="pointer" color="white">
            <AiOutlineUser size={25} />
            <Text fontSize="sm  ">Profile</Text>
          </HStack>

          <Button size='sm'  rounded="full" colorScheme="whatsapp">
            Create Post
          </Button>
        </Stack>
      </Box>

      <Button
        fontWeight="light"
        color="white"
        display="flex"
        justifyContent="start"
        leftIcon={<BiLogOut size={30} />}
        colorScheme="teal"
        variant="unstyled"
      >
        Logout
      </Button>
    </Stack>
  );
}

export default Navbar;
