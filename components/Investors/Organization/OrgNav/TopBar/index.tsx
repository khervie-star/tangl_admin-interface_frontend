import { DropIcon, NotificationIcon, SearchIcon } from "../../Icons";
import { Account, AccountInfo, SearchContainer, TopBarContainer } from "./styles";
import profile from './profile.jpeg'

const TopBar = () => {
  return (
    <TopBarContainer>
      <div>
      <SearchContainer>
        <input type="search" placeholder="Search" />
        <SearchIcon />
      </SearchContainer>
      </div>
      <Account>
        <NotificationIcon/>
        <AccountInfo>
          <img src={profile.src}/>
          <span>Blessing .O</span>
          <DropIcon/>
        </AccountInfo>
      </Account>
    </TopBarContainer>
  );
};

export default TopBar;
