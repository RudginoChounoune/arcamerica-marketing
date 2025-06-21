// src/components/Banner.tsx

import FlagCircle from "@/assets/flag-circle.png"; // Replace with actual path
import Stripes from "@/assets/diagonal-stripes.png"; // Replace with actual path
import TalkText from "@/assets/talk-politics.png"; // Optional: stylized text

export default function Banner() {
  return (
    <section className="relative w-full h-[300px] bg-black overflow-hidden flex items-center justify-between px-6 md:px-12 lg:px-24">
      {/* LEFT: Flag + Text */}
      <div className="z-10 flex items-center gap-6">
        <img
          src={FlagCircle}
          alt="American Flag Circle"
          className="w-24 h-24 md:w-28 md:h-28 object-contain"
        />
        <div>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-snug">
            Talk <span className="text-red-600">Politics.</span>
          </h2>
          {/* Optional subheading */}
          <p className="text-white/70 text-base md:text-lg mt-2 max-w-sm">
            With real Americans. Without the noise.
          </p>
        </div>
      </div>

      {/* RIGHT: Diagonal Stripes */}
      <img
        src={Stripes}
        alt="Diagonal red and white stripes"
        className="absolute right-0 top-0 h-full w-[50%] object-cover pointer-events-none"
      />
    </section>
  );
}
