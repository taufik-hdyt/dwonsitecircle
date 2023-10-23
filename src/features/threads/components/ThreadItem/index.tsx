import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {useState} from 'react'


interface IProps{
  imgProfile?: string
  name?: string
  username?: string
  content?: string
  likes?: number
  comment?: number
  time?: string
}
function Thread(props: IProps) {
  const {comment,content,imgProfile,likes,name,username,time} = props
  const [like,setLike] = useState(false)
  function handleLike(){
    setLike(!like)
  }

  return (
    <Flex gap={3}>
      <Avatar size="sm" name="Dan Abrahmov" src={imgProfile} />
      <Box>
        <HStack>
          <Text
            display="flex"
            gap={2}
            fontSize="sm"
            fontWeight="semibold"
            color="whiteAlpha.800"
          >
            {name}
            <Text display="flex" color="whiteAlpha.600">
             {username} <BsDot color="white" size={24} />
              {time}
            </Text>
          </Text>
        </HStack>
        <Text fontSize="sm" color="whiteAlpha.600">
        {content}
        </Text>
        <HStack spacing={6}>
          <HStack onClick={handleLike} cursor="pointer" color="whiteAlpha.600" mt={2}>
            <AiFillHeart  size={20} color={like ? 'red': ''} />
            <Text fontSize="sm" color="whiteAlpha.600">
              {likes}
            </Text>
          </HStack>
          <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
            <BiCommentDetail size={20} />
            <Text fontSize="sm" color="whiteAlpha.600">
             {comment}
            </Text>
          </HStack>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Thread;
