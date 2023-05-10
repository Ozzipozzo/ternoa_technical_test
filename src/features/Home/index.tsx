import Collection from "@/components/Collection";
import Favorites from "@/components/Favorites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Collection />
      <Favorites />
      <Footer />
    </>
  );
};

export default Home;
