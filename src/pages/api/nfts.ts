import type { NextApiRequest, NextApiResponse } from 'next'
import { Alchemy, Network } from "alchemy-sdk";

interface CustomApiRequest extends NextApiRequest {
  query: {
    page?: string;
  };
}

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export default async function getNFTs(req: CustomApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const contractAddress: string = process.env.CONTRACT_ADDRESS || '0x1';
    const pageSize = 100;
    const pageKey = req.query.page || '0';
    const opts = {
      pageKey: pageKey,
      omitMetadata: false,
      pageSize,
    };
    const nfts = await alchemy.nft.getNftsForContract(contractAddress, opts);
    res.status(200).json(nfts);

  } catch (error) {
    console.error("Error fetching NFTs:", error);
    res.status(500).json({ error: "Error fetching NFTs" });
  }
}


