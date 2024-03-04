import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaIndustry } from "react-icons/fa";

const Index = () => {
  const [steel, setSteel] = useState(0);
  const toast = useToast();

  const makeSteel = () => {
    setSteel(steel + 1);
    toast({
      title: "Steel Produced!",
      description: "You've successfully made a unit of steel.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Steel Production Game
        </Heading>
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGluZHVzdHJ5fGVufDB8fHx8MTcwOTU2MjAxMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Steel Industry" borderRadius="md" />
        </Box>
        <Box textAlign="center">
          <Text fontSize="2xl">Steel Made: {steel}</Text>
        </Box>
        <Box textAlign="center">
          <Button leftIcon={<FaIndustry />} colorScheme="teal" onClick={makeSteel} size="lg">
            Make Steel
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
