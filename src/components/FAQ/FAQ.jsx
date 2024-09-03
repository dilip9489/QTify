import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../FAQ/FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <Typography variant="h4" className={styles.faqTitle}>
        FAQs
      </Typography>

      <div className={styles.accordions}>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "black",
              color: "beige",
              border: "1px solid white",
              borderRadius: "6px",
              fontFamily: "Poppins, sans-serif",
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! it is 100% free but it is not free from ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordions1}>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "black",
              color: "beige",
              border: "1px solid white",
              borderRadius: "6px",
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
          >
            <Typography>Cam I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs for free, but subscribers can download and listen to songs
              offline!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
