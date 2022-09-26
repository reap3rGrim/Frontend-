import React from "react"
import PageTitle from "../components/Typography/PageTitle"
import { Button, Card } from "@windmill/react-ui"

export default function MintNFT() {
    return (
        <div>
            <PageTitle>Mint An NFT</PageTitle>
            <Card className="text-gray-600 dark:text-gray-300">
                <p className="p-3">
                    Use this page to mint an NFT that you can sell on a Marketplace for some Goerli
                    ETH.
                </p>
            </Card>
            <br />
            <Button>Mint NFT</Button>
        </div>
    )
}
