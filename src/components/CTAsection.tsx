export default function CTASection() {
    return (
      <section className="bg-gradient-to-br from-red-700 via-black to-blue-700 text-white py-24 scroll-snap-align-start">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-white to-blue-600 bg-clip-text text-transparent">
              Ready to join the conversation?
            </span>
          </h2>
  
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Sign up today to experience respectful political discourse with real, verified Americans.
            Speak freely, be heard.
          </p>
  
          <button
            onClick={() => (window.location.href = "/signup")}
            className="
              mt-6
              px-12 py-5
              text-lg font-extrabold tracking-wide uppercase
              border-2 border-black
              text-black bg-white
              rounded-full
              transition-colors duration-200
              hover:bg-black hover:text-white
              active:bg-black active:text-white
            "
          >
            JOIN UNITEDINTALK
          </button>
        </div>
      </section>
    );
  }