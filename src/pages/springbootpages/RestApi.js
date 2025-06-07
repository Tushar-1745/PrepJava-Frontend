import React from 'react';
import { useNavigate } from "react-router-dom";
import mockInterviewQuestions from "../../data/mockInterviewQuestions";
function RestApi() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">What is REST API?</h1>

      <p className="mb-4">
        REST (Representational State Transfer) is a software architecture style that defines a set of rules for creating web services. RESTful APIs use HTTP methods to access and manipulate data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">Key Characteristics:</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Stateless – each request contains all the necessary information.</li>
        <li>Client-Server – separates user interface from backend.</li>
        <li>Cacheable – responses can be stored to improve performance.</li>
        <li>Uses standard HTTP methods – GET, POST, PUT, DELETE, PATCH.</li>
        <li>Works with resources – identified via URIs.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">Common HTTP Methods:</h2>
      <table className="w-full border text-left mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Method</th>
            <th className="p-2 border">Purpose</th>
            <th className="p-2 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">GET</td>
            <td className="p-2 border">Read data</td>
            <td className="p-2 border">/users</td>
          </tr>
          <tr>
            <td className="p-2 border">POST</td>
            <td className="p-2 border">Create new data</td>
            <td className="p-2 border">/users</td>
          </tr>
          <tr>
            <td className="p-2 border">PUT</td>
            <td className="p-2 border">Update existing data</td>
            <td className="p-2 border">/users/1</td>
          </tr>
          <tr>
            <td className="p-2 border">DELETE</td>
            <td className="p-2 border">Delete data</td>
            <td className="p-2 border">/users/1</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">Example REST API Response:</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
{`GET /users/1

Response:
{
  "id": 1,
  "name": "Tushar Madane",
  "email": "tushar@example.com"
}`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-500">REST vs SOAP:</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>REST is lightweight and uses JSON; SOAP uses XML and is more complex.</li>
        <li>REST is stateless and easy to implement; SOAP provides more security and strict standards.</li>
        <li>REST is more common for public APIs.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-blue-400">Next: Try creating a simple REST API using Spring Boot or Node.js!</h2>
    </div>
  );
}

export default RestApi;
