import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar />
      <section className="relative z-10 py-20 bg-gray-950 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Free",
                features: [
                  "Basic functionality",
                  "Single Email Detection",
                  "Community support",
                ],
              },
              {
                name: "Pro",
                price: "$19/month",
                features: [
                  "Advanced features",
                  "Multi-email detection",
                  "Priority support",
                  "API access",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Full feature set",
                  "Unlimited Emails Detection",
                  "Dedicated support",
                  "Custom integrations",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-400">/month</span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
