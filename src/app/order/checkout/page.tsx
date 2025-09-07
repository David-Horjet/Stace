"use client"

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const checkoutFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  address: z.string().min(5, "Please enter a complete address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  expiryDate: z.string().min(5, "Please enter expiry date (MM/YY)"),
  cvv: z.string().min(3, "Please enter CVV"),
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

const Checkout = () => {
  const { items, getTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Order submitted:", { ...data, items, total: getTotal() });

    toast({
      title: "Order placed successfully!",
      description:
        "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });

    // clearCart();
    router.push("/order/confirmation");
    setIsProcessing(false);
  };

  const shipping = 15;
  const tax = getTotal() * 0.08; // 8% tax
  const finalTotal = getTotal() + shipping + tax;

  if (items.length === 0) {
    return (
      <>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
            <h1 className="font-display text-3xl font-bold text-charcoal mb-4">
              Your cart is empty
            </h1>
            <p className="text-charcoal/70 font-body mb-8">
              Add some items to your cart before checking out
            </p>
            <Button onClick={() => router.push("/")}>Continue Shopping</Button>
          </div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4 text-dusty-rose hover:text-terracotta hover:bg-dusty-rose/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-charcoal">
            Checkout
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Contact Information */}
                <Card className="p-6 bg-white shadow-soft border-sage/20">
                  <h2 className="font-display text-xl font-semibold text-charcoal mb-6 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-dusty-rose" />
                    Contact Information
                  </h2>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Card>

                {/* Shipping Address */}
                <Card className="p-6 bg-white shadow-soft border-sage/20">
                  <h2 className="font-display text-xl font-semibold text-charcoal mb-6 flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-dusty-rose" />
                    Shipping Address
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main Street" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="San Francisco" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input placeholder="CA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="94105" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>

                {/* Payment Information */}
                <Card className="p-6 bg-white shadow-soft border-sage/20">
                  <h2 className="font-display text-xl font-semibold text-charcoal mb-6 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-dusty-rose" />
                    Payment Information
                  </h2>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="4111 1111 1111 1111"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </Card>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-dusty-rose to-terracotta hover:from-terracotta hover:to-dusty-rose text-white font-semibold py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-elegant disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isProcessing
                    ? "Processing..."
                    : `Complete Order - $${finalTotal.toFixed(2)}`}
                </Button>
              </form>
            </Form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8 space-y-6">
            <Card className="p-6 bg-white shadow-soft border-sage/20">
              <h2 className="font-display text-xl font-semibold text-charcoal mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flex gap-3"
                  >
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-cream">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-charcoal text-sm truncate">
                        {item.name}
                      </h3>
                      <div className="text-xs text-charcoal/60">
                        {item.size} • {item.color} • Qty: {item.quantity}
                      </div>
                      <div className="font-semibold text-dusty-rose">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-sage/20 pt-4 space-y-2">
                <div className="flex justify-between text-charcoal/70">
                  <span>Subtotal</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-sage/20 pt-2 flex justify-between font-display text-lg font-semibold text-charcoal">
                  <span>Total</span>
                  <span className="text-dusty-rose">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
