import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Mail, Repeat, Clock, Sparkles, Send, TrendingUp, UserPlus } from "lucide-react";

const faqItems = [
  { q: "Can I cancel anytime?", a: "Yes, there are no contracts and you can cancel at any time." },
  { q: "Do you offer support?", a: "Of course! Our support team is here 7 days a week." },
  { q: "Is there a free trial?", a: "Yes! You can try Sendflow free for 7 days with full access." },
];

const features = [
  { icon: Mail, title: "Automated Sequences", desc: "Set up multi-step email sequences to engage prospects." },
  { icon: Repeat, title: "Inbox Rotation", desc: "Rotate between multiple inboxes to improve deliverability." },
  { icon: Clock, title: "Smart Send Windows", desc: "Choose the optimal times for your emails to be sent." },
  { icon: Sparkles, title: "AI-Powered Personalization", desc: "Craft tailored messages based on lead data." },
];

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-24 px-6 bg-gradient-to-b from-blue-600 to-blue-100 text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cold email automation at scale</h1>
            <p className="text-lg mb-8">
              Sendflow helps you automate and optimize your outbound sales campaigns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="text-lg px-6 py-3 flex gap-2 items-center">
                <Send className="w-5 h-5" /> Get Started Free
              </Button>
              <Button variant="outline" className="text-lg px-6 py-3 border-blue-600 text-blue-600 bg-white hover:bg-blue-100 flex gap-2 items-center">
                <TrendingUp className="w-5 h-5" /> Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative aspect-video w-full max-w-xl mx-auto">
            <img
              src="/hero.png"
              alt="Sendflow hero visual"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Features, Testimonials, Pricing, FAQ, Footer (Add here or modularize later) */}
    </main>
  );
}
