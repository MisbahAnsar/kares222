import { Check } from "lucide-react";
import React from "react";

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 mt-24 sm:mt-32 relative">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
          Simple, Transparent Pricing
        </div>
        <p className="text-lg tracking-wider mt-2">
          Choose the perfect plan for your chatting needs
        </p>
      </div>

      <div className="absolute right-0 mt-[-300px] w-96 h-96 bg-gradient-to-r from-cyan-600 via-cyan-800 to-cyan-900 mix-blend-screen blur-3xl opacity-30"></div>

      {/* cards  */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Free",
            price: "0",
            features: [
              "5 messages per day",
              "3 character choices",
              "Basic chat history",
              "Standard response time",
            ],
          },
          {
            name: "Pro",
            price: "9.99",
            features: [
              "30 messages per day",
              "20 character choices",
              "Advanced chat history",
              "Priority response time",
            ],
          },
          {
            name: "Enterprise",
            price: "29.99",
            features: [
              "Everything in Pro",
              "API access",
              "Custom characters",
              "Advanced analytics",
            ],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="p-8 rounded-xl bg-gradient-to-br from-cyan-900 via-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
          >
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <h4 className="text-3xl font-semibold mt-2 mb-8">
              ${plan.price}
              <sub className="font-normal text-lg">/month</sub>
            </h4>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureLists) => (
                <li key={featureLists} className="flex items-center gap-1">
                  <Check className="w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
