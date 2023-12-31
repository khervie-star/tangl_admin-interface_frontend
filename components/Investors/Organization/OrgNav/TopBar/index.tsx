import { DropIcon, NotificationIcon, SearchIcon } from "../../Icons";
import { Account, AccountInfo, SearchContainer, TopBarContainer } from "./styles";
import profile from './profile.jpeg'

const TopBar = () => {
  return (
    <TopBarContainer>
      <div>
      <SearchContainer>
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </SearchContainer>
      </div>
      <Account>
        <NotificationIcon/>
        <AccountInfo>
          <img  height="100%"src={profile.src}/>
          <span>Blessing .O</span>
          <DropIcon/>
        </AccountInfo>
      </Account>
    </TopBarContainer>
  );
};

export default TopBar;
