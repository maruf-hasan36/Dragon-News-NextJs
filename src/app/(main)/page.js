import { redirect } from "next/navigation";
const id = "01";

export const metadata = {
  title: "Home Page",
  description: "Best web Portal in Bangladesh",
};

export default async function Home() {
  redirect(`/category/${id}`);
}
