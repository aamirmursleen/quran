import Link from "next/link";

const learningResources = [
  {
    title: "Learn Arabic",
    description: "Start reading Quran in Arabic. Step-by-step lessons for beginners.",
    icon: "🔤",
    features: ["Alphabet basics", "Grammar rules", "Quranic Arabic"],
    href: "/learn/arabic",
    buttonText: "Start Learning",
  },
  {
    title: "Islamic Studies",
    description: "Comprehensive courses on Islam. From beginner to advanced levels.",
    icon: "📖",
    features: ["Video lectures", "PDF guides", "Quiz tests"],
    href: "/learn/islamic-studies",
    buttonText: "Browse Courses",
  },
  {
    title: "Video Lectures",
    description: "Watch Islamic lectures by renowned scholars. HD quality videos.",
    icon: "🎬",
    features: ["Various topics", "English subtitles", "Free access"],
    href: "/lectures",
    buttonText: "Watch Videos",
  },
];

export function LearningResourcesSection() {
  return (
    <section id="learning" className="px-6 py-16 sm:px-12 bg-gradient-to-b from-[#0D7377]/5 to-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D7377] mb-4 font-display">
            🎓 Guided learning resources
          </h2>
          <p className="text-lg text-[#2C3E50]/70 max-w-2xl mx-auto">
            Free courses, study guides, and video lessons curated by qualified teachers so you can build consistent study habits.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {learningResources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border-2 border-[#0D7377]/10 hover:border-[#0D7377] transition-all hover:shadow-xl"
            >
              <div className="text-6xl mb-4 text-center">{resource.icon}</div>
              <h3 className="text-2xl font-bold text-[#0D7377] mb-3 text-center font-display">
                {resource.title}
              </h3>
              <p className="text-sm text-[#2C3E50]/70 mb-4 text-center">
                {resource.description}
              </p>
              <ul className="space-y-2 mb-6">
                {resource.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-[#2C3E50]">
                    <span className="text-[#0D7377]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={resource.href}
                className="block w-full py-3 text-center bg-gradient-to-r from-[#0D7377] to-[#4DB8B8] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-md"
              >
                {resource.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0D7377] to-[#4DB8B8] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-display">
                💡 Why Learn With Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold">100% Free Forever</p>
                    <p className="text-sm text-white/80">No hidden fees or subscriptions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold">Learn At Your Pace</p>
                    <p className="text-sm text-white/80">Study anytime, anywhere</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold">Authentic Knowledge</p>
                    <p className="text-sm text-white/80">Verified by qualified scholars</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold mb-3">Ready to Start?</h4>
                <p className="text-white/90 mb-6">
                  Join thousands of students learning Islam online
                </p>
                <Link
                  href="/learn"
                  className="inline-block px-8 py-4 bg-white text-[#0D7377] rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
