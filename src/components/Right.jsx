import React from "react";

const Right = () => {
  return (
    <div className="right">
      <div className="right-inner">
        <h4>Intro</h4>
        <div className="content">
          Passionate Front End developer with 4+ years of experience in creating
          SPA using React(JS/TS), Redux, HTML and CSS. Proficient in
          collaborative teamwork, version control, and performance optimization.
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
                Created reusable components using Storybook to improve project
                consistency and maintenance.
              </li>
              <li class="list-items">
                Implemented crucial features of the application including
                algorithmic trading, strategy development, and backtesting while
                skillfully managing state through Redux, leading to a
                significant reduction of 5+ hours in users' time.
              </li>
              <li class="list-items">
                Collaborated with design, product management, and development
                teams to create elegant, responsive, and interactive interfaces
                across multiple devices.
              </li>
              <li class="list-items">
                Conducted thorough unit testing using Jest and Enzyme to ensure
                the quality and stability of the applications, and fixed any
                issues found during testing.
              </li>
            </ul>

            <div className="exp-category">
              <strong>Frontend Developer, FREELANCE</strong>

              <h5>December 2015 - October 2021</h5>
            </div>
            <ul>
              <li class="list-items">
                Successfully designed, developed, and delivered 12 website
                development and design projects using HTML, CSS/ SASS, React,
                and Firebase (if needed) to meet clients' needs and
                specifications.
              </li>
              <li class="list-items">
                Designed, developed, and maintained WordPress-based websites and
                blogs for 8 diverse clients, including small businesses,
                non-profits, and individuals.
              </li>
              <li class="list-items">
                Provided ongoing website maintenance and support to clients,
                including updates to WordPress core, themes, and plugins, as
                well as regular backups and security monitoring.
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
            <a href="https://www.udemy.com/certificate/UC-d8409787-b10c-47b6-af6f-e320e550c81b/">
              <strong>
                {" "}
                Complete React Developer in 2023 by ZTM academy, Udemy{" "}
              </strong>
            </a>
            <p>April 2023</p>
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
      <center style={{ marginBottom: "5%", color: "#654ea3" }}>
        -- Coded with ❤ by Rafiya Shahana using React --
      </center>{" "}
    </div>
  );
};

export default Right;
