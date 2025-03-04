import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
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

            <Dialog.Portal>
              <Dialog.Overlay className="overlay" />
              <Dialog.Content className="content">
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
};
