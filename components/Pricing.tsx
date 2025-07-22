import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-400 to-blue-700 py-24 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Meet Your Anime Characters
          </h2>
          <p className="text-lg tracking-wide mt-2 text-white/90">
            Chat with your favorite anime characters
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Otaku Starter",
              price: "0",
              bgColor: "bg-slate-50",
              borderColor: "border-slate-200",
              textColor: "text-slate-600",
              priceColor: "text-slate-800",
              buttonColor: "bg-slate-600 hover:bg-slate-700",
              features: [
                "5 messages per day",
                "3 character choices",
                "Basic chat history",
                "Standard response time",
              ],
            },
            {
              name: "Anime Pro",
              price: "9.99",
              bgColor: "bg-rose-50",
              borderColor: "border-rose-300",
              textColor: "text-rose-700",
              priceColor: "text-rose-800",
              buttonColor: "bg-rose-600 hover:bg-rose-700",
              popular: true,
              features: [
                "30 messages per day",
                "20 character choices",
                "Advanced chat history",
                "Priority response time",
              ],
            },
            {
              name: "Legendary Weeb",
              price: "29.99",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-300",
              textColor: "text-purple-700",
              priceColor: "text-purple-800",
              buttonColor: "bg-purple-600 hover:bg-purple-700",
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
              className={`${plan.bgColor} relative p-8 rounded-2xl shadow-lg hover:shadow-2xl ${plan.borderColor} border-2 transition-all transform hover:-translate-y-2 hover:scale-[1.03] duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-rose-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
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
                    <span className="text-sm font-medium text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl transform hover:scale-105 text-white ${plan.buttonColor}`}
              >
                {plan.price === "0" ? "Start Free Journey" : "Begin Adventure"}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-sm">
            All plans include 7-day free trial • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </div>
  )
}
