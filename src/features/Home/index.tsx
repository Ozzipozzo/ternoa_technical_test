import Collection from "@/components/Collection";
import Favorites from "@/components/Favorites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Collection />
      <Favorites />
      <Footer />
    </div>
  );
};

export default Home;
