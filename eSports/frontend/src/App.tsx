import { MagnifyingGlassPlus } from "phosphor-react";

import logo from "./assets/logo.svg";

import "./styles/main.css";

function App() {
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
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" className="w-full h-full" alt="Logo do jogo" />

          <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
            <strong className="font-bold text-white block">League of Legends</strong>

            <span className="text-zinc-300 block">7 anúncios</span>
          </div>
        </a>

        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" className="w-full h-full" alt="Logo do jogo" />

          <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
            <strong className="font-bold text-white block">Dota 2</strong>

            <span className="text-zinc-300 block">5 anúncios</span>
          </div>
        </a>

        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" className="w-full h-full" alt="Logo do jogo" />

          <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
            <strong className="font-bold text-white block">Counter Strike</strong>

            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>

        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" className="w-full h-full" alt="Logo do jogo" />

          <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
            <strong className="font-bold text-white block">Nome do jogo</strong>

            <span className="text-zinc-300 block">3 anúncios</span>
          </div>
        </a>

        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" className="w-full h-full" alt="Logo do jogo" />

          <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
            <strong className="font-bold text-white block">Apex Legend</strong>

            <span className="text-zinc-300 block">2 anúncios</span>
          </div>
        </a>

        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" className="w-full h-full" alt="Logo do jogo" />

          <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
            <strong className="font-bold text-white block">World of Warcraft</strong>

            <span className="text-zinc-300 block">2 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black">
              Não encontrou seu duo?
            </strong>
            <p className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded transition-colors"
          >
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
