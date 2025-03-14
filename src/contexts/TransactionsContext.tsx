import { createContext, useEffect, useState } from "react";
interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  createdAt: string;
}
interface TransactionContextType {
  transactions: Transaction[];
}
export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);
interface TransactionsProviderProps {
  children: React.ReactNode;
}
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
