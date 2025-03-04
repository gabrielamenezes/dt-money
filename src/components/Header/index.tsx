import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "./NewTransactionModal";
export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
};
