import Layout from "../../components/Layout/Layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";

function FollowsPage() {
  return (
    <Layout>
      <Text fontWeight="sm" fontSize="lg" color="white">
        Follows
      </Text>
      <Tabs mt={4} size='lg' color='white' colorScheme='green'>
        <TabList justifyContent='space-around'>
          <Tab w='full'>Followers</Tab>
          <Tab w='full'>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>on progress</p>
          </TabPanel>
          <TabPanel>
            <p>on progress</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}

export default FollowsPage;
