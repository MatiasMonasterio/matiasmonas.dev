import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { RiMailSendLine, RiErrorWarningLine } from "react-icons/ri";

import { sendContactForm } from "services/contact";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    loading: false,
    showModal: false,
    submitSucces: false,
  });

  const [modalMessage, setModalMessage] = useState({
    title: "",
    message: "",
    success: false,
    icon: null,
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("El email es inválido")
      .required("El email es requerido"),
    message: Yup.string().required("El mensaje es requerido"),
  });

  const handleSubmit = async () => {
    setFormState((formState) => ({ ...formState, loading: true }));

    const { error } = await sendContactForm(formik.values);

    setFormState((formState) => ({
      ...formState,
      loading: false,
      showModal: true,
    }));

    if (error) {
      setModalMessage({
        title: "Mmmm... Algo salio mal",
        message: "Intente nuevamente más tarde",
        success: false,
        icon: <RiErrorWarningLine />,
      });
    } else {
      setModalMessage({
        title: "En hora buena!",
        message: "Resivirá un correo de confirmacion de envio",
        success: true,
        icon: <RiMailSendLine />,
      });

      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const handleCloseModal = () => {
    setFormState((formState) => ({ ...formState, showModal: false }));
  };

  return (
    <>
      <Stack as="form" onSubmit={formik.handleSubmit} autoComplete="off">
        <FormControl isInvalid={formik.submitCount && formik.errors.name}>
          <Input
            placeholder="Nombre"
            borderColor="whiteAlpha.200"
            name="name"
            errorBorderColor="initial"
            isInvalid={formik.submitCount && formik.errors.name}
            onChange={formik.handleChange}
            value={formik.values.name}
            _hover={{ borderColor: "yellow.200" }}
            _focus={{ borderColor: "yellow.200" }}
            _placeholder={{ color: "gray.300" }}
          />

          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.submitCount && formik.errors.email}>
          <Input
            placeholder="Email"
            borderColor="whiteAlpha.200"
            name="email"
            errorBorderColor="initial"
            onChange={formik.handleChange}
            value={formik.values.email}
            _hover={{ borderColor: "yellow.200" }}
            _focus={{ borderColor: "yellow.200" }}
            _placeholder={{ color: "gray.300" }}
          />

          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.submitCount && formik.errors.message}>
          <Textarea
            placeholder="Mensaje"
            borderColor="whiteAlpha.200"
            name="message"
            errorBorderColor="initial"
            onChange={formik.handleChange}
            value={formik.values.message}
            _hover={{ borderColor: "yellow.200" }}
            _focus={{ borderColor: "yellow.200" }}
            _placeholder={{ color: "gray.300" }}
          />

          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          variant="outline"
          borderColor="whiteAlpha.200"
          color="whiteAlpha.900"
          _hover={{
            bg: "yellow.300",
            color: "blackAlpha.900",
          }}
          disabled={
            formState.loading || (formik.submitCount && !formik.isValid)
          }
        >
          {formState.loading ? <Spinner /> : "Enviar"}
        </Button>
      </Stack>

      <Modal isOpen={formState.showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={8} textAlign="center">
            <Box
              fontSize="6rem"
              display="flex"
              justifyContent="center"
              color={modalMessage.success ? "green.400" : "red.500"}
              mb={4}
            >
              {modalMessage.icon}
            </Box>
            <Text fontSize="3xl" fontWeight={600}>
              {modalMessage.title}
            </Text>

            <Text fontSize="lg">{modalMessage.message}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
