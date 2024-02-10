import {
  As,
  Box,
  Button,
  ButtonProps,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  disabled?: boolean;
}

export const NavButton = (props: NavButtonProps): JSX.Element => {
  const { icon, label, isActive, disabled } = props;
  return (
    <Button
      variant="tertiary"
      justifyContent="start"
      backgroundColor={isActive ? "gray.400" : "none"}
      _hover={{ bg: "gray.400" }}
      marginBottom="10px"
      width="100%"
      size="sm"
      isDisabled={disabled}
    >
      <HStack spacing="2">
        <Icon
          as={icon}
          boxSize="4"
          color={isActive ? "black.500" : "gray.600"}
        />
        <Text
          color={"black.500"}
          fontWeight={isActive ? "600" : "500"}
          fontSize="sm"
        >
          {label}
        </Text>
        {disabled ? (
          <Box
            w="71px"
            h="20px"
            alignItems="center"
            alignContent="center"
            bgColor="gray.200"
            border="1px"
            borderRadius="4px"
            borderColor="gray.500"
            gap="10px"
          >
            <Text
              fontSize={10}
              color="gray.600"
              justifyContent="center"
              alignSelf="center"
            >
              weaving soon
            </Text>
          </Box>
        ) : (
          <></>
        )}
      </HStack>
    </Button>
  );
};
