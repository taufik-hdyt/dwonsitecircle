/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import moment from "moment";
import { ILike, IReplies } from "../../../../interface/thread.interface";
import { useLike } from "../../../like/like.hook";


interface IProps {
  idContent?: number
  idUser?: number
  imgProfile?: string;
  name?: string;
  username?: string;
  content?: string;
  likes: ILike[];
  replies?: IReplies[];
  time?: string;
  imageContent?: string
  refetchThread?: any
}
function Thread(props: IProps) {
  const {
    replies,
    content,
    likes,
    name,
    username,
    time,
    imageContent,
    imgProfile,
    idUser,
    idContent,
    refetchThread

  } = props;

   // handleLike
  const {mutate: like} = useLike({
    id: idContent,
    onSuccess: ()=> {
      refetchThread()
    }
  })

   function handleLike(){
     like()
  }

  console.log(likes);


  return (
    <Flex gap={3} borderBottom="1px solid gray" mt={1}>
      <Avatar
        bg="gray"
        fontWeight="semibold"
        size="sm"
        name={name}
        src={imgProfile}
      />
      <Box mb={4}>
        <Link href="/profile">
          <HStack>
            <Text
              display="flex"
              gap={1}
              fontSize="sm"
              fontWeight="semibold"
              color="whiteAlpha.800"
              cursor="pointer"
            >
              {name}
              <Text fontWeight="light" display="flex" color="whiteAlpha.600">
                {username} <BsDot color="gray" size={24} />
                {moment(time).format("MMM Do YY")}
              </Text>
            </Text>
          </HStack>
        </Link>

        <Text
          wordBreak="break-word"
          mb={imageContent ? 2 : 0}
          fontSize="sm"
          color="whiteAlpha.800"
          fontWeight="light"
        >
          {content}
        </Text>
        {imageContent && (
          <Image
            w="300px"
            src={imageContent}
            alt="img"
          />
        )}

        <HStack spacing={6}>
          <HStack
          onClick={handleLike}
            cursor="pointer"
            color="whiteAlpha.600"
            mt={2}
          >
            <AiFillHeart size={24}
            color={likes.find((e)=> e.user.id === idUser) ? "red": ""}
             />

            <Text fontSize="sm" color="whiteAlpha.600">
              {likes?.length ? likes.length : ""}
            </Text>
          </HStack>
          <Link href={`reply/${idContent}`}>
            <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
              <BiCommentDetail size={24} />
              <Text fontSize="sm" color="whiteAlpha.600">
                {replies?.length ? replies.length : ""} Replies
              </Text>
            </HStack>
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Thread;
