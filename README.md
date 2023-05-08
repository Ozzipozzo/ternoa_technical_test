# NFT Gallery with Wallet Connection

This project is an NFT gallery built with TypeScript and Next.js that allows users to interact with the 20Mint collection. It fetches NFT data from an API, displays the NFTs on the front-end with pagination, and provides a wallet connection for users to sign transactions and interact with the server. Users can also like NFTs, and the liked status is saved across page refreshes. The project also includes a page to display which address(es) have liked each NFT.

## Features

- TypeScript and Next.js integration
- Fetches NFT data from the 20Mint collection using an API
- Displays NFTs with pagination, including image and properties
- Wallet connection with signature for user authentication
- Like system for NFTs with persistence
- Page displaying addresses that liked each NFT, including the number of likes

## Getting Started

### Prerequisites

- Node.js installed
- Alchemy API key

### Obtaining an Alchemy API Key

To obtain an Alchemy API key, you'll need to set up an app within the Alchemy platform. Make sure to choose the Ethereum Mainnet as the network for your app. For more information on setting up an app on Alchemy, please follow the [official documentation](https://docs.alchemy.com/alchemy/introduction/getting-started).


### Installation

1. Clone the repository

```
git clone https://github.com/Ozzipozzo/ternoa_technical_test
```

2. Install dependencies

```
npm install
```

3. Create a \`.env.local\` file in the root directory of the project

4. Copy the contents of the \`env.sample\` file into the \`.env.local\` file and replace the values with your Alchemy API key and contract address:

```
ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
CONTRACT_ADDRESS="0xB003ce92F3b2A8F3dd99207C351eAf05BC605262"
```

5. Run the development server

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Browse the NFT gallery and interact with the NFTs displayed. Connect your wallet to sign transactions and like NFTs. The liked status of NFTs will persist across page refreshes. Visit the dedicated page to see the addresses that have liked each NFT, as well as the total number of likes for each NFT.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

None
