import React from "react";

const Right = () => {
  return (
    <div className="right">
      <div className="right-inner">
        <h4>Intro</h4>
        <div className="content">
          Passionate Front End developer with 4+ years of experience, who is
          comfortable working with JavaScript, HTML/CSS to deliver exceptional
          customer experiences. Aspiring to combine broad background with strong
          technical skills to excel as a Front-End Developer.
        </div>

        <h4>Skills</h4>

        <div className="content">
          <div className="skill-category">
            <strong>Languages: &nbsp;</strong>
            <span>
              JavaScript (ES6), HTML5, CSS3, Typescript, SASS, SQL Basics
            </span>
          </div>
          <div className="skill-category">
            <strong>Libraries &amp; Frameworks:&nbsp;</strong>
            <span>Bootstrap, React, StoryBook</span>
          </div>
          <div className="skill-category">
            <strong>Tools: &nbsp;</strong>
            <span>Git &amp; Github, Firebase, RestAPI, Wordpress/CMS</span>
          </div>
        </div>

        <div>
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-category">
              <strong>React Developer, ALGOTRADY</strong>
            </div>
            <h5 className="exp">December 2021 - Present</h5>

            <ul>
              <li class="list-items">
                Worked with a team of frontend developers to create an
                algorithmic trading application using React.
              </li>
              <li class="list-items">
                Translated designs &amp; wireframes into high-quality code and
                wrote application interface code via Typescript following
                React.js workflows.
              </li>
              <li class="list-items">
                Developed the latest user-facing features using React.js and
                built reusable components that were easily maintainable,
                reducing the time spent on future development by 40%.
              </li>
              <li class="list-items">
                Collaborated closely with other developers on projects that
                require multiple people to complete tasks.
              </li>
              <li class="list-items">
                Managed brand consistency throughout the design and maintained &
                improved the company’s web application by adding more features
                and functionality.
              </li>
            </ul>

            <div className="exp-category">
              <strong>Frontend Developer, FREELANCE</strong>

              <h5>December 2019 - October 2021</h5>
            </div>
            <ul>
              <li class="list-items">
                Designed dynamic and browser compatible pages using HTML5, CSS3,
                Bootstrap, and Javascript.
              </li>
              <li class="list-items">
                Built single page applications (SPA), responsive web design, UI
                using HTML5 grid layouts, CSS3 media queries.
              </li>
              <li class="list-items">
                Designed frontend within object-oriented Javascript frameworks
                like React.
              </li>
              <li class="list-items">
                Managed to simultaneously work on multiple projects without
                deviation.
              </li>
            </ul>
            <div className="exp-category">
              <strong>Web/ Wordpress Developer, FREELANCE</strong>

              <h5>December 2015 - September 2019</h5>
            </div>
            <ul>
              <li class="list-items">
                Built static portfolio websites for different clients.
              </li>
              <li class="list-items">
                Determined the structure and design of web pages based on user
                requirements and balanced functional &amp; aesthetic designs.
              </li>
              <li class="list-items">
                Built a small scale inventory management application for clients
                that automates the billing routines and financial transactions.
              </li>
              <li class="list-items">
                Provided continued maintenance and fixing bugs.
              </li>
            </ul>
            <div className="exp-category">
              <strong>Research Assistant</strong>
              <h5>March 2014 - June 2015</h5>
            </div>
            <ul>
              <li class="list-items">
                Assisted a research that deals with the application of parallel
                computing technology and OpenMP to implement the classification
                of algorithms based on cloud computing environments.
              </li>
              <li class="list-items">
                Identified that all the algorithms cannot be classified using
                the currently existing patterns and created new set of access
                patterns.
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
            <strong> Complete Reactjs developer bootcamp, udemy </strong>
            <p>September 2022</p>
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
