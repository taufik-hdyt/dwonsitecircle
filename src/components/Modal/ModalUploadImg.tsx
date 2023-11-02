/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  FormLabel,
  VStack,
  Input,
  FormControl,
  Text,
  Image,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { API } from "../../libs/api";
import { RxUpdate } from "react-icons/rx";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  setImage: Dispatch<SetStateAction<string>>;
  image?: string;
}
const ModalUploadImg: React.FC<IProps> = ({
  isOpen,
  onClose,
  setImage,
  image,
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const onChangeImage = (e: any) => {
    setLoading(true);
    const selectedFIle = e.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedFIle);
    API.post("/upload", formData).then((res) => {
      setImage(res.data.data.url);
      setLoading(false);
    });
  };

  return (
    <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {image && loading === false ? (
            <>
              <Image h="350px" w="full" src={image} alt="img" />
              <FormControl display="flex" justifyContent="center">
                <FormLabel
                  px={4}
                  py={2}
                  color="white"
                  fontWeight="semibold"
                  rounded="lg"
                  htmlFor="image"
                  cursor="pointer"
                  w="fit-content"
                >
                  <Text
                    bg="blackAlpha.700"
                    color="white"
                    fontWeight="semibold"
                    px={4}
                    py={2}
                    rounded="lg"
                    display="flex"
                    gap={2}
                  >
                    Change
                    <RxUpdate color="white" size={24} />
                  </Text>
                </FormLabel>
                <Input
                  onChange={onChangeImage}
                  name="file"
                  type="file"
                  id="image"
                  display="none"
                />
              </FormControl>
            </>
          ) : (
            <>
              {loading ? (
                <Center mb={4}>
                  <Spinner size="xl" color="green" />
                </Center>
              ) : (
                <Stack
                  mb={2}
                  align="center"
                  border="3px solid green"
                  borderStyle="dotted"
                >
                  <VStack>
                    <FormControl>
                      <FormLabel
                        px={4}
                        py={2}
                        color="white"
                        fontWeight="semibold"
                        rounded="lg"
                        htmlFor="image"
                        cursor="pointer"
                      >
                        <AiOutlineCloudUpload color="green" size={100} />
                        <Text color="green">Choose FIle</Text>
                      </FormLabel>
                      <Input
                        onChange={onChangeImage}
                        name="file"
                        type="file"
                        id="image"
                        display="none"
                      />
                    </FormControl>
                  </VStack>
                </Stack>
              )}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalUploadImg;
