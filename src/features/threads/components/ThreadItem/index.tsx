import { Avatar, Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useState } from "react";
import moment from "moment";

interface IProps {
  // imgProfile?: string;
  name?: string;
  username?: string;
  content?: string;
  likes: number;
  comment?: number;
  time?: string;
  imageContent?: string;
}
function Thread(props: IProps) {
  const {
    comment,
    content,
    likes,
    name,
    username,
    time,
    imageContent,
  } = props;

  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  return (
    <Flex gap={3} borderBottom="1px solid gray" mt={1}>
      <Avatar bg="gray" fontWeight="semibold" size="sm" name={name} />
      <Box mb={4}>
        <Link  href="/profile">
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

        <Link href="/detail">
          <Text mb={2} fontSize="xs" color="whiteAlpha.800" fontWeight="light">
            {content}
          </Text>
          {imageContent   && (
            <Image w="300px" src={imageContent} alt="img" />
          )}
        </Link>

        <HStack spacing={6}>
          <HStack
            onClick={handleLike}
            cursor="pointer"
            color="whiteAlpha.600"
            mt={2}
          >
            <AiFillHeart size={20} color={like ? "red" : ""} />
            <Text fontSize="sm" color="whiteAlpha.600">
              {likes}
            </Text>
          </HStack>
          <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
            <BiCommentDetail size={20} />
            <Text fontSize="sm" color="whiteAlpha.600">
              {comment} Replies
            </Text>
          </HStack>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Thread;
