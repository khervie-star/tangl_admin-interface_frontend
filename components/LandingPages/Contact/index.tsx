import { IconGrid, LandingForm, LandingTitle } from "../Common";
import {
  DarkFacebookIcon,
  DarkInstagramIcon,
  DarkLinkedinIcon,
  DarkTwitterIcon,
} from "../Common/Icons";
import {
  ContactContainer,
  ContactFormContainer,
  ContactFormFooter,
  ContactGrid,
  ContactImage,
  ContactWrapper,
  SendMessage,
} from "./styles";
import ContactImg from "./Images/ContactImg.png";

const ContactContent = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <LandingTitle>Contact Us</LandingTitle>
        <ContactGrid>
          <div>
            <ContactFormContainer>
              <LandingForm>
                <label>Your Name</label>
                <input type="text" placeholder="Type or paste here" />
                <label>Your Email</label>
                <input type="text" placeholder="Type or paste here" />
                <label>Your Message</label>
                <textarea placeholder="Type or paste here"></textarea>
              </LandingForm>
              <SendMessage>Send Message</SendMessage>
              <ContactFormFooter>
                <span>Or Conatact us on:</span>
                <IconGrid>
                  <DarkFacebookIcon />
                  <DarkTwitterIcon />
                  <DarkInstagramIcon />
                  <DarkLinkedinIcon />
                </IconGrid>
              </ContactFormFooter>
            </ContactFormContainer>
          </div>
          <ContactImage>
            <img height="100%" src={ContactImg.src} />
          </ContactImage>
        </ContactGrid>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactContent;
