import { Link } from "react-scroll";
const CHeroHome = () => {
  return (
    <>
      <div
        className="hero min-h-[100vh]"
        style={{
          backgroundImage: "url(/companies-home.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold">
              The Better FREE Way To Connect With The Right Manpower For Your
              Business
            </h1>
            <p className="mb-5 md:text-3xl text-lg">
              No Cost, No Hassle, No Brainer
            </p>
            <Link to="teach me s" smooth duration={500}>
              <button className="btn hover:scale-105 btn-secondary tracking-wider">
                Yes, teach me how!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CHeroHome;
