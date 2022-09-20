interface IGameBanner {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner(props: IGameBanner) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} className="w-full h-full" alt={props.title} />

      <div className="pt-16 px-4 pb-2 bg-game-gradient absolute right-0 left-0 bottom-0">
        <strong className="font-bold text-white block">{props.title}</strong>

        <span className="text-zinc-300 block">
          {props.adsCount} anúncio{props.adsCount > 1 ? "s" : ""}
        </span>
      </div>
    </a>
  );
}
