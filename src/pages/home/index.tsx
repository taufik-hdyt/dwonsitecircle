import {
  Avatar,
  Button,
  Center,
  Flex,
  GridItem,
  HStack,
  Spinner,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
// import { BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Thread from "../../features/threads/components/ThreadItem";

import { useFetchThreads } from "../../features/threads/hooks/useFetchThread";
import { ICreateThread, IThreads } from "../../interface/thread.interface";
import { useState } from "react";
import { usePostThread } from "../../features/threads/hooks/usePostThread";
import Layout from "../../components/Layout/Layout";
import ModalUploadImg from "../../components/Modal/ModalUploadImg";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";

function Home() {
  const auth = useSelector((state: RootState) => state.auth)
  const {
    data: threads,
    isLoading: loadingThread,
    refetch,
  } = useFetchThreads();
  const dataThreads = threads?.data.data;

  // POST THREAD
  const toast = useToast();
  const [inputContent, setInputContent] = useState<string>("");
  const [inputImage, setInputImage] = useState<string>("");

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
    onError: (error: unknown) => {
      let errorMessage = "Something Error";
      if (error instanceof AxiosError) {
        if (error.response) {
          errorMessage = error.response.data.Error;
        } else {
          errorMessage = error.message;
        }
      }
      toast({
        title: errorMessage,
        status: "error",
        position: "top",
      });
    },
  });

  const handleSubmitContent = () => {
    const body: ICreateThread = {
      content: inputContent,
    };
    if (inputImage) {
      body.image = inputImage;
    }
    submitContent(body);
  };
  // openModalUpload
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <GridItem>
        <Text color="white" fontSize="lg">
          Home
        </Text>
        <HStack mt={5} justify="space-between">
          <HStack w="full">
            <Avatar size="sm" mr={3} src={auth.user.profile_picture} />
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
          </HStack>
          <Flex>
            <Button variant="unstyled" onClick={onOpen}>
              <BiImageAdd size={30} color="green" />
            </Button>

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
          {loadingThread && (
            <Center>
              <Spinner size="xl" color="white" />
            </Center>
          )}

          {dataThreads?.map((e: IThreads) => (
            <Thread
              key={e.id}
              idContent={e.id}
              replies={e.replies}
              likes={e.likes}
              name={e.user.fullname}
              time={e.createdAt}
              username={`@${e.user.username}`}
              imgProfile={e.user.profile_picture}
              content={e.content}
              imageContent={e.image}
            />
          ))}
        </Stack>
      </GridItem>
      <ModalUploadImg
        setImage={setInputImage}
        image={inputImage}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Layout>
  );
}

export default Home;
