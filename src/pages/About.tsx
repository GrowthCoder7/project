import { Heart, Star, Lightbulb, Shield, Target } from "lucide-react";
import Section from "../components/Section";
import ValueCard from "../components/ValueCard";
import hero from "../assets/images/4.png";
import about1 from "../assets/images/About1.png"
import about2 from "../assets/images/About2.png"
import about3 from "../assets/images/About3.png"

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Luxury Candle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative h-full flex flex-col items-baseline justify-center text-white text-center ">
          <h1 className="text-5xl text-[#d4b4a4] font-bold md:text-[93px] font-serif mb-6 animate-float">
            <p className="font-[1000] relative mt-32">Candlings</p>
            <p className="ml-24 pl-2 mt-5">by DiShane</p>
          </h1>
          <p className="text-xl md:text-3xl  max-w-3xl mx-auto">
            "Discover the essence within you, let it ignite your spirit, and shine your brightest light upon the world."
          </p>
        </div>
      </section>

      <Section title="Our Story">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-base">
            <ul className="text-brown-dark space-y-4 list-disc pl-4">
              <li>
              There is a wonderful story behind the birth of Candlings by DiShane. It’s great to see how your thought of sending a meaningful gift to your partner in a long-distance relationship led to the creation of a company that focuses on emotions, brightness, and luxury.
              </li>
              <li>
              By recognizing the importance of senses in creating a memorable gifting experience, you decided to incorporate two senses: sight and smell. We believe that emotions are valuable indicators but should not dictate our actions, which is an insightful perspective.
              </li>
              <li>
              Candlings by DiShane aims to enhance the environment and emotions through the power of fragrances. Just like we wear perfumes on our bodies and clothes to feel more comfortable, you want to bring the element of fragrances to our surroundings.
              </li>
              <li>
              This approach emphasizes the significance of vibrant and bright energy in creating joy and comfort.
              </li>
              <li>We use soy wax grade 464 in our candles which reflects our commitment to sustainability and environmental friendliness. Soy wax, particularly grade 464, is a popular choice among environmentally conscious candle makers because of its renewable nature and its ability to produce high-quality candles.</li>
              <li>Incorporating fragrances sourced from different parts of the world, including Australia, adds a unique and diverse dimension to your candle products.</li>
              <li>Fragrances can evoke emotions, memories, and experiences, and by sourcing scents from various regions, we are offering a sensory journey that connects them with different cultures and places.</li>
              <li>Candlings by DiShane appears to be a unique and thoughtful brand that combines emotions, luxury, and sensory experiences through handmade candles.</li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <img
              src={about1}
              alt="Our Story"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Section>

      <Section title="Our Vision" dark className="text-[#d4b4a4]">
        <div className="grid md:grid-cols-2 gap-12 items-center text-base">
          <div className="relative h-[400px] order-2 md:order-1 ">
            <img
              src={about2}
              alt="Our Vision"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="prose prose-lg prose-invert order-1 md:order-2">
            <ul className="space-y-4 list-disc pl-4">
              <li>
              Creating a sense of belonging: The vision is to enable every individual to create an environment where they feel a sense of belonging and comfort. This emphasizes the importance of personal spaces and the impact they have on our well-being.
              </li>
              <li>
              Adding essence to brightness: Candlings by DiShane aims to add an essence of fragrance and luxury to people’s lives, enhancing the brightness and vibrancy of their surroundings. This reflects the desire to create uplifting and enjoyable experiences.
              </li>
              <li>
              Global scale and women empowerment: The vision includes scaling the company to a global level and becoming the largest women-run organization in India and around the world. This highlights the commitment to empowering women and showcasing their capabilities in the business world.
              </li>
              <li>
              Pioneers in scented candles: As the biggest scented candle manufacturer in India, the company aspires to be the pioneer of scented candles in the coming years. This indicates a dedication to innovation, product development, and offering a diverse range of fragrances.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Our Mission">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-base">
            <ul className="text-brown-dark space-y-4 list-disc pl-4">
              <li>
              Our mission and goals align with empowering women’s entrepreneurship, supporting the Prime Minister of India’s vision of Aatma Nirbhar Bharat (Self-reliant India), and contributing to a sustainable environment.
              </li>
              <li>
              Pioneers in scented candles: Candlings by DiShane aims to be at the forefront of the scented candle industry, catering to the diverse needs of every individual. This demonstrates a commitment to innovation, customization, and providing customers a wide range of options.
              </li>
              <li>
              Empowering women’s entrepreneurship: Your organization is dedicated to empowering women by providing them with opportunities to work and become entrepreneurs on their own terms. By giving them a say in their work and fostering their independence, you contribute to women’s empowerment and economic growth.
              </li>
              <li>
              Aatma Nirbhar Bharat: Candlings by DiShane supports the vision of Aatma Nirbhar Bharat, which focuses on building a self-reliant India. You align with this national initiative by promoting entrepreneurship, creating job opportunities, and contributing to the local economy.
              </li>
              <li>
              Sustainable environment: The company is committed to sustainability by eliminating single-use plastics and leaving a positive impact on the environment. This highlights your concern for ecological responsibility and the planet’s long-term well-being.
              </li>
            </ul>
            <p className="mt-3 leading-5">By combining your commitment to women empowerment, entrepreneurship, national development, and environmental sustainability, Candlings by DiShane aims to create a positive and meaningful impact on society.</p>
          </div>
          <div className="relative h-[400px]">
            <img
              src={about3}
              alt="Our Mission"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Section>

      <Section title="Our Values" className="bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ValueCard 
            title="Women Empowerment" 
            icon={<Heart />}
            description="We believe in empowering women in the community by providing them with opportunities to make a living and have a voice."
          />
          <ValueCard 
            title="Seek Excellence" 
            icon={<Star />}
            description="We are committed to maintaining high standards of quality in all our hand crafted products."
          />
          <ValueCard 
            title="Integrity" 
            icon={<Shield />}
            description="We prioritize honesty, transparency, communication, and trust in our business practices and these are our personal values as a founder."
          />
          <ValueCard 
            title="Innovation" 
            icon={<Lightbulb />}
            description="Our company is driven by a spirit of hustle and aims to be a trendsetter in the industry. Our research and development team focuses on meeting customer needs to elevate home fragrance to another level."
          />
          <ValueCard 
            title="Accountability" 
            icon={<Target />}
            description="We hold ourselves accountable for our words and actions, valuing customer feedback, colleagues, community, and shareholders."
          />
        </div>
      </Section>
    </main>
  );
};

export default About;