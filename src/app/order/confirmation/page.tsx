"use client"

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, Package } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const OrderConfirmation = () => {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect after 10 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-22">
        <Card className="p-8 bg-white shadow-elegant border-sage/20 text-center animate-fade-in">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-dusty-rose to-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          {/* Header */}
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Order Confirmed!
          </h1>

          <p className="text-lg text-charcoal/70 font-body mb-8 leading-relaxed">
            Thank you for your purchase! We've received your order and will
            begin crafting your beautiful crochet pieces with love and care.
          </p>

          {/* Order Details */}
          <div className="bg-cream/50 rounded-xl p-6 mb-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-5 h-5 text-dusty-rose" />
              <h2 className="font-display text-lg font-semibold text-charcoal">
                What happens next?
              </h2>
            </div>

            <ul className="space-y-3 text-charcoal/70">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-dusty-rose rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  You'll receive an order confirmation email within the next few
                  minutes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-dusty-rose rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Your handmade pieces will be carefully crafted within 3-5
                  business days
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-dusty-rose rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  We'll send you tracking information once your order ships
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-dusty-rose rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Expected delivery: 7-10 business days from order date
                </span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-gradient-to-r from-dusty-rose to-terracotta hover:from-terracotta hover:to-dusty-rose text-white font-semibold py-3 rounded-full transition-all duration-500 transform hover:scale-105 shadow-elegant"
            >
              <Home className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>

            <p className="text-sm text-charcoal/50 font-body">
              Redirecting to homepage in 10 seconds...
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default OrderConfirmation;
