import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <div className="w-full bg-black py-24 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Premium Anime Experience
          </h2>
          <p className="text-lg tracking-wide mt-2 text-gray-400">
            Unlock exclusive conversations with your favorite characters
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Premium Basic",
              price: "0",
              bgColor: "bg-gray-900",
              borderColor: "border-gray-700",
              textColor: "text-white",
              priceColor: "text-white",
              buttonColor: "bg-white text-black hover:bg-gray-200",
              features: [
                "5 messages per day",
                "3 character choices",
                "Basic chat history",
                "Standard response time",
              ],
            },
            {
              name: "Premium Pro",
              price: "9.99",
              bgColor: "bg-white",
              borderColor: "border-white",
              textColor: "text-black",
              priceColor: "text-black",
              buttonColor: "bg-black text-white hover:bg-gray-800",
              popular: true,
              features: [
                "30 messages per day",
                "20 character choices",
                "Advanced chat history",
                "Priority response time",
              ],
            },
            {
              name: "Premium Elite",
              price: "29.99",
              bgColor: "bg-gray-900",
              borderColor: "border-gray-600",
              textColor: "text-white",
              priceColor: "text-white",
              buttonColor: "bg-white text-black hover:bg-gray-200",
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
              className={`${plan.bgColor} relative p-8 rounded-2xl shadow-lg hover:shadow-2xl ${plan.borderColor} border-2 transition-all transform hover:-translate-y-2 hover:scale-[1.03] duration-300 ${plan.popular ? 'lg:scale-105 lg:-translate-y-6' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border border-white">
                    Most Popular ⭐
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold tracking-tight mb-2 ${plan.textColor}`}>{plan.name}</h3>
                <div className="mb-4">
                  <span className={`text-5xl font-black ${plan.priceColor}`}>
                    ${plan.price}
                  </span>
                  <span className="text-lg font-semibold text-gray-600 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.textColor}`} />
                    <span className={`text-sm font-medium leading-relaxed ${plan.textColor}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl transform hover:scale-105 text-black ${plan.buttonColor}`}
              >
                {plan.price === "0" ? "Start Free Journey" : "Begin Adventure"}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            All plans include 7-day free trial • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </div>
  )
}
