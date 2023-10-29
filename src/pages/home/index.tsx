import {
  Avatar,
  Box,
  Button,
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
import CardProfile from "../../features/threads/components/CardProfile";
import Suggest from "../../features/threads/components/Suggest";
import Footer from "../../components/Footer";
import ModalUploadImg from "../../components/Modal/ModalUploadImg";

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
    onError: () => {
      toast({
        title: "Failed",
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
      <GridItem overflowY="auto" px={6} py={4} borderRight="1px solid gray">
        <Text color="white" fontSize="lg">
          Home
        </Text>
        <HStack mt={5} justify="space-between">
          <HStack w="full">
            <Avatar size="sm" mr={3} />
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
          {loadingThread && <Spinner size="lg" color="white" />}
          {dataThreads?.map((e: IThreads) => (
            <Thread
              key={e.id}
              idContent={e.id}
              idUser={e.user.id}
              replies={e.replies}
              likes={e.likes}
              name={e.user.fullname}
              time={e.createdAt}
              username={`@${e.user.username}`}
              imgProfile={e.user.profile_picture}
              content={e.content}
              imageContent={e.image}
              refetchThread={refetch}
            />
          ))}
        </Stack>
      </GridItem>
      <Box px={6} py={4}>
        <CardProfile
          follower="100"
          following="200"
          name="Toni"
          profile_bio="Welcome to my profile  "
          profile_picture="kosing"
          username="toniaja"
        />
        <Box mt={4}>
          <Suggest />
          <Footer />
        </Box>
      </Box>

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
