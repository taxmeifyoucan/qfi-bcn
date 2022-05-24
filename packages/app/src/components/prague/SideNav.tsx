import React from "react";
import {
  VStack, Tooltip,
  IconButton,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import { MdDashboard, MdSettings } from "react-icons/md";
import { HiCollection } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Logo } from "../Hero";
import { SideNavProps } from "../../propTypes";

export const SideNav = ({ onSettingsOpen }: SideNavProps) => {
  const backgroundColor = useColorModeValue("gray.100", "gray.700");
  return (
    <VStack p={4} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <IconButton bg = {backgroundColor }to="/" as={Link} mb={6} icon={<Logo />} aria-label="Home" />

        <Tooltip label="Home" placement="right">
          <IconButton
            to="/ballot"
            as={Link}
            color="gray.500"
            icon={<Icon as={MdDashboard} boxSize={4} />}
            aria-label="Home" />
        </Tooltip>
        <Tooltip label="Projects" placement="right">
          <IconButton
            to="/projects"
            as={Link}
            color="gray.500"
            icon={<Icon as={HiCollection} boxSize={4} />}
            aria-label="Projects" />
        </Tooltip>
        {/* <Tooltip label="How it Works" placement="right">
              <IconButton
                to="/howitworks"
                as={Link}
                color="gray.500"
                icon={<Icon as={HiLightningBolt} boxSize={4} />}
                aria-label="How it Works"
              />
            </Tooltip>
            <Tooltip label="Admin" placement="right">
              <IconButton
                to="/admin"
                as={Link}
                color="gray.500"
                icon={<Icon as={HiBriefcase} boxSize={4} />}
                aria-label="Admin"
              />
            </Tooltip> */}
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton
          onClick={onSettingsOpen}
          color="gray.500"
          icon={<Icon as={MdSettings} boxSize={5} />}
          aria-label="Settings" />
      </Tooltip>
    </VStack>
  );
};