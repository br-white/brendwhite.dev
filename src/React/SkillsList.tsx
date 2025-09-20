import React from "react";
import {
  Code2,
  Cloud,
  Database,
  TestTube,
  type LucideIcon,
} from "lucide-react";

const CategoryIcons: Record<string, LucideIcon> = {
  "Languages & Frameworks": Code2,
  "Cloud & DevOps": Cloud,
  "Database & Middleware": Database,
  "Testing & Tools": TestTube,
};

const SkillsList = () => {
  const skills = {
    "Languages & Frameworks": [
      "T3 Stack, Node.js, React, Next.js, Angular, GraphQL",
      "Java, Spring Boot, Spring Framework, Quarkus",
      "Hibernate, JPA for enterprise applications",
      ".Net Core, ASP.NET Core, Entity Framework Core",
      "Blockchain, Solana, Ethereum, DeFi, Web3",
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

  return (
    <div className="text-left pt-3 md:pt-9 max-w-4xl mx-auto">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-8 text-center">
        My Arsenals 💪
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gradient-to-br from-[#1414149c] to-[#1a1a1a] rounded-2xl border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-[var(--sec)]/10"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--sec)] to-[#8b5cf6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(CategoryIcons[category], {
                    className: "w-6 h-6 text-white",
                    strokeWidth: 2,
                  })}
                </div>
                <h4 className="text-[var(--white)] text-xl font-semibold group-hover:text-[var(--sec)] transition-colors duration-300">
                  {category}
                </h4>
              </div>

              <div className="space-y-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 hover:bg-[#1a1a1a]/70 transition-all duration-200 group/item"
                  >
                    <div className="w-2 h-2 bg-[var(--sec)] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-[var(--white-icon)] text-sm leading-relaxed group-hover/item:text-[var(--white)] transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="h-1 bg-gradient-to-r from-[var(--sec)] via-[#8b5cf6] to-[var(--sec)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
