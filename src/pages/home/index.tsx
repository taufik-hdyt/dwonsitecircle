import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
// import { BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Thread from "../../features/threads/components/ThreadItem";

import { useFetchThreads } from "../../features/threads/hooks/useFetchThread";
import { ICreateThread, IThreads } from "../../interface/thread.interface";
import { useState } from "react";
import { usePostThread } from "../../features/threads/hooks/usePostThread";

function Home() {
  const {
    data: threads,
    isLoading: loadingThread,
    refetch,
  } = useFetchThreads();
  const dataThreads = threads?.data.data;



  // POST THREAD
  const toast = useToast();
  const [inputContent, setInputContent] = useState("");
  const [inputImage, setInputImage] = useState("");
  const { mutate: submitContent } = usePostThread({
    onSuccess: () => {
      toast({
        title: "Succes Post",
        status: "success",
        position: "top",
      });
      setInputContent("");
      setInputImage("");
      refetch();
    },
    onError: () => {
      toast({
        title: "Failed",
        status: "error",
        position: "top",
      });
    },
  });

  const handleSubmitContent = () => {
    const body : ICreateThread = {
      content: inputContent,
    };
    if(inputImage) {
      body.image = inputImage
    }
    submitContent(body);
  };
  return (
      <GridItem overflowY="auto" px={6} py={4} borderRight="1px solid gray">
        <Text color="white" fontSize="lg">
          Home
        </Text>
        <HStack mt={5} justify="space-between">
          <HStack w="full">
            <Avatar size="sm" mr={3} />
            <Box>
              <Textarea
                fontSize="sm"
                resize="none"
                variant="outline"
                color="whiteAlpha.400"
                placeholder="What is happening?!"
                _focus={{ color: "white" }}
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
              />
              <Input
              color='white'
                value={inputImage}
                onChange={(e) => setInputImage(e.target.value)}
                mt={1}
                placeholder="image url"
              />
            </Box>
          </HStack>
          <Flex>
            <Input display="none" id="image" type="file" />
            <FormLabel htmlFor="image" cursor="pointer">
              <BiImageAdd size={30} color="green" />
            </FormLabel>
            <Button
              onClick={() => handleSubmitContent()}
              colorScheme="whatsapp"
              size="sm"
              px={3}
              rounded="full"
            >
              Post
            </Button>
          </Flex>
        </HStack>

        <Stack mt={8}>
          {loadingThread && <Spinner size='lg' color="white" />}
          {dataThreads?.map((e: IThreads) => (
            <Thread
              key={e.id}
              comment={e.replies}
              likes={e.likes}
              name={e.user.fullname}
              time={e.createdAt}
              username={`@${e.user.username}`}
              // imgProfile={"https://bit.ly/dan-abramov"}
              content={e.content}
              imageContent={e.image}
            />
          ))}
        </Stack>
      </GridItem>
  );
}

export default Home;
