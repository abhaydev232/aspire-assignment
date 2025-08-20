import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a Card
export interface Card {
  name: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

// Context value shape
interface CardContextType {
  cards: Card[];
  addCard: (card: Card) => void;
}

// Create the context
const CardContext = createContext<CardContextType | undefined>(undefined);

// Hook to use CardContext
export const useCardContext = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

interface CardProviderProps {
  children: ReactNode;
}

// Context Provider Component
export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([
    {
      name: "John Doe",
      cardNumber: "1234 5678 9123 4567",
      expiry: "12/25",
      cvv: "123",
    },
    {
      name: "Jane Smith",
      cardNumber: "9876 5432 1098 7654",
      expiry: "07/24",
      cvv: "456",
    },
  ]);

  const addCard = (card: Card) => {
    setCards((prev) => [...prev, card]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

