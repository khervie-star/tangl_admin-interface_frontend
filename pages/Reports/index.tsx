import Footer from "../../components/LandingPages/Home/Footer";
import ReportsContent from "../../components/LandingPages/Reports";
import NavBarTwo from "../../components/NavTwo";
import { BodyContainer } from "../../Global";

const Reports = () => {
  return (
    <>
      <NavBarTwo />
      <BodyContainer>
        <ReportsContent />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Reports;
