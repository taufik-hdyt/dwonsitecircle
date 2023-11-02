// import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";


// interface  IProps{
//   isOpen: boolean
//   onCLose: ()=> void
// }
// export default function ALertConfirm({isOpen,onCLose}:IProps) {
//   const cancelRef = React.useRef()
//   return (
//     <AlertDialog
//     isCentered
//     leastDestructiveRef={cancelRef}
//       isOpen={isOpen}
//       onClose={onCLose}
//     >
//       <AlertDialogOverlay>
//         <AlertDialogContent>
//           <AlertDialogHeader fontSize="lg" fontWeight="bold">
//             Delete Customer
//           </AlertDialogHeader>

//           <AlertDialogBody>
//             Are you sure? You can't undo this action afterwards.
//           </AlertDialogBody>

//           <AlertDialogFooter>
//             <Button onClick={onCLose}>
//               Cancel
//             </Button>
//             <Button colorScheme="red" ml={3}>
//               Yes
//             </Button>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialogOverlay>
//     </AlertDialog>
//   );
// }
