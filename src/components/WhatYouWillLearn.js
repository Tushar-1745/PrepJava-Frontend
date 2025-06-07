import React from "react";
import { motion } from "framer-motion";

const WhatYouWillLearn = () => {
  const topics = [
    {
      name: "Java",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "MySQL",
      image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    },
    {
      name: "Hibernate",
      image: "https://hibernate.org/images/hibernate-logo.svg",
    },
    {
      name: "Spring Boot",
      image: "https://spring.io/images/spring-logo-2022-dark-2e061c394f3b3cfe0dc2d3b643502b0a.svg",
    },
  ];

  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">What You Will Learn Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded-2xl flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={topic.image}
              alt={topic.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{topic.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
