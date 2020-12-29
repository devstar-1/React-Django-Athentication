import React from "react";
import MainLayout from "../containers/layout/MainLayout";
import ProductTable from "../components/amazonlist/table";

// Home page
function Home() {
  return (
    <MainLayout title="Amazon Products">
      <ProductTable />
    </MainLayout>
  );
}

export default Home;
