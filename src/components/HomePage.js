import React from "react";
import { PaginatedEstablishmentsTable } from "./PaginatedEstablishmentsTable";

const logoStyle = {
  width: "640px",
  height: "25px",
  margin: "20px auto",
};

export const HomePage = () => {
  return (
    <div>
      <header style={logoStyle} />
      <PaginatedEstablishmentsTable />
    </div>
  );
}
