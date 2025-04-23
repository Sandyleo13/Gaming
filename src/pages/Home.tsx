
import { Trophy, Users, Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to <span className="text-[#9b87f5]">GamersArena</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the most competitive gaming tournaments and prove your skills against the best players worldwide.
        </p>
        <Button 
          onClick={() => navigate("/tournaments")}
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg"
        >
          Join Tournament
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2A2F3C] p-6 rounded-lg text-center">
            <Trophy className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Win Prizes</h3>
            <p className="text-gray-300">Compete for exciting prizes and recognition in the gaming community.</p>
          </div>
          <div className="bg-[#2A2F3C] p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-[#0EA5E9] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300">Join a thriving community of passionate gamers from around the world.</p>
          </div>
          <div className="bg-[#2A2F3C] p-6 rounded-lg text-center">
            <Gamepad className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Multiple Games</h3>
            <p className="text-gray-300">Participate in tournaments across various popular gaming titles.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
