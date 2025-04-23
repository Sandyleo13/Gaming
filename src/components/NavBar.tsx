
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Tournaments", path: "/tournaments" },
    { label: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav className="bg-[#1A1F2C] p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
            GamersArena
          </h1>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Desktop menu */}
          <div className="hidden lg:flex gap-6">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-white hover:text-[#9b87f5] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2 lg:hidden">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="text-white hover:bg-[#2A2F3C] p-2 rounded transition-colors w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
