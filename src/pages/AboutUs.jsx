import ContactSection from "../components/ContactSection";
import Team from "../components/Team";
import { useScroll, useSpring, motion } from "motion/react";

function AboutUs() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="mt-28">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#24a957",
        }}
        className="z-50"
      />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
            Về chúng tôi
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/portfolio/thought-catalog-gv-T-OjLe4c-unsplash.jpeg"
                alt="About Us"
                className="rounded-lg shadow-lg w-full md:w-3/4"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to [Your Company Name], where innovation meets
                excellence. We are dedicated to providing top-notch services and
                solutions to our valued customers, ensuring a seamless
                experience every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to drive success and growth for our clients
                through cutting-edge technology and exceptional customer
                service. With a team of passionate experts, we strive to exceed
                expectations and deliver outstanding results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join us on this exciting journey as we continue to create a
                meaningful impact and set new standards in the industry.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
              Our Mission, Vision, and Values
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-4">
                  Our Mission
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals and businesses by providing exceptional
                  solutions and fostering innovation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-4">
                  Our Vision
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading provider of innovative solutions that
                  inspire and drive global progress.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-4">
                  Our Values
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, excellence, and a customer-first mindset form the
                  foundation of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <ContactSection />
    </div>
  );
}

export default AboutUs;
