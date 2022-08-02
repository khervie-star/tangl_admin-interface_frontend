import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {RiArrowRightLine} from "react-icons/ri"
import styled from "styled-components";
import { device } from "../../../../Global";

export const DarkFacebookIcon = styled(FaFacebook)`
  color: #324a64;
  font-size: 26px;
  cursor: pointer;
`;

export const DarkTwitterIcon = styled(FaTwitter)`
  color: #324a64;
  font-size: 26px;
  cursor: pointer;
`;

export const DarkInstagramIcon = styled(FaInstagram)`
  color: #324a64;
  font-size: 26px;
  cursor: pointer;
`;

export const DarkLinkedinIcon = styled(FaLinkedin)`
  color: #324a64;
  font-size: 26px;
  cursor: pointer;
`;

export const SearchIcon = styled(FiSearch)`
  color: #A0AABA;
  font-size: 20px;
  cursor: pointer;
`

export const ArrowDownIcon = styled(MdOutlineKeyboardArrowDown)`
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
`

export const ArrowRightIcon = styled(RiArrowRightLine)`
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  @media ${device.mobileL} {
    font-size: 14px;
  }
`