import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
  /* 
    // NOTE - useContextSelector e o problema de re-renderização
    Ao utilizar a extensão React DevTools, é possível perceber que o componente NewTransactionModal foi re-renderizado ao realizar uma busca. Isso aconteceu porque o contexto foi alterado — mesmo que a função utilizada no componente (createTransaction) não tenha mudado. Na verdade, o que foi atualizado foi apenas a lista de transações.
    Com a Context API padrão, não é possível indicar que um componente observe apenas uma parte específica do contexto (como uma função). Sempre que qualquer informação dentro do contexto for modificada, **todos** os componentes que o utilizam serão re-renderizados.
    O hook `useContextSelector` (lib) resolve esse problema. Com ele, passamos uma função como segundo argumento, que recebe o contexto e retorna **apenas** a informação que queremos observar. Dessa forma, o componente será re-renderizado **somente** quando essa informação específica for alterada.
  */
  
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction;
    }
  );
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });
  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data);
    reset();
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register("description")}
            type="text"
            required
            placeholder="Descrição"
          />
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            required
            placeholder="Preço"
          />
          <input
            {...register("category")}
            type="text"
            required
            placeholder="Categoria"
          />

          <Controller
            control={control}
            name="type"
            defaultValue="income"
            render={({ field }) => (
              <TransactionType
                onValueChange={(value) => field.onChange(value)}
                value={field.value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          ></Controller>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
