import MarqueeComponent from "react-fast-marquee";

const Marquee = MarqueeComponent.default || MarqueeComponent;

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-gray-100 p-3 text-lg font-semibold">
      <h2 className="bg-red-500 py-2 px-3 text-white">Latest</h2>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p>
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </p>
        <p>
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
