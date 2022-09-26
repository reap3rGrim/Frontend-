import React from "react"
import { Card, CardBody } from "@windmill/react-ui"
import PageTitle from "../components/Typography/PageTitle"
import RoundIcon from "../components/RoundIcon"
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../icons"

export default function BuyNFT() {
    return (
        <div>
            <PageTitle>Buy NFTs</PageTitle>
            <Card>
                <div className="flex">
                    <RoundIcon
                        icon={ChatIcon}
                        iconColorClass="text-teal-500 dark:text-teal-100"
                        bgColorClass="bg-teal-100 dark:bg-teal-500"
                        className="mr-4"
                    />
                </div>
                <CardBody>
                    <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi
                        a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum
                        numquam, sed amet ratione! Ratione, nihil dolorum.
                    </p>
                </CardBody>
            </Card>
        </div>
    )
}
