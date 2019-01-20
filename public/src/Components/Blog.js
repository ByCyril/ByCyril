import React, { Component } from "react";
import { Jumbotron, Container, Row } from "reactstrap";
class Blog extends Component {
  state = {
    articles: [
      {
        title: "Best Resources and Practices for Aspiring iOS Developers",
        description:
          "The vast amount of content and resources within the iOS Development community, has made this specialty the easiest and the most welcoming for beginners who want to pursue a career in Computer Science or just as a hobby. The only question is how and where do you start?",
        published: "Medium | January 19, 2019",
        link:
          "https://medium.com/@cyrilivargarcia/best-resources-and-practices-for-aspiring-ios-developers-2f4d1de7388f"
      },
      {
        title: "The State of Artificial Intelligence",
        description:
          "Recent advancements in Artificial Intelligence and super computers, set of worry that systems would one day supersede human intelligence; capable enough to advance on its own and escaping human control.",
        published: "Medium | October 25, 2018",
        link:
          "https://medium.com/@cyrilivargarcia/the-state-of-artificial-intelligence-305102d3d643"
      },
      {
        title: "The MCV Approach in iOS",
        description:
          "MVC is an arhitectural pattern of breaking up your code into three different partls Model-View-Controller. It separates your user interface code from your logic code; therefor making it easier to update and maintain.",
        published: "Medium | October 17, 2018",
        link:
          "https://medium.com/@cyrilivargarcia/the-mvc-approach-in-ios-1a058b54f9dd"
      },
      {
        title: "Build a Feed Forward Neural Network using Keras",
        description:
          "As I explore the area of Artificial Intelligence, I want to share what I've learned by example; creating a simple feed forward neural network with Keras.",
        published: "Medium | October 6, 2018",
        link:
          "https://medium.com/@cyrilivargarcia/tensorflow-and-keras-a-beginners-tutorial-by-a-beginner-abd4c90f814f"
      },
      {
        title: "Creating a Todo List App with CoreData, the Easy Way",
        description:
          "A basic tutorial on how to use a high level framework called CoreDataBC to interact with your Core Data models by application.",
        published: "Medium | September 28, 2018",
        link:
          "https://medium.com/@cyrilgarcia/creating-a-to-do-list-app-with-coredata-the-easy-way-4d40593064f0"
      }
    ]
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-3">Blog</h1>
            <div className="list-group list-group-flush">
              {this.state.articles.map(article => (
                <Row>
                  <a
                    href={article.link}
                    className="list-group-item list-group-item-action"
                    target="blank"
                  >
                    <h5>
                      <b>{article.title}</b>
                    </h5>
                    <p>{article.published}</p>
                    <p>{article.description}</p>
                  </a>
                </Row>
              ))}
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Blog;
