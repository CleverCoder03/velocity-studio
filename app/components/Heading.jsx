import Marquee from "react-fast-marquee";

const Heading = ({ name, number, title }) => {
  return (
    <div>
      <div className="border-t mt-10">
        <div className="flex justify-between items-center font-inter mt-4">
          <div className="uppercase">({name})</div>
          <div className="rounded-4xl border px-4">{number}</div>
        </div>
      </div>
      {name === "Portfolio" ? (
        ""
      ) : (
        <Marquee
          speed={90}
          className="text-5xl mt-5 uppercase font-inter font-extrabold w-dvw flex justify-between"
        >
          <div className="ml-20 flex gap-28">
            <span>{title || name}</span>{" "}
            <span className="">{title || name}</span>{" "}
            <span className="">{title || name}</span>{" "}
            <span className="">{title || name}</span>{" "}
            <span className="">{title || name}</span>
          </div>
        </Marquee>
      )}
    </div>
  );
};

export default Heading;
