import React, {useContext} from "react";
import {Typography, Grid, Paper, Box, Button} from "@mui/material";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                <Grid container spacing={3}>
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <Grid item sm={12} md={6} lg={4}>
                        <ExperienceCard
                          key={i}
                          isDark={isDark}
                          cardInfo={{
                            company: card.company,
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.companylogo,
                            role: card.role,
                            descBullets: card.descBullets
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
