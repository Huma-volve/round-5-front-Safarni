"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import paymentCard from "@/assets/images/Payment-Card.png";
import useConfirmPayment from "@/hooks/Payment/useConfirmPayment";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
});

type FormValues = z.infer<typeof schema>;

function AppPayment({
  booking_id,
  clientSecret,
}: {
  booking_id: string;
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const { mutate, isPending } = useConfirmPayment();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    if (!stripe || !elements) return;

    // create stripe payment method
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
      billing_details: {
        name: values.name,
        email: values.email,
      },
    });

    if (error) {
      console.error(error.message);
      return;
    }

    mutate({
      booking_id,
      payment_method_id: paymentMethod?.id || "",
    });
  };

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
            <div className="p-3 border rounded-md">
              <CardElement
                options={{ style: { base: { fontSize: "16px" } } }}
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
