import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* CTA Heading */}
        <h2 className="text-4xl font-bold mb-4 text-secondary">
          Ready to Ship Your Cargo?
        </h2>
        <p className="text-lg mb-8 text-gray-500">
          Let us help you streamline your air cargo needs. Contact us today or
          get a quick quote!
        </p>
        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="border border-secondary text-secondary font-medium px-6 py-3 rounded-md hover:bg-gray-50 transition">
            Contact Us
          </Link>
          <a
            href="#request-quote"
            className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-secondary/90 transition">
            Get a Quick Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
