
export type GatewayMedia = {
    gateway: string;
};

export type Attributes = {
    trait_type: string;
    value: string;
};

export type RawMetadata = {
    attributes: Attributes[];
    name: string;
};

export type NFT = {
    media: GatewayMedia[];
    rawMetadata: RawMetadata;
    name: string;
};

export type NFTResponse = {
    nfts: NFT[];
    pageKey: string;
};