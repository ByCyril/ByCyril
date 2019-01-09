import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";

class AboutView extends Component {
  state = {
    education: [
      {
        id: 0,
        school: "San Jose State University",
        major: "BS in Statistics",
        years: "2018 - 2020"
      },
      {
        id: 1,
        school: "Evergreen Valley College",
        major: "AS in Mathematics",
        years: "2015-2018"
      },
      {
        id: 0,
        school: "James Lick High School",
        major: "High School Diploma",
        years: "2011-2015"
      }
    ],
    experience: [
      {
        id: 0,
        company: "Digital Media Academy",
        position: "Instructor",
        location: "Stanford University",
        description:
          "Taught Computer Science, iOS Development, Artificial Intelligence and Machine Learning",
        years: "June 2018 - August 2018"
      },
      {
        id: 1,
        company: "theCoderSchool",
        position: "Instructor",
        location: "Cupertino, CA",
        description: "Taught basic programming to iOS Development",
        years: "June 2017 - July 2018"
      },
      {
        id: 3,
        company: "University of California, Santa Cruz",
        position: "Lead Academic Coach",
        location: "San Jose, CA",
        description:
          "Lead a group of Academic Coaches to mentor high school students regarding college and financial aid applications.",
        years: "September 2017 - March 2018"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <h2>Experience</h2>
          {this.state.experience.map(exp => (
            <Experience key={exp.id} exp={exp} />
          ))}
        </div>
        <div>
          <h2>Education</h2>
          {this.state.education.map(ed => (
            <Education key={ed.id} ed={ed} />
          ))}
        </div>
      </div>
    );
  }
}

export default AboutView;
