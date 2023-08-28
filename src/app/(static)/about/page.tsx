import { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return <About />;
};

export default page;
