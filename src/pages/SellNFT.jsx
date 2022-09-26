import React from "react"
import PageTitle from "../components/Typography/PageTitle"
import { Label, Input, Button } from "@windmill/react-ui"

export default function SellNFT() {
    return (
        <div>
            <PageTitle>Sell Your NFTs!</PageTitle>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                    <span>NFT Address</span>
                    <Input
                        className="mt-1 form-input"
                        placeholder="0x0000000000000000000000000000000000000000"
                    />
                </Label>
                <br />
                <Label>
                    <span>Token Id</span>
                    <Input className="mt-1 form-input" placeholder="Token Id" />
                </Label>
                <br />
                <Label>
                    <span>NFT Price</span>
                    <Input className="mt-1 form-input" placeholder="ETH" />
                </Label>
                <br />
                <Button type="link" layout="outline">
                    Submit
                </Button>
            </div>
        </div>
    )
}
