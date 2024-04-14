import { ReactTyped } from "react-typed";
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <main className="bg-background w-full h-screen px-5">
      <Navbar />
      <div className="flex w-full h-screen justify-center items-center">
        <p className="text-[4em] lg:text-[7em]">
          <ReactTyped
            strings={["WELCOME", "TO", "OUR", "QUIZ"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          ></ReactTyped>
        </p>
      </div>
    </main>
  );
};

export default index;
