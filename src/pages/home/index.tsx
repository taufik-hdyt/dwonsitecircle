import {
  Avatar,
  Button,
  Center,
  Flex,
  GridItem,
  HStack,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
// import { BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Thread from "../../features/threads/components/ThreadItem";

import { useFetchThreads } from "../../features/threads/hooks/useFetchThread";
import { IThreads } from "../../interface/thread.interface";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import { useThreads } from "../../features/threads/hooks/useThread";

function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  const { data: threads, isLoading: loadingThread } = useFetchThreads();
  const dataThreads = threads?.data.data;

  const { fileInputRef, handleButtonClick, handleChange, handlePost } =
    useThreads();

  return (
    <Layout>
      <form onSubmit={handlePost} encType="multipart/form-data">
        <GridItem>
          <Text color="white" fontSize="lg">
            Home
          </Text>
          <HStack mt={5} justify="space-between">
            <HStack w="full">
              <Avatar size="sm" mr={3} src={auth.user.profile_picture} />
              <Input
                fontSize="sm"
                name="content"
                variant="outline"
                color="white"
                placeholder="What is happening?!"
                onChange={handleChange}
              />
            </HStack>
            <Flex>
              <Button onClick={handleButtonClick} variant="unstyled">
                <BiImageAdd size={30} color="green" />
              </Button>
              <Input
                type="file"
                name="image"
                onChange={handleChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />

              <Button
                colorScheme="whatsapp"
                size="sm"
                px={3}
                rounded="full"
                type="submit"
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
                idThread={e.id}
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
      </form>
    </Layout>
  );
}

export default Home;
