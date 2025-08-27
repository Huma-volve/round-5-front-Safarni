import { createContext, ReactNode, useContext, useState } from "react";

/*
interface HotelBooking {
    roomId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
}

to update checkout data (don't forget to include the type of data):
const { updateData } = useCheckoutContext<HotelBooking>();

updateData(
    12345,                    
    "hotel",               
    { 
        roomId: "101",
        checkIn: "2024-01-15", 
        checkOut: "2024-01-17",
        guests: 2
    }
);
*/

type CheckoutDataType<T> = {
  booking_id: number | null;
  booking_type: string | null;
  data: T | null;
};

type CheckoutContextType<T> = {
  checkoutData: CheckoutDataType<T>;
  updateData: (booking_id: number, booking_type: string, data: T) => void;
  clearCheckout: () => void;
  isCheckoutEmpty: () => boolean;
};

const CheckoutContext = createContext<CheckoutContextType<any> | undefined>(
  undefined
);

function AppCheckoutProvider<T>({ children }: { children: ReactNode }) {
  // Better initial state - all null means "no checkout in progress"
  const [checkoutData, setCheckoutData] = useState<CheckoutDataType<T>>({
    booking_id: null,
    booking_type: null,
    data: null,
  });

  const updateData = (booking_id: number, booking_type: string, data: T) => {
    setCheckoutData({
      booking_id,
      booking_type,
      data,
    });
  };

  // Add clear function for when checkout is cancelled/completed
  const clearCheckout = () => {
    setCheckoutData({
      booking_id: null,
      booking_type: null,
      data: null,
    });
  };

  // Add validation function
  const isCheckoutEmpty = () => {
    return (
      checkoutData.booking_id === null &&
      checkoutData.booking_type === null &&
      checkoutData.data === null
    );
  };

  const contextValue: CheckoutContextType<T> = {
    checkoutData,
    updateData,
    clearCheckout,
    isCheckoutEmpty,
  };

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
}

function useCheckoutContext<T>(): CheckoutContextType<T> {
  const context = useContext(CheckoutContext);

  if (context === undefined) {
    throw new Error(
      "useCheckoutContext must be used within a CheckoutProvider"
    );
  }

  return context as CheckoutContextType<T>;
}

export { AppCheckoutProvider, useCheckoutContext };
