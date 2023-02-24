/* eslint-disable react/no-children-prop */
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input as ChakraInput,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  leftIcon: ReactNode;
  rightIcon?: ReactNode | null;
  onClick?: () => void;
}

export function Input({
  type = "text",
  placeholder,
  leftIcon,
  rightIcon,
  onClick,
}: InputProps) {
  return (
    <div>
      <FormControl minW="300px">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={leftIcon} />
          <ChakraInput type={type} placeholder={placeholder} />
          {rightIcon && (
            <InputRightElement width="2rem">
              <Button
                h="1.75rem"
                size="sm"
                p="0"
                bg="transparent"
                onClick={onClick}
                _hover={{
                  bg: "none",
                }}
              >
                {rightIcon}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    </div>
  );
}
