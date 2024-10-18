import { Container, Grid, Typography } from "@mui/material";
import QrCode from "./QrCode.png";
import GooglePlay from "./GooglePlay.png";
import AppStore from "./AppStore.png";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <Container>
        <Grid container spacing={5} justifyContent="center">
          {/* Exclusive Section */}
          <Grid item sm={6} md={2.5}>
            <Typography className="font-bold" variant="h6" gutterBottom>
              ECommerce
            </Typography>
            <Typography className="font-medium" gutterBottom>
              {i18n.t("footer.subscribe")}
            </Typography>
            <Typography variant="body2">{i18n.t("footer.offer")}</Typography>
          </Grid>

          {/* Support Section */}
          <Grid item sm={6} md={2.5}>
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.support")}
            </Typography>
            <Typography gutterBottom>{i18n.t("footer.address")}</Typography>
            <Typography variant="body2">ananyaj138@gmail.com</Typography>
            <Typography variant="body2">7014626897</Typography>
          </Grid>

          {/* Account Links */}
          <Grid item sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.account")}
            </Typography>
            <ul className="list-none p-0">
              {["myAccount", "sign", "cart", "wishlist", "shop"].map((link) => (
                <li key={link}>
                  <Link onClick={scrollToTop} to={`/${link}`} className="footer-link">
                    {i18n.t(`footer.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Quick Links */}
          <Grid item sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.quickLinks")}
            </Typography>
            <ul className="list-none p-0">
              {["allProducts", "category", "usage", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <Link onClick={scrollToTop} to={`/${link}`} className="footer-link">
                    {i18n.t(`footer.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

      
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
