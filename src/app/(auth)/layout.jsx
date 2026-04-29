import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";

export const metadata = {
  title: "Register",
  description: "Dragon News Register Page",
};

const Authlayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default Authlayout;
