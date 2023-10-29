import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail, BiImageAdd } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

function ThreadDetail() {
  return (
    <Flex gap={3}>
      <Avatar size="sm" name="Dan Abrahmov" />
      <Box>
        <HStack>
          <Text
            display="flex"
            gap={2}
            fontSize="sm"
            fontWeight="semibold"
            color="whiteAlpha.800"
          >
            Indah
          </Text>
        </HStack>
        <Text fontSize="sm" color="whiteAlpha.600">
          @dsfdsf
        </Text>
        <Text color="white" fontSize="sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          nostrum culpa voluptatibus, repellat possimus eius aspernatur tempora
          numquam a eos.
        </Text>

        <Text
          mt={3}
          display="flex"
          align="center"
          fontSize="xs"
          color="whiteAlpha.600"
        >
          11:32 PM <BsDot size={20} /> Jul26 2023
        </Text>

        <HStack spacing={6}>
          <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
            <AiFillHeart size={20} color="red" />
            <Text fontSize="sm" color="whiteAlpha.600">
              100
            </Text>
          </HStack>
          <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
            <BiCommentDetail size={20} />
            <Text fontSize="sm" color="whiteAlpha.600">
              {200}
            </Text>
          </HStack>
        </HStack>

        <HStack mt={5} justify="space-between">
          <HStack  w='full'>
            <Avatar size="sm" mr={3} />
            <Input
            rounded='none'
            borderBottom='1px solid gray'
              variant="unstyled"
              color="white"
              placeholder="Type your reply!"
            />
          </HStack>
          <HStack>
            <Box cursor="pointer">
              <BiImageAdd size={25} color="green" />
            </Box>
            <Button colorScheme="whatsapp" size="xs" px={3} rounded="full">
              Reply
            </Button>
          </HStack>
        </HStack>

        <Stack mt={8}></Stack>
      </Box>
    </Flex>
  );
}

export default ThreadDetail;
