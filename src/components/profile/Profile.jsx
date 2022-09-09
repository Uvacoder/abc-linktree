import React from "react";
import {
  VStack,
  Avatar,
  Heading,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { profilePicture, bio } from "../../data";
import { Social } from "./Social";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Links } from "./Links";

export function Profile() {
  const handleLink = () => {
    const anchor = document.createElement("a");
    anchor.href = `mailto:freeunioncoder@gmail.com`;
    anchor.click();
  };
  return (
    <VStack w="100%" pt="9vh" spacing="2rem">
      <VStack spacing="1rem">
        <Avatar shadow="lg" size="xl" src={profilePicture} />
        <Heading size="lg">Alec Campbell</Heading>
        <HStack color="blackAlpha.500">
          <FaMapMarkerAlt />
          <Text>Free Union, Virginia</Text>
        </HStack>
        <Text>{bio}</Text>
      </VStack>
      <HStack>
        <Button
          bg="white"
          leftIcon={<FaEnvelope color="blue" />}
          onClick={handleLink}
        >
          Email
        </Button>
      </HStack>
      <Social />
      <Links />
    </VStack>
  );
}
