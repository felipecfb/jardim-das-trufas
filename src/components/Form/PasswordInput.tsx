import { FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Input } from "./Input";

interface PasswordInputProps {
  showPassword: boolean;
  onClick: () => void;
}

export function PasswordInput({ showPassword, onClick }: PasswordInputProps) {
  return (
    <Input
      type={showPassword ? "text" : "password"}
      placeholder="Senha"
      leftIcon={<FaLock />}
      rightIcon={
        showPassword ? (
          <AiFillEye size="20" />
        ) : (
          <AiFillEyeInvisible size="20" />
        )
      }
      onClick={onClick}
    />
  );
}
