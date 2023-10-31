import Layout from "../../components/Layout/Layout";
import { InputGroup, InputLeftElement, Input, Stack } from "@chakra-ui/react";
import { RiUserSearchLine } from "react-icons/ri";
import FollowItem from "../../features/threads/components/FollowItem";

function SearchPage() {
  return (
    <Layout>
      <InputGroup >
        <InputLeftElement >
          <RiUserSearchLine color='white' size={24} />
        </InputLeftElement>
        <Input rounded='full' color='white' type="text" placeholder="Seacrh user" />
      </InputGroup>
      <Stack mt={8} spacing={6}>
        <FollowItem imgProfile="" name="Toni" username="@yaho"  />
        <FollowItem imgProfile="" name="Toni" username="@yaho"  />
        <FollowItem imgProfile="" name="Toni" username="@yaho"  />
        <FollowItem imgProfile="" name="Toni" username="@yaho"  />
      </Stack>
    </Layout>
  );
}

export default SearchPage;
