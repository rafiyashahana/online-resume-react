import React from "react";

const Right = () => {
  return (
    <div className="right">
      <div className="right-inner">
        <h4>Intro</h4>
        <div className="content">
          Passionate Front End developer with 3+ years of experience in creating
          SPA using React(JS/TS), Redux, HTML and CSS. Able to effectively self
          manage during independent projects, as well as collaborate in a team
          setting.
        </div>

        <h4>Skills</h4>

        <div className="content">
          <div className="skill-category">
            <strong>Languages: &nbsp;</strong>
            <span>
              HTML5, CSS3, JavaScript (ES6), Typescript, SASS, SQL Basics
            </span>
          </div>
          <div className="skill-category">
            <strong>Libraries &amp; Frameworks:&nbsp;</strong>
            <span> ReactJs, Redux, Redux-Thunk, StoryBook</span>
          </div>
          <div className="skill-category">
            <strong>Tools: &nbsp;</strong>
            <span>
              Git &amp; Github, Jest/Enzyme Testing, Firebase, RestAPI,
              Wordpress
            </span>
          </div>
        </div>

        <div>
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-category">
              <strong>React Developer, ALGOTRADY.IO</strong>
            </div>
            <h5 className="exp">December 2021 - Present</h5>

            <ul>
              <li class="list-items">
                Creation of components using Storybook in order to make the
                project consistent and easy to maintain.
              </li>
              <li class="list-items">
                Contributed in implementing the frontend for major features of
                the app including algorithmic trading, strategy development and
                backtesting.
              </li>
              <li class="list-items">
                Contributed to web based online portal codebase and UI Design
                system using CSS, SASS and Styled components.
              </li>
              <li class="list-items">
                Worked on Frontend full stack set of JS technologies using ES6,
                React, React Router, Redux, Thunk, Typescript in Agile/Scrum
                based project.
              </li>
              <li class="list-items">
                I was mainly responsible for creating and maintaining the
                reusable components, implementing new features and React
                routers.
              </li>
              <li class="list-items">
                Worked closely with the design team, product management, and
                development teams to create elegant, usable, responsive and
                interactive interfaces across multiple devices.
              </li>
            </ul>

            <div className="exp-category">
              <strong>Frontend Developer, FREELANCE</strong>

              <h5>December 2019 - October 2021</h5>
            </div>
            <ul>
              <li class="list-items">
                Designed, developed, and delivered more than a dozen successful
                website development and design projects for clients, normally
                using HTML, CSS/SASS, React, and Firebase if needed.
              </li>
              <li class="list-items">
                Coded HTML, CSS, and JavaScript for multiple businesses (form
                submission validations, splash pages, responsive redesigns,
                etc).
              </li>
              <li class="list-items">
                Designed web applications according to client briefs and
                modified designs to meet changes in client specifications.
              </li>
            </ul>
            <div className="exp-category">
              <strong>Wordpress Developer, FREELANCE</strong>

              <h5>December 2015 - September 2019</h5>
            </div>
            <ul>
              <li class="list-items">
                Developed dozens of custom websites for clients from small
                businesses and online stores.
              </li>
              <li class="list-items">
                Experience in the creation of, and issues surrounding,
                responsive websites, mobile-first design and device-agnostic
                development.
              </li>
              <li class="list-items">
                Extensive experience with WordPress theme, plugins and widgets.
              </li>
              <li class="list-items">
                Well versed in installing and configuring WordPress multisite
                and delivered well-made projects on time.
              </li>
            </ul>
            <div className="exp-category">
              <strong>Research Assistant</strong>
              <h5>March 2014 - June 2015</h5>
            </div>
            <ul>
              <li class="list-items">
                Assisted a research on the parallel implementation of
                classification algorithms based on cloud computing environment.
              </li>
              <li class="list-items">
                Built a HPC based algorithmic species extraction tool for
                automatic parallelization of program code.
              </li>
              <li class="list-items">
                Built a HPC based algorithmic species extraction tool for
                automatic parallelization of program code.
              </li>
              <li class="list-items">
                Evaluated the algorithmic species and validated the extended
                ADarwin by testing the tool against the benchmark suit HPCC.
              </li>
            </ul>
          </div>
        </div>
        <h4>EDUCATION</h4>
        <div className="content">
          <div className="skill-category">
            <strong>
              {" "}
              Bachelor of Engineering in Computer Science, BIT Mangalore, VTU
              University, India
            </strong>
            <p>2011-2015</p>
          </div>
          <div className="skill-category">
            <strong> International Indian School, Riyadh, KSA</strong>
            <p>1998-2010</p>
          </div>
        </div>
        <h4>CERTIFICATIONS</h4>
        <div className="content">
          <div className="skill-category">
            <strong> Interactivity with javascript, Coursera</strong>
            <p>September 2022</p>
          </div>
          <div className="skill-category">
            <strong>
              {" "}
              Complete React Developer in 2023 by ZTM academy, Udemy{" "}
            </strong>
            <p>February 2023</p>
          </div>
        </div>
        <h4>PUBLICATIONS</h4>
        <div className="content">
          <div className="skill-category">
            <a href="https://ieeexplore.ieee.org/abstract/document/7154772?reload=true">
              <strong>
                Parallel Implementation of Doolittle Algorithm using OpenMP,
                Advance Computing Conference (IACC) 2015 IEEE International{" "}
              </strong>
            </a>
            <p>Jul 13, 2015.</p>
          </div>
          <div className="skill-category">
            <a href="http://ijircce.com/get-current-issue.php?key=NTE=">
              <strong>
                Survey on Need of Loop Transformations for Automatic
                Parallelization, International Journal of Innovative Research in
                Computer and Communication Engineering- IJIRCCE
              </strong>
            </a>
            <p>October, 2014</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
