import { useNavigate } from "react-router-dom"
import { MemberWrapper, MemberTitle, MemberText, Flex, MemberButton } from "./styles"



const Membership = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/investors', {replace: true})
    }
    return(
        <MemberWrapper>
            <MemberTitle>Gain systematic access to investment opportunities</MemberTitle>
            <MemberText>Smart connections between Top-Tier Venture Capital, Private Equity funds and Real Estate Asset classes, for Global investors. </MemberText>
            <Flex>
                <MemberButton onClick={handleClick}>Apply for membership</MemberButton>
            </Flex>
        </MemberWrapper>
    );
}

export default Membership