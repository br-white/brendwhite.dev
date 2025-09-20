import React, { useState } from "react";

const CategoryIcons = {
  "Languages & Frameworks": (
    <svg
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  ),
  "Full Stack Development": (
    <svg
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"></path>
      <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path>
      <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z"></path>
    </svg>
  ),
  "Cloud & DevOps": (
    <svg
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.942 8.039c0.038-0.174 0.058-0.354 0.058-0.539 0-1.381-1.119-2.5-2.5-2.5-0.222 0-0.438 0.029-0.643 0.084-0.387-1.209-1.52-2.084-2.857-2.084-1.365 0-2.516 0.911-2.88 2.159-0.355-0.103-0.731-0.159-1.12-0.159-2.209 0-4 1.791-4 4s1.791 4 4 4h9.5c1.381 0 2.5-1.119 2.5-2.5 0-1.23-0.888-2.252-2.058-2.461zM6.5 12l-2.5-2.5 1-1 1.5 1.5 3.5-3.5 1 1-4.5 4.5z"></path>
    </svg>
  ),
  "Database & Middleware": (
    <svg
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
  ),
  "Testing & Tools": (
    <svg
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5 12H2v-2h17.5v2zm-17.5-4h17.5v-2H2v2zm0-4h17.5V9H2v2zm0-4h17.5V5H2v2zm0-4h17.5V1H2v2z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Languages & Frameworks": [
      "JS/TS, Node.js, React, Next.js, Angular",
      "Java, Spring Boot, Spring Framework, Quarkus",
      "Hibernate, JPA for enterprise applications",
      "T3 Stack specialization (Next.js, TypeScript, tRPC)",
    ],
    "Cloud & DevOps": [
      "AWS (Lambda, EC2, ECS, EKS, ELB, SQS, SNS, SES, Fargate)",
      "API Gateway, Cognito, EventBridge, Elastic Beanstalk",
      "CodePipeline, CodeDeploy, CloudFront, Kinesis, CDK",
      "Terraform, Docker, Kubernetes, Jenkins",
    ],
    "Database & Middleware": [
      "PostgreSQL, Amazon RDS, Oracle, MongoDB",
      "Cassandra, Amazon DynamoDB, Redis, Elasticsearch",
      "Message systems: Kafka, Amazon SQS",
      "MuleSoft integration & Anypoint Platform",
    ],
    "Testing & Tools": [
      "JUnit, Jest, Jasmine, Mocha, Mockito, Selenium",
      "Cypress, Cucumber, Postman, Spock, Geb, JMeter",
      "Agile, Microservices, REST APIs, CI/CD, TDD, BDD",
      "GitHub, GitLab, Bitbucket for version control",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
