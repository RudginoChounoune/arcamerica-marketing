import PhoneMockup from "@/assets/Phone.png";
import Logo from "@/assets/unitedintalk-full-logo.png.svg";
import Icon from "@/assets/flag-logo-rounded.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="
        min-h-screen
        flex flex-col lg:flex-row
        items-center
        justify-center
        gap-y-12 lg:gap-x-32
        px-6 md:px-12 lg:px-24
        bg-white
        text-black
        overflow-hidden
      "
    >
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 w-full py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center bg-white z-50">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={Logo} alt="UnitedInTalk Logo" className="h-10 w-auto object-contain mt-1" />
          </a>
        </div>
        <nav className="flex items-center gap-10 font-semibold text-lg">
          {["About", "Blog", "Contact", "Support Us", "Login"].map((label, idx) => (
            <a
              key={label}
              href="#"
              className={`relative hover:text-black ${
                idx === 0 ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* LEFT CONTENT */}
      <div className="flex-none max-w-2xl space-y-6 z-10 px-0 md:px-6 lg:px-12">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Talk <span className="text-red-600">Politics.</span><br />
          Create <span className="text-[#5F61E1]">Solutions.</span>
        </h1>
        <p className="text-2xl text-black-600">
          UnitedInTalk is your all-in-one debate and discussion platform made by Americans, for Americans.
        </p>
        <Button
          className="
            px-12 py-5
            text-lg font-extrabold tracking-wide uppercase
            border-2 border-black
            text-black bg-white
            rounded-full
            transition-colors duration-200
            hover:bg-black hover:text-white
            active:bg-black active:text-white
          "
          onClick={() => (window.location.href = '/signup')}
        >
          Join now
        </Button>
      </div>

      {/* RIGHT: Phone image */}
      <div className="flex justify-center items-center z-10">
        <img
          src={PhoneMockup}
          alt="UnitedInTalk phone preview"
          className="w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
        />
      </div>
    </section>
  );
}