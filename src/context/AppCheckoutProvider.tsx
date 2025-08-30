import { createContext, ReactNode, useContext, useEffect, useState } from "react";

/*

Ex: How to update checkout data using this context
const { updateCheckout } = useCheckoutContext<HotelBooking>();
updateCheckout({
    12345,                    
    "hotel",               
    });
*/

type CheckoutDataType = {
  booking_id: number | null;
  booking_type: string | null;
};

type CheckoutContextType<T> = {
  checkoutData: CheckoutDataType;
  updateCheckout: (booking_id: number, booking_type: string) => void;
  clearCheckout: () => void;
  isCheckoutEmpty: () => boolean;
};

const CheckoutContext = createContext<CheckoutContextType<any> | undefined>(
  undefined
);

function AppCheckoutProvider<T>({ children }: { children: ReactNode }) {
  // Better initial state - all null means "no checkout in progress"
  const [checkoutData, setCheckoutData] = useState<CheckoutDataType>({
    booking_id: null,
    booking_type: null,
  });

  useEffect(()=>{
    console.log(checkoutData);
  }, [checkoutData])

  const updateCheckout = (booking_id: number, booking_type: string) => {
    console.log(booking_id, booking_type);
    setCheckoutData({
      booking_id,
      booking_type,
    });
  };

  // Clear function for when checkout is cancelled/completed
  const clearCheckout = () => {
    setCheckoutData({
      booking_id: null,
      booking_type: null,
    });
  };

  // Add validation function
  const isCheckoutEmpty = () => {
    return (
      checkoutData.booking_id === null && checkoutData.booking_type === null
    );
  };

  const contextValue: CheckoutContextType<T> = {
    checkoutData,
    updateCheckout,
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
