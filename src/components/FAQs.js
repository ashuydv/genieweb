import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
  {
    title: "Accordion 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Who this course is for?",
    description:
      "Anyone who has a crave for Upskilling or has attended LetsUpgrade's Essential Courses",
  },
  {
    title: "Accordion 3",
    description:
      "Descripition 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Accordion 4",
    description:
      "Descripition 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Accordion 5",
    description:
      "Descripition 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Accordion 6",
    description:
      "Descripition 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const FAQs = () => {
  return (
    <div>
      <section className="section" style={{ marginTop: "-50px" }}>
        <div className="container is-fluid is-centered">
          <div className="card dark is-relative is-clipped is-shadowless has-background-link-light has-text-black has-radius-full w-full">
            <div className="card-content">
              <div className="columns is-centered is-vcentered py-6 pl-5">
                <div className="column is-6">
                  <div className="title is-size-2 has-text-centered has-text-black is-size-3-mobile">
                    FAQs
                  </div>
                  <div className="subtitle is-5 has-text-centered has-text-black is-size-6-mobile">
                    Know the most frequently asked questions
                  </div>
                </div>
              </div>
              <div className="px-4 pl-5">
                {data.map((item) => {
                  return (
                    <Accordion className="collapse card is-clipped is-shadowless has-radius-full mb-5">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="card-header"
                      >
                        <p className="card-header-title px-2">{item.title}</p>
                      </AccordionSummary>
                      <AccordionDetails className="card-content">
                        <div className="content px-2 py-3">
                          {item.description}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
