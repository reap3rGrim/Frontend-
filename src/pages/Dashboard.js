import React, { useState, useEffect } from "react"

import { Card, CardBody } from "@windmill/react-ui"

import CTA from "../components/CTA"
import InfoCard from "../components/Cards/InfoCard"
import ChartCard from "../components/Chart/ChartCard"
import { Doughnut, Line } from "react-chartjs-2"
import ChartLegend from "../components/Chart/ChartLegend"
import PageTitle from "../components/Typography/PageTitle"
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, GithubIcon } from "../icons"
import RoundIcon from "../components/RoundIcon"
import response from "../utils/demo/tableData"
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
} from "@windmill/react-ui"

import {
    doughnutOptions,
    lineOptions,
    doughnutLegends,
    lineLegends,
} from "../utils/demo/chartsData"

function Dashboard() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    // pagination setup
    const resultsPerPage = 10
    const totalResults = response.length

    // pagination change control
    function onPageChange(p) {
        setPage(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
    }, [page])

    return (
        <>
            <PageTitle>Dashboard</PageTitle>
            <div className="grid gap-6 mb-8 ">
                <Card>
                    <CardBody>
                        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                            Hi there!
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            {" "}
                            This site contains various Web 3 Projects built by me. The projects
                            include everything from basic contracts such as ERC20 Tokens to Defi,
                            Flash Loans, NFTs and more. The projects currently live here include:
                            <ul className="list-disc p-6">
                                <li>Smart Contract Lottery</li>
                                <li>NFT Marketplace</li>
                                <li>Defi Contracts for Borrowing and Flashloans</li>
                                <li>ERC20 Token</li>
                                <li>DAO</li>
                            </ul>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Just connect a Metamask wallet using the connect button on the upper
                            right and start exploring.
                            <br />
                            <br />
                            Note: The lottery contract is fully functional in a hardhat
                            environment. Currently working on making the rest functional
                            <br />
                            <br />
                            Happy hacking!{" "}
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Dashboard
