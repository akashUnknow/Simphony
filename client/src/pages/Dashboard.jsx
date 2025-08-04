import { columns } from "@/Data/columns";
import { mockData } from "@/Data/mockData";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DataTable from "./DataTable";
import Footer from "./Footer";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(mockData);
    }, 500); // Optional delay
  }, []);

  return (
    <div className="grid grid-cols-1 gap-2">
      <div>
        <Navbar />
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
