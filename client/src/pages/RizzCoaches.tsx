import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Coach {
  id: number;
  name: string;
  nickname: string;
  alignment: string;
  image: string;
  auraLevel: number;
  rizzLevel: number;
  chaosLevel: number;
  dmSmoothness: number;
  redFlags: string[];
  greenFlags: string[];
  specialMoves: { name: string; description: string; emoji: string }[];
  fakeDM: string;
}

const coaches: Coach[] = [
  {
    id: 1,
    name: "Tanu",
    nickname: "Toxic Baddie",
    alignment: "Chaotic Good",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=500",
    auraLevel: 87,
    rizzLevel: 95,
    chaosLevel: 73,
    dmSmoothness: 89,
    redFlags: ["Leaves you on seen", "Tests your loyalty", "Drama queen energy"],
    greenFlags: ["Sends voice notes", "Remembers details", "Validates your feelings"],
    specialMoves: [
      { name: "Soft Launch Detector", description: "spots commitment-phobes in 3 DMs or less", emoji: "💅" },
      { name: "Boundary Queen", description: "teaches you to say no without apologizing", emoji: "👑" }
    ],
    fakeDM: "\"bestie we need to talk about your texting game 💀\""
  },
  {
    id: 2,
    name: "Jake",
    nickname: "Emotional Intelligence King",
    alignment: "Lawful Good", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500",
    auraLevel: 92,
    rizzLevel: 85,
    chaosLevel: 23,
    dmSmoothness: 94,
    redFlags: ["Overthinks everything", "Therapizes you", "Too emotionally available"],
    greenFlags: ["Actually listens", "Knows your love language", "Communicates feelings"],
    specialMoves: [
      { name: "Vulnerability Unlock", description: "gets people to open up in one conversation", emoji: "🔓" },
      { name: "Red Flag Scanner", description: "identifies toxic patterns before you catch feelings", emoji: "🚩" }
    ],
    fakeDM: "\"How are you feeling about this? Like, really feeling?\""
  },
  {
    id: 3,
    name: "Zara",
    nickname: "Body Language Goddess",
    alignment: "Chaotic Neutral",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500",
    auraLevel: 91,
    rizzLevel: 88,
    chaosLevel: 67,
    dmSmoothness: 82,
    redFlags: ["Reads too much into everything", "Overanalyzes your posture", "Judges your outfit"],
    greenFlags: ["Teaches confidence", "Spots lies instantly", "Makes you feel powerful"],
    specialMoves: [
      { name: "Micro-Expression Master", description: "reads what they're really thinking", emoji: "👁️" },
      { name: "Power Pose Activation", description: "instant confidence boost in any situation", emoji: "💪" }
    ],
    fakeDM: "\"the way they crossed their arms when you said that... we need to unpack this\""
  },
  {
    id: 4,
    name: "Marcus",
    nickname: "App Game Wizard",
    alignment: "Lawful Evil",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500",
    auraLevel: 79,
    rizzLevel: 91,
    chaosLevel: 45,
    dmSmoothness: 96,
    redFlags: ["Treats dating like a game", "Has too many strategies", "Calculates everything"],
    greenFlags: ["Gets you matches", "Optimizes your profile", "Knows all the algorithms"],
    specialMoves: [
      { name: "Algorithm Hack", description: "boosts your profile to the top of the stack", emoji: "📱" },
      { name: "Opener Generator", description: "creates pickup lines that actually work", emoji: "💬" }
    ],
    fakeDM: "\"your bio needs work. also delete pics 3, 5, and 7 immediately\""
  },
  {
    id: 5,
    name: "Luna",
    nickname: "No Contact Queen",
    alignment: "Chaotic Evil",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=500",
    auraLevel: 94,
    rizzLevel: 77,
    chaosLevel: 98,
    dmSmoothness: 71,
    redFlags: ["Ghosts people professionally", "Holds grudges forever", "Blocks without explanation"],
    greenFlags: ["Protects your peace", "No tolerance for disrespect", "Teaches self-worth"],
    specialMoves: [
      { name: "No Contact Nuke", description: "helps you block with emotional clarity", emoji: "💣" },
      { name: "Healing Era Activation", description: "turns your glow-up into their biggest regret", emoji: "✨" }
    ],
    fakeDM: "\"block them. don't explain. they know what they did.\""
  }
];

const RizzCoaches = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your{' '}
              <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
                Rizz Coaches
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Choose your dating sensei. Each coach has unique abilities and specializations to help you level up your game.
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {coaches && coaches.length > 0 ? coaches.map((coach) => (
              <div 
                key={coach.id} 
                className="bg-gradient-to-br from-dark-card via-dark-card to-purple-900/20 rounded-3xl p-6 border border-gray-700 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-pink/20 hover:scale-105 relative overflow-hidden"
              >
                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-45deg from-transparent via-neon-pink/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                {/* Coach Identity Section */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-16 h-16 rounded-full border-2 border-neon-pink object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{coach.name}</h3>
                      <p className="text-neon-pink font-semibold text-sm">{coach.nickname}</p>
                      <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white mt-1">
                        {coach.alignment}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Aura Meter Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-bold">Aura Level</span>
                    <span className="text-neon-pink font-bold text-lg">{coach.auraLevel}/100</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-pink to-purple-500 rounded-full transition-all duration-1000 animate-pulse"
                      style={{ width: `${coach.auraLevel}%` }}
                    />
                  </div>

                  {/* Sub-meters */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm flex items-center gap-1">💘 Rizz</span>
                      <div className="flex-1 mx-2 bg-gray-700 rounded-full h-2">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: `${coach.rizzLevel}%` }} />
                      </div>
                      <span className="text-xs text-white">{coach.rizzLevel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm flex items-center gap-1">💀 Chaos</span>
                      <div className="flex-1 mx-2 bg-gray-700 rounded-full h-2">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${coach.chaosLevel}%` }} />
                      </div>
                      <span className="text-xs text-white">{coach.chaosLevel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-sm flex items-center gap-1">✍️ DM Game</span>
                      <div className="flex-1 mx-2 bg-gray-700 rounded-full h-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${coach.dmSmoothness}%` }} />
                      </div>
                      <span className="text-xs text-white">{coach.dmSmoothness}</span>
                    </div>
                  </div>
                </div>

                {/* Red Flags & Green Flags */}
                <div className="mb-6">
                  <div className="mb-3">
                    <h4 className="text-white font-bold text-sm mb-2">🚩 Red Flags</h4>
                    <div className="flex flex-wrap gap-1">
                      {coach.redFlags.map((flag, index) => (
                        <span key={index} className="px-2 py-1 bg-red-600/80 text-white text-xs rounded-full">
                          {flag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-2">💚 Green Flags</h4>
                    <div className="flex flex-wrap gap-1">
                      {coach.greenFlags.map((flag, index) => (
                        <span key={index} className="px-2 py-1 bg-green-600/80 text-white text-xs rounded-full">
                          {flag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Special Moves */}
                <div className="mb-6">
                  <h4 className="text-white font-bold text-sm mb-3">🎯 Special Moves</h4>
                  <div className="space-y-2">
                    {coach.specialMoves.map((move, index) => (
                      <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{move.emoji}</span>
                          <span className="text-neon-pink font-bold text-sm">{move.name}</span>
                        </div>
                        <p className="text-text-secondary text-xs">{move.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fake DM Quote */}
                <div className="mb-6">
                  <div className="bg-gray-800/70 rounded-xl p-3 border-l-4 border-neon-pink">
                    <p className="text-text-secondary text-sm italic">{coach.fakeDM}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="neon-button w-full text-white font-bold py-3 hover:scale-105 transition-transform duration-300">
                  Book Session ✨
                </Button>
              </div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-text-secondary text-lg">Loading coaches...</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RizzCoaches;