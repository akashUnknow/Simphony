import { columns } from "@/Data/columns";
import { mockData } from "@/Data/mockData";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 500);
  }, []);

  return (
   <div className="p-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Dashboard;
