import heroVid from "/heroVideo.mp4";
import { RequestQuote } from "./RequestQuote.jsx";

export const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <video
        muted
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom">
        <source src={heroVid} type="video/mp4" />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-8 py-16 flex flex-col-reverse lg:flex-row lg:items-center gap-10 min-h-[calc(100vh-72px)]">
        {/* Heading */}
        <h2 className="text-white sm:text-6xl text-4xl font-semibold max-w-xl">
          Your Cargo, Our Commitment
        </h2>

        {/* Request a quote */}
        <div className="w-full lg:w-auto lg:ml-auto">
          <RequestQuote />
        </div>
      </div>
    </section>
  );
};
