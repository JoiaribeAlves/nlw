import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Input } from "./components/form/Input";
import logo from "./assets/logo.svg";

import "./styles/main.css";
import { GameController } from "phosphor-react";

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
    fetch("http://localhost:4000/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  type="text"
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPLaying">Joga há quantos anos?</label>
                  <Input
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input type="text" id="discord" placeholder="Usuário#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Domingo"
                    >
                      D
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Segunda"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Terça"
                    >
                      T
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quarta"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quinta"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sexta"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sábado"
                    >
                      S
                    </button>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" id="hourStart" />
                    <Input type="time" id="hourEnd" />
                  </div>
                </div>
              </div>

              <div className="my-2 flex gap-2 text-sm">
                <Input type="checkbox" id="useChannel" />
                <label htmlFor="useChannel">
                  Costumo me conectar ao chat de voz
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold transition-colors"
                >
                  Cancelar
                </Dialog.Close>

                <button
                  type="submit"
                  className="flex items-center gap-3 bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold transition-colors"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
