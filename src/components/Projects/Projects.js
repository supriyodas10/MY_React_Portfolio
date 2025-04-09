import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import disease from "../../Assets/Projects/disease_prediction.png";
import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import landing from "../../Assets/Projects/landing.png";
import blinkit from "../../Assets/Projects/blinkit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Smart AI ChatBot"
              description="This is a smart chatbot. the features are you can ask anything, it can generate images,
              it also generate text from the image. technolgies used are reactjs, gemini api, huggingface api,vite framework"
              ghLink="https://github.com/supriyodas10/D_SmartAIBot.git"
              demoLink="https://d-smart-ai-bot.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Ecommerce Landing Page"
              description="React Restaurant Application This React application is a restaurant platform where users can explore menu items, 
              add items to their cart, place orders, and proceed to checkout.
              It features a responsive design and utilizes React Router for navigation."
             ghLink="https://github.com/supriyodas10/Food_Delivery_App.git"
             demoLink="https://khanapina001.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blinkit}
              isBlog={false}
              title="Blinkit Dashboard"
              description="This interactive dashboard provides a comprehensive overview of Blinkit key metrics,
              including total sales, number of items, average sales, and average rating."
             // ghLink="/"
             demoLink="https://www.linkedin.com/posts/supriyo-das-627050253_powerbi-dataanalytics-businessintelligence-activity-7293907941139656705-v91w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD56CH8BTAf_9o2Ho_6rfY1DxzEhBf3D1W4"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disease}
              isBlog={false}
              title="Disease_prediction"
              description="Used the disease, workout, symptoms, diets dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer
               Learning with 38 classes of various Disease.
                The model was successfully able to detect diseased and provide the eaxt diets,workouts and medicines.
                 I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/supriyodas10/Disease_Prediction_webapp.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition Attendence Portal"
              description="A Face recognition based attendance system automates attendance using facial recognition technology. 
              It captures real-time images , identifies individual with pre trained model, and log attendance accurately. 
              It is develop using python tkinter in visual studio code."
              ghLink="https://github.com/supriyodas10/FaceDetectionAttendence.git"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
