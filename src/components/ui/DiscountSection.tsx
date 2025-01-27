import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const DiscountSection = () => {
  // Set target date to 18 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 17);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative h-[400px] md:h-full overflow-hidden">
            <div className="absolute inset-0 bg-black">
              <img
                src="/lovable-uploads/ca90a503-f31f-4fce-95ae-acc0060a99ee.png"
                alt="Valentine's special candle"
                className="w-full h-full object-cover opacity-90 animate-fade-in"
              />
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-fade-up">
                Valentine Special Only
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="space-y-6">
              <div className="animate-fade-up">
                <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Limited Time Offer
                </div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
                  20-35% DISCOUNT ON SELECTED CANDLES
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Discover our premium collection of hand-crafted candles, perfect for creating a romantic atmosphere this Valentine's Day.
                </p>
              </div>

              <CountdownTimer targetDate={targetDate} />

              <div className="pt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <Link
                  to="/collections"
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;