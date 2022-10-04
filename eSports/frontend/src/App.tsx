import axios from "axios";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import logo from "./assets/logo.svg";

import "./styles/main.css";

interface IGames {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<IGames[] | []>([]);

  useEffect(() => {
    axios("http://localhost:4000/games")
      .then((response) => setGames(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-[1080px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo" className="w-52" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game, index) => (
          <GameBanner
            key={index}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
