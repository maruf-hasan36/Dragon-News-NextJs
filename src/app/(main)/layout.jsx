import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ Children }) => {
  return (
    <>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {Children}
    </>
  );
};

export default MainLayout;
