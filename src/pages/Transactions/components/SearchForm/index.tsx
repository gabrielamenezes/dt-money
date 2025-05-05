import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
/**
  // NOTE - Por que um componente renderiza?
 *  - Hooks changed (mudou estado, contexto, reducer)
 *  - Props changed (mudou props)
 *  - Parent component re-rendered (pai re-renderizou)
  
    // NOTE - Qual o fluxo de renderização?
    1. O react recria o HTML da interface daquele componente (virtual DOM)
    2. Compara o HTML recriado com o HTML anterior (virtual DOM)
    3. Se houver diferença, o react atualiza o HTML real (DOM) com as diferenças encontradas (reconciliação)

    // NOTE - O que é memo?
    Com o memo, o React vai adicionar um novo passo no fluxo de renderização e antes do passo citado acima. 
    0. Hooks changed, Props changed (deep comparison)
    0.1. Comparar com a versão anterior dos hooks e props (shallow comparison)
    0.2. SE mudou algo, ele vai permitir a nova renderização do componente (passo 1)
    Só vamos usar o MEMO em situações em que componentes tem o HTML muito pesado e que não mudam com frequência.
    
*/

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar transação"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
