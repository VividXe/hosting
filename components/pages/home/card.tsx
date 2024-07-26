import { MoveRight } from "lucide-react";

type CardData = {
  title: string;
  description: string;
  image: string;
};

function Card({ data }: { data: CardData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
      {data?.map((card: CardData) => (
        <div
          className="flex flex-col gap-3 p-5 items-center rounded overflow-hidden shadow-md border w-full"
          key={card.title}
        >
          <img className="w-24" src={card.image} alt="Card image" />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>

          <a
            href="/read"
            className=" font-semibold text-blue hover:text-blue-500 flex items-center gap-2"
          >
            Read More
            <MoveRight />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Card;
