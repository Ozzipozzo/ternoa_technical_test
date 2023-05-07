import Collection from "@/components/Collection";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type NFTResponse = {
  nfts: Array<object>;
  pageKey: string;
};

const Home = () => {
  const [data, setData] = useState<NFTResponse | null>(null);
  const [pageKey, setPageKey] = useState<string>("");
  const [previousPageKeys, setPreviousPageKeys] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/nfts?page=${pageKey}`)
      .then((response) => response.json())
      .then((data: NFTResponse) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [pageKey]);

  const handlePreviousPage = () => {
    if (previousPageKeys.length > 0) {
      const newPreviousPageKeys = [...previousPageKeys];
      const lastPageKey = newPreviousPageKeys.pop();
      setPreviousPageKeys(newPreviousPageKeys);
      setPageKey(lastPageKey as string);
      console.log(previousPageKeys);
    }
  };

  const handleNextPage = () => {
    if (data && data.pageKey) {
      setPreviousPageKeys([...previousPageKeys, pageKey]);
      setPageKey(data.pageKey);
    }
  };

  return (
    <div>
      <Header />
      <Collection />
      {/* <button onClick={handlePreviousPage}>Page précédente</button>
      <button onClick={handleNextPage}>Page suivante</button> */}
    </div>
  );
};

export default Home;
