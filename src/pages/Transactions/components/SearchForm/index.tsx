import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";

export function SearchFor() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar transação" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
