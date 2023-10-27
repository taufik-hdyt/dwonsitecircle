import {  Button, GridItem, Link } from "@chakra-ui/react";
import {IoChevronBackCircleOutline} from 'react-icons/io5'

function Reply() {
  return (
    <GridItem overflowY="auto" px={6} py={4} borderRight="1px solid gray">
      <Link href="/">
        <Button display='flex' color='white' variant='unstyled' leftIcon={<IoChevronBackCircleOutline size={24} />}>Status</Button>
      </Link>
    </GridItem>
  );
}

export default Reply;
