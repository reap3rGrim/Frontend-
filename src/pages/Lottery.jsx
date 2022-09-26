import React, { useState, useEffect } from "react"
import PageTitle from "../components/Typography/PageTitle"
import SectionTitle from "../components/Typography/SectionTitle"
import InfoCard from "../components/Cards/InfoCard"
import { Button } from "@windmill/react-ui"
import { ethers } from "ethers"
import { LotteryABI, LotteryContractAddresses } from "../abi"
import { useMoralis } from "react-moralis"

export default function Lottery() {
    const { account } = useMoralis()
    const { chainId: chainIdhex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdhex)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractAddress = LotteryContractAddresses[chainId][0]
    const contract = new ethers.Contract(contractAddress, LotteryABI, signer)
    const [entranceFee, setEntranceFee] = useState(0)
    const [numPlayers, setNumPlayers] = useState(0)
    const [recentWinner, setRecentWinner] = useState(0)

    async function getValues() {
        const entranceFeeFromCall = await contract.getEntranceFee()
        const numPlayersFromCall = await contract.getNumberOfPlayers()
        const recentWinnerFromCall = await contract.getRecentWinner()
        setEntranceFee(entranceFeeFromCall)
        setNumPlayers(numPlayersFromCall.toString())
        setRecentWinner(recentWinnerFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            getValues()
        }
    }, [isWeb3Enabled])

    async function enterRaffle() {
        await contract.enterRaffle({
            value: ethers.utils.parseEther("0.1"),
        })
    }

    return (
        <>
            <PageTitle>Smart Contract Lottery</PageTitle>
            <div className="ml-2">
                <SectionTitle>Statistics</SectionTitle>
                <InfoCard
                    title="Entrance Fee"
                    value={ethers.utils.formatUnits(entranceFee, "ether")}
                ></InfoCard>
                <br />
                <InfoCard title="Number of Players" value={numPlayers}></InfoCard>
                <br />
                <InfoCard title="Recent Winner" value={recentWinner}></InfoCard>
                <br />
                <Button onClick={enterRaffle}>Enter Raffle</Button>
            </div>
        </>
    )
}
