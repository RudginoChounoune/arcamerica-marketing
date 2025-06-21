import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MessageCircle, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    title: "Bot-Free Real Talk",
    icon: MessageCircle,
    color: "text-green-600",
    desc: "Join verified, bot-free spaces for real dialogue, where opinions differ, but respect stays.",
  },
  {
    title: "Verified Americans Only",
    icon: ShieldCheck,
    color: "text-red-600",
    desc: "Every user is identity-verified to keep bots, trolls, and chaos out of our conversations.",
  },
  {
    title: "Nationwide Voices",
    icon: Users,
    color: "text-[#5F61E1]",
    desc: "Bridge divides by connecting with real Americans from every state, background, and belief system.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-gradient-to-br from-white via-white to-gray-50 text-black py-24 scroll-snap-align-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold text-left mb-16 leading-tight max-w-2xl">
          <span className="bg-gradient-to-r from-red-600 via-black to-blue-600 bg-clip-text text-transparent">
            Why choose UnitedInTalk
          </span>
        </h2>

        {/* Card Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, icon: Icon, desc, color }) => (
            <Card
              key={title}
              className="flex flex-col text-left bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 h-full min-h-[260px]"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 mb-4 min-h-[72px]">
                <Icon className={`w-8 h-8 ${color}`} />
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>

              {/* CARD BODY TEXT */}
              <CardContent className="text-base md:text-xl text-black-600 p-0 leading-relaxed flex-1">
                {desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}