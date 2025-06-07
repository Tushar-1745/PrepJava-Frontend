import React from "react";

const Joins = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">INNER JOIN in SQL</h1>
      
      <p><strong>Definition:</strong> An INNER JOIN returns only the matching rows from both tables based on a specified condition. If there is no match, the rows are not included in the result.</p>
      
      <p className="mt-4"><strong>Description:</strong> INNER JOIN is the most commonly used join. It retrieves rows where there is at least one matching value in both tables. It works by comparing a specified column (or multiple columns) in two tables and returning only those rows where the values match. If a row in either table does not have a corresponding match in the other table, it is excluded from the result.</p>
      
      <h2 className="text-2xl font-semibold mt-6">Example: INNER JOIN in Action</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold">Table 1: Customers</h3>
          <table className="table-auto border-collapse border border-gray-400 w-full mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">CustomerID</th>
                <th className="border border-gray-400 p-2">Name</th>
                <th className="border border-gray-400 p-2">City</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">1</td><td className="border p-2">Alice</td><td className="border p-2">New York</td></tr>
              <tr><td className="border p-2">2</td><td className="border p-2">Bob</td><td className="border p-2">Los Angeles</td></tr>
              <tr><td className="border p-2">3</td><td className="border p-2">Charlie</td><td className="border p-2">Chicago</td></tr>
              <tr><td className="border p-2">4</td><td className="border p-2">David</td><td className="border p-2">Miami</td></tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 className="font-semibold">Table 2: Orders</h3>
          <table className="table-auto border-collapse border border-gray-400 w-full mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">OrderID</th>
                <th className="border border-gray-400 p-2">CustomerID</th>
                <th className="border border-gray-400 p-2">Product</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">101</td><td className="border p-2">1</td><td className="border p-2">Laptop</td></tr>
              <tr><td className="border p-2">102</td><td className="border p-2">3</td><td className="border p-2">Smartphone</td></tr>
              <tr><td className="border p-2">103</td><td className="border p-2">4</td><td className="border p-2">Tablet</td></tr>
              <tr><td className="border p-2">104</td><td className="border p-2">5</td><td className="border p-2">Headphones</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="mt-4">👉 Notice: Customer ID 5 is in the Orders table but does not exist in Customers.<br/>👉 Customer ID 2 (Bob) is in Customers but has not placed any order.</p>
      
      <h2 className="text-2xl font-semibold mt-6">SQL Query for INNER JOIN</h2>
      <pre className="bg-gray-800 text-white p-4 rounded mt-2">
        SELECT Customers.CustomerID, Customers.Name, Customers.City, Orders.OrderID, Orders.Product<br/>
        FROM Customers<br/>
        INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
      </pre>
      
      <h2 className="text-2xl font-semibold mt-6">Result: INNER JOIN Output</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">CustomerID</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">City</th>
            <th className="border border-gray-400 p-2">OrderID</th>
            <th className="border border-gray-400 p-2">Product</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">1</td><td className="border p-2">Alice</td><td className="border p-2">New York</td><td className="border p-2">101</td><td className="border p-2">Laptop</td></tr>
          <tr><td className="border p-2">3</td><td className="border p-2">Charlie</td><td className="border p-2">Chicago</td><td className="border p-2">102</td><td className="border p-2">Smartphone</td></tr>
          <tr><td className="border p-2">4</td><td className="border p-2">David</td><td className="border p-2">Miami</td><td className="border p-2">103</td><td className="border p-2">Tablet</td></tr>
        </tbody>
      </table>
      
      <h2 className="text-2xl font-semibold mt-6">Handling Duplicates & NULL Values</h2>
      <p className="mt-2">If a table has duplicate values, INNER JOIN will return multiple rows for each match. Also, NULL values in the joining column will be excluded.</p>
    </div>
  );
};

export default Joins;
