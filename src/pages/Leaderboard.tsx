
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "ProGamer123", points: 2500, wins: 48 },
    { rank: 2, name: "ElitePlayer", points: 2350, wins: 45 },
    { rank: 3, name: "GameMaster", points: 2200, wins: 42 },
    { rank: 4, name: "VictoryQueen", points: 2100, wins: 40 },
    { rank: 5, name: "LegendKing", points: 2000, wins: 38 },
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Top Players</h1>
        
        <div className="bg-[#2A2F3C] rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-700 text-gray-300 font-semibold">
            <div>Rank</div>
            <div>Player</div>
            <div>Points</div>
            <div>Wins</div>
          </div>
          
          {topPlayers.map((player) => (
            <div 
              key={player.rank}
              className="grid grid-cols-4 gap-4 p-4 border-b border-gray-700 text-white hover:bg-[#353B4A] transition-colors"
            >
              <div className="flex items-center">
                {player.rank === 1 && <Trophy className="h-5 w-5 text-yellow-500 mr-2" />}
                {player.rank}
              </div>
              <div>{player.name}</div>
              <div>{player.points}</div>
              <div>{player.wins}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
