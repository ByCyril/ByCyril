import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { Jumbotron, Container, Row } from "reactstrap";
class About extends Component {
  state = {
    education: [
      {
        id: 0,
        school: "San Jose State University",
        major: "BS in Statistics",
        years: "2018 - 2020",
        img: "sjsu.jpg"
      },
      {
        id: 1,
        school: "Evergreen Valley College",
        major: "AS in Mathematics",
        years: "2015-2018",
        img: "evc.jpg"
      },
      {
        id: 2,
        school: "James Lick High School",
        major: "High School Diploma",
        years: "2011-2015",
        img: "jlhs.jpg"
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
        years: "June 2018 - August 2018",
        img: "dma.png"
      },
      {
        id: 1,
        company: "theCoderSchool",
        position: "Instructor",
        location: "Cupertino, CA",
        description: "Taught basic programming to iOS Development",
        years: "June 2017 - July 2018",
        img: "tcs.png"
      },
      {
        id: 2,
        company: "UC, Santa Cruz",
        position: "Lead Academic Coach",
        location: "San Jose, CA",
        description:
          "Lead a group of Academic Coaches to mentor high school students regarding college and financial aid applications.",
        years: "September 2017 - March 2018",
        img: "ucsc.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        {/* <Jumbotron> */}
        <Container>
          <h1 className="display-3">About</h1>
          <div style={{ marginBottom: "20px" }}>
            <h2 className="display-4">Experience</h2>
            <hr className="my-3" />
            <Row>
              {this.state.experience.map(exp => (
                <Experience key={exp.id} exp={exp} />
              ))}
            </Row>
          </div>

          <div>
            <h2 className="display-4">Education</h2>
            <hr className="my-3" />

            <Row>
              {this.state.education.map(ed => (
                <Education key={ed.id} ed={ed} />
              ))}
            </Row>
          </div>
        </Container>
        {/* </Jumbotron> */}
      </div>
    );
  }
}

export default About;
