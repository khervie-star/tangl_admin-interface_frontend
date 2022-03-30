import { useState } from "react"
import Header from "../../components/Investors/Header"
import OnBoardNavBar from "../../components/Investors/OnBoardNav"
import { InvestorWrapper } from "./styles"

const Investors = () => {
    const [page, setPage] = useState(1)
    return(
        <InvestorWrapper>
           <OnBoardNavBar/>
           <Header page={page} setPage={setPage}/>
        </InvestorWrapper>
    )
}

export default Investors