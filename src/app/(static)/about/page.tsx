import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return <About />;
};

export default page;
