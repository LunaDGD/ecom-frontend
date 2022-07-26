import React from 'react';
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  Heading,
  IconButton,
  Flex,
  Box,
  useColorMode,
} from '@chakra-ui/react';

const ContactForm1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Contact />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const Contact = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="1000px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <ContactHeader />
          <ContactForm />
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right" py={4}>
      <IconButton
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

const ContactHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Contact Us</Heading>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" required placeholder="Enter your name" />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" required placeholder="Enter your email" />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="textarea" required placeholder="Enter your message" />
        </FormControl>

        <Button variantColor="blue" type="submit" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm1;
