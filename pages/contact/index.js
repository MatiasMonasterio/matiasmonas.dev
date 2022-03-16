import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Center,
  Heading,
  Container,
  Input,
  Textarea,
  Stack,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Spinner,
} from "@chakra-ui/react";

import { RiMailSendLine, RiErrorWarningLine } from "react-icons/ri";

import { Section } from "components/common/Section";
import { NextPageLink } from "components/common/NextPageLink";
import { sendContactForm } from "services/contact";

export default function Experience() {
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
    <Box bg="gray.800" color="gray.300">
      <Box as="main">
        <Center>
          <Section>
            <Container maxW="container.md">
              <Box mb={10}>
                <Heading
                  as="h2"
                  size="md"
                  borderBottom="1px"
                  borderColor="gray.700"
                  py={2}
                  mb={6}
                >
                  Contacto
                </Heading>

                <Stack
                  as="form"
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                >
                  <FormControl
                    isInvalid={formik.submitCount && formik.errors.name}
                  >
                    <Input
                      placeholder="Nombre"
                      borderColor="gray.700"
                      borderRadius={2}
                      name="name"
                      errorBorderColor="initial"
                      isInvalid={formik.submitCount && formik.errors.name}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />

                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={formik.submitCount && formik.errors.email}
                  >
                    <Input
                      placeholder="Email"
                      borderColor="gray.700"
                      borderRadius={2}
                      name="email"
                      errorBorderColor="initial"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />

                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={formik.submitCount && formik.errors.message}
                  >
                    <Textarea
                      placeholder="Mensaje"
                      borderColor="gray.700"
                      borderRadius={2}
                      name="message"
                      errorBorderColor="initial"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />

                    <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="outline"
                    borderColor="gray.700"
                    color="gray.500"
                    borderRadius={2}
                    disabled={
                      formState.loading ||
                      (formik.submitCount && !formik.isValid)
                    }
                  >
                    {formState.loading ? <Spinner /> : "Enviar"}
                  </Button>
                </Stack>
              </Box>

              <Box display="flex" justifyContent="end">
                <NextPageLink href="/curriculum" icon={false}>
                  Descargar CV
                </NextPageLink>
              </Box>
            </Container>
          </Section>
        </Center>
      </Box>

      <Modal isOpen={formState.showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent borderRadius={2}>
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
            <Button
              colorScheme="blue"
              mr={3}
              borderRadius={2}
              onClick={handleCloseModal}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
