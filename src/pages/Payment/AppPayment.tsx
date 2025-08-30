import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* Hooks */
import { useForm } from "react-hook-form";
import useConfirmPayment from "@/hooks/Payment/useConfirmPayment";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

/* Components */
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import paymentCard from "@/assets/images/Payment-Card.png";

/**
 * Use Zod and react-form-hook to handle form validation for just the name and email.
 * Stripe handles validation for payment inputs with a special component "CardElement" and a hook useElements.
 * 
 * Backend suppose to connect with strapi, and provides client with the client secret and publishable key.
 * In our case it just provides the client secrets and the publishable key and a test credit card data is provided by strapi.
 * First we create a payment method using the payment inputs from "CardElement" component, and send to strapi to along
 * with billing details to generate a payment id tha will be used later to withdraw money from user's account.
 * Server expect us to just send this payment id along with the booking id created before when we checked out the booking.
 *  
 */

//Validate name and email fields, stripe takes care of it's inputs
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
});

//create a types out of the schema
type FormValues = z.infer<typeof schema>;

function AppPayment() {
  //get the paymentDetails (payment_id and client_secret) from the checkout page upon redirection with a state passed
  const paymentDetails = useLocation().state;

  console.log(paymentDetails);
  
  //create a stripe client, and element object contains CardElement data
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();
  const { mutate, isPending } = useConfirmPayment();
  
  //error and success states
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  //handle form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    if (!stripe || !elements) return;

    setPaymentError(null);
    
    //populate the elements obj wih Card Elements (inputs)
    const cardElement = elements.getElement(CardElement);
    
    //Create PaymentMethod with the card elements (we use test credit card from stripe website)
    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
      billing_details: {
        name: values.name,
        email: values.email,
      },
    });

    //handle PaymentMethod
    if (paymentError) {
      console.error("Failed Creating a Payment Method:", paymentError.message);
      setPaymentError(paymentError.message || "Failed to create payment method");
      return;
    }

    console.log(paymentMethod);

    //Use the client_secret to confirm payment with the PaymentMethod id
    const clientSecret = paymentDetails.client_secret;
    
    //second param of confirmCardPayment is an important obj with useful functionally
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id
    });

    if (confirmError) {
      console.error("Payment confirmation failed:", confirmError.message);
      setPaymentError(confirmError.message || "Couldn't Confirm Payment");
      return;
    }

    // Step 3: Payment succeeded, send payment id and payment method id to sever
    if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log("Payment succeeded:", paymentIntent);
      
 
      mutate({
        payment_method_id: paymentMethod.id, // The PaymentMethod ID we created
        payment_id: paymentDetails.payment_id, //The payment id givin to use before when we checked out
      }, {
        onSuccess: () => {
          setTimeout(() => {
            // navigate("/booking-success");
            setPaymentSuccess(true);
          }, 2000);
        },
        onError: (error) => {
          console.error("Server update failed:", error);
        }
      });
    }
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Payment Successful!
          </h2>
          <p className="text-green-700">Your booking has been confirmed and payment processed successfully.</p>
          <p className="text-sm text-green-600 mt-2">Redirecting you shortly...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      {/* Left Side Card Graphic */}
      <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-8">
        <img
          src={paymentCard}
          alt="Payment Card Graphic"
          className="rounded-xl w-full max-w-sm"
        />
      </div>

      {/* Payment Form */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
        
        {paymentError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong>Payment Failed:</strong> {paymentError}
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Name on Card</Label>
            <Input placeholder="John Doe" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label>Email</Label>
            <Input placeholder="john@example.com" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label>Card Details</Label>
            <div className="p-3 border rounded-md bg-white">
              <CardElement
                options={{ 
                  style: { 
                    base: { 
                      fontSize: "16px",
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  } 
                }}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!stripe || isPending}
            className="w-full"
          >
            {isPending ? "Processing..." : "Confirm Payment"}
          </Button>
        </form>

      </div>
    </div>
  );
}

export default AppPayment;