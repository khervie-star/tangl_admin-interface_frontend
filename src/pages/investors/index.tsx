import { useState } from "react"
import Content from "../../components/Investors/Contents"
import OnBoardNavBar from "../../components/Investors/OnBoardNav"
import { InvestorWrapper } from "./styles"

const Investors = () => {
    const [page, setPage] = useState(1)
    return(
        <InvestorWrapper>
           <OnBoardNavBar/>
           <Content page={page} setPage={setPage}/>
        </InvestorWrapper>
    )
}

export default Investors