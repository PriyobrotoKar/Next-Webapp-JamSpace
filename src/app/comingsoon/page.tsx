import "./style.css";
export default function ComingSoon() {
  return (
    <section className=" text-center space-y-6 flex flex-col justify-center flex-1 pb-8">
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-gray-100 via-orange-600 to-orange-400 leading-[8rem] text-transparent bg-clip-text animate-gradient">
        Coming Soon
      </h1>
      <div className="space-y-4">
        <p className="text-2xl">JamSpace is currently in development phase</p>
        <div className="text-gray-400">
          <p>
            This site will update automatically when there's a new feature
            release so hold tight.
          </p>
          <p> JamSpace will be live soon!</p>
        </div>
      </div>
    </section>
  );
}
