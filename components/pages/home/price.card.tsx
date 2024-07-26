import React from "react";
type data = {
  title: string;
  price: string;
  features: string[];
};
function Pcard({ data }: { data: data[] }) {
  return (
    <div className="flex flex-col gap-3 p-5 items-center  ">
      <div className="list-disc pl-6">
        {data?.map((data) => (
          <h1 key={data.title}>{data.title}</h1>
        ))}
      </div>
    </div>
  );
}

export default Pcard;
