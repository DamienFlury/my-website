import Head from "next/head";

type ChoiceCardProps = {
  title: string;
  body: string;
  buttonText: string;
};

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, body, buttonText }) => (
  <div className="shadow-lg p-4 m-4 rounded bg-white w-64">
    <h3 className="text-4xl">{title}</h3>
    <p>{body}</p>
    <button
      className="py-2 px-4 rounded text-white mt-4 w-full"
      style={{ background: "#0099ff" }}
    >
      {buttonText}
    </button>
  </div>
);

export default function Home() {
  return (
    <div>
      <div className="bg-primary flex items-center justify-center h-64">
        <h1 className="text-6xl text-white">Hey there!</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
        className="bg-primary"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,128L80,160C160,192,320,256,480,234.7C640,213,800,107,960,96C1120,85,1280,171,1360,213.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="flex" style={{ background: "#0099ff" }}>
        <div className="container bg-white rounded my-4 mx-auto p-4 shadow">
          <h2 className="text-4xl">Skills</h2>
          <div className="flex">
            <img className="w-32 m-4" src="/react-logo.png" alt="React" />
            <img className="w-32 m-4" src="/angular-logo.png" alt="Angular" />
            <img
              className="w-32 m-4"
              src="/net-core-logo.png"
              alt=".NET Core"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
