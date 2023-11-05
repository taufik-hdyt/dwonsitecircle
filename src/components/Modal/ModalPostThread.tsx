import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { ChangeEvent, useState, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPostThread({ isOpen, onClose }: Props) {
  // state menangkap input gambar dari file
  const [selectedGambarUrl, setSelectedGambarUrl] = useState<string>("");
  const [selectedFile, setSelecetedFile] = useState<any>();
  const [content,setContent] = useState<string>("")
  function handleChangeGambar(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelecetedFile(e.target.files[0]);
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedGambarUrl(imgUrl);
    }
  }

  function handleOpenFile() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  const handlePost = ()=> {
    const formData = new FormData()
    formData.append("image", selectedFile)
    formData.append("content", content)
  }

  const inputFileRef = useRef<HTMLInputElement>(null);
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.100">
        <ModalHeader>Post Thread</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            resize="none"
            fontSize="sm"
            name="content"
            variant="outline"
            color="black"
            bg="InfoBackground"
            placeholder="What is happening?!"
          />
          <Box mt={4}>
            <Input
              onChange={handleChangeGambar}
              ref={inputFileRef}
              display="none"
              type="file"
              accept="image/*"
              name="image"
            />
            {selectedGambarUrl ? (
              <Center>
                <Image maxH="250px" rounded="lg" src={selectedGambarUrl} />
              </Center>
            ) : (
              <Box cursor="pointer" mt={3} onClick={handleOpenFile}>
                <BiImageAdd color="green" size={30} />
              </Box>
            )}
          </Box>
        </ModalBody>

        <ModalFooter gap={3}>
          {selectedGambarUrl && (
            <Button
              onClick={handleOpenFile}
              variant="outline"
              px={4}
              size="sm"
              colorScheme="whatsapp"
            >
              Change
            </Button>
          )}

          <Button px={4} size="sm" colorScheme="whatsapp">
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
