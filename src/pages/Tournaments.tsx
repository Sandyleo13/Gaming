
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "League Champions Cup",
      game: "League of Legends",
      date: "April 25, 2025",
      time: "18:00 UTC",
      players: "32",
      prizePool: "$5,000",
    },
    {
      id: 2,
      title: "CS:GO Masters",
      game: "Counter-Strike 2",
      date: "April 28, 2025",
      time: "20:00 UTC",
      players: "16",
      prizePool: "$3,000",
    },
    {
      id: 3,
      title: "Valorant Elite",
      game: "Valorant",
      date: "May 1, 2025",
      time: "19:00 UTC",
      players: "24",
      prizePool: "$4,000",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Upcoming Tournaments</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="bg-[#2A2F3C] border-none text-white">
              <CardHeader>
                <CardTitle className="text-xl">{tournament.title}</CardTitle>
                <CardDescription className="text-gray-300">{tournament.game}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>{tournament.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-4 w-4" />
                    <span>{tournament.players} Players</span>
                  </div>
                  <div className="text-[#9b87f5] font-semibold">
                    Prize Pool: {tournament.prizePool}
                  </div>
                  <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
