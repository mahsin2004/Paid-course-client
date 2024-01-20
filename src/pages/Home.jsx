import { useEffect } from "react";
import Banner from "../component/Banner";
import Category from "../component/Category";
import ClientGuide from "../component/ClientGuide";
import NewsLetter from "../component/NewsLetter";
import Statistics from "../component/Statistics";

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Paid Courses'
  },[])
  return (
    <div className="bg-white dark:bg-black">
      <Banner></Banner>
      <Statistics></Statistics>
      <Category></Category>
      <ClientGuide></ClientGuide>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
