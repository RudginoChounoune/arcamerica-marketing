// src/components/HowItWorks.tsx

import PhoneMockup from "@/assets/Phone.png";
import {
  ShieldCheck,
  SlidersHorizontal,
  MessageCircle,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      className="
        bg-white
        text-black
        py-24
        scroll-snap-align-start
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-y-16 lg:gap-x-32 items-center">
          {/* LEFT: Text Content */}
          <div className="max-w-xl space-y-10 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-black to-blue-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>

            <p className="text-2xl text-black-600">
              UnitedInTalk connects verified Americans for meaningful political conversations
              safely, quickly, and without the noise.
            </p>

            <ul className="space-y-8">
              {/* 1 */}
              <li className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 mt-1 text-red-600" />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Verify You're Real
                  </h3>
                  <p className="text-base text-xl text-black-600">
                    Upload ID or voter info to confirm you're an actual person. No bots, no spam.
                  </p>
                </div>
              </li>

              {/* 2 */}
              <li className="flex items-start gap-4">
                <SlidersHorizontal className="w-6 h-6 mt-1 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Choose Your Preferences
                  </h3>
                  <p className="text-base text-xl text-black-600">
                    Set filters for who you want to talk to — based on region, identity, or ideology.
                  </p>
                </div>
              </li>

              {/* 3 */}
              <li className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 mt-1 text-green-600" />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Join the Conversation
                  </h3>
                  <p className="text-base text-xl text-black-600">
                    Hit the call button and connect instantly with someone new — and start talking.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: Phone Image */}
          <div className="flex justify-end items-center z-10 w-full lg:pl-12">
            <img
              src={PhoneMockup}
              alt="Phone UI showing UnitedInTalk"
              className="w-full max-w-xs sm:max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
