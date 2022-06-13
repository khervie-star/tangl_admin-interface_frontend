import { Box } from "../Assets/Common"
import { LogBox, LogCard, LogText, TabNineContainer } from "./styles"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const TabNine = () => {
    return(
        <TabNineContainer>
            <LogCard>
                <LogBox />
                <LogText>Create an account or login</LogText>
            </LogCard>
            <HiOutlineArrowNarrowRight/>
            <LogCard>
                <LogBox />
                <LogText>Verify your credentials</LogText>
            </LogCard>
            <HiOutlineArrowNarrowRight/>
            <LogCard>
                <LogBox />
                <LogText>Initiate funding round</LogText>
            </LogCard>
        </TabNineContainer>
    )
}

export default TabNine