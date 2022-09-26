import React, { useEffect, useState } from "react"
import PageTitle from "../components/Typography/PageTitle"
import SectionTitle from "../components/Typography/SectionTitle"
import InfoCard from "../components/Cards/InfoCard"
import RoundIcon from "../components/RoundIcon"
import { PeopleIcon } from "../icons"
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui"
import { ERC20ABI } from "../abi"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"

export default function ERC20() {
    const { account } = useMoralis()
    const { chainId: chainIdhex, isWeb3Enabled } = useMoralis()
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const contract = new ethers.Contract(contractAddress, ERC20ABI, signer)
    const [supply, setSupply] = useState("")
    const [circulation, findCirculation] = useState("")
    const [balance, findbalance] = useState("")
    const [contractBalance, findContractbalance] = useState("")

    async function Mint() {
        // const mintAmount = await document.getElementbyId("mintValue").value
        await contract
            .connect(0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266)
            .transfer(account, 1000000)
        console.log("Minted Successfully")
    }

    async function values(contract) {
        const supply = await contract.totalSupply()
        const circulation = await contract.circulationAmount()
        const balance = await contract.balanceOf(account)
        const contractBalance = await contract.balanceOf(contractAddress)

        findCirculation(circulation.toString())
        findbalance(balance.toString())
        findContractbalance(contractBalance.toString())
        setSupply(supply.toString())
    }

    useEffect(() => {
        values(contract)
    }, [])

    console.log(supply)
    return (
        <>
            <PageTitle>ERC20 Token</PageTitle>
            <SectionTitle>Statistics</SectionTitle>
            <div className="flex flex-row justify-between">
                <InfoCard title="Max Token Supply" value={supply}>
                    <RoundIcon
                        icon={PeopleIcon}
                        iconColorClass="text-orange-500 dark:text-orange-100"
                        bgColorClass="bg-orange-100 dark:bg-orange-500"
                        className="mr-4"
                    />
                </InfoCard>
                <InfoCard title="Tokens in circulation" value={circulation}>
                    <RoundIcon
                        icon={PeopleIcon}
                        iconColorClass="text-orange-500 dark:text-orange-100"
                        bgColorClass="bg-orange-100 dark:bg-orange-500"
                        className="mr-4"
                    />
                </InfoCard>
                <InfoCard title="Amount of tokens you have" value={balance}>
                    <RoundIcon
                        icon={PeopleIcon}
                        iconColorClass="text-orange-500 dark:text-orange-100"
                        bgColorClass="bg-orange-100 dark:bg-orange-500"
                        className="mr-4"
                    />
                </InfoCard>
                <InfoCard title="Amount of tokens in contract" value={contractBalance}>
                    <RoundIcon
                        icon={PeopleIcon}
                        iconColorClass="text-orange-500 dark:text-orange-100"
                        bgColorClass="bg-orange-100 dark:bg-orange-500"
                        className="mr-4"
                    />
                </InfoCard>
            </div>
            <br />
            <SectionTitle>Token Functions</SectionTitle>
            <Label className="mt-4">
                <span>Mint</span>
                <div className="relative text-gray-500 focus-within:text-purple-600">
                    <input
                        className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="uint256 amount"
                        id="mintValue"
                    />
                    <button
                        onClick={Mint}
                        className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    >
                        Mint
                    </button>
                </div>
            </Label>
            <Label className="mt-4">
                <span>Balance Of</span>
                <div className="relative text-gray-500 focus-within:text-purple-600">
                    <input
                        className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="address _owner "
                    />
                    <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Check Balance
                    </button>
                </div>
            </Label>
            <Label className="mt-4">
                <span>Transfer </span>
                <div className="relative text-gray-500 focus-within:text-purple-600">
                    <input
                        className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="address _to, uint256 amount"
                    />
                    <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Mint
                    </button>
                </div>
            </Label>
        </>
    )
}
