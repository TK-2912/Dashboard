import { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import DrawerGlobal from "./DrawerGlobal";
import DrawerManual from "./DrawerManual";

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets);
  const [isGlobalDrawerOpen, setGlobalDrawerOpen] = useState(false);
  const [isManualDrawerOpen, setManualDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardAddClick = (category) => {
    setSelectedCategory(category);
    setManualDrawerOpen(true);
  };

  const handleGlobalAddClick = () => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].category);
    }
    setGlobalDrawerOpen(true);
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">CNAPP Dashboard</h1>
        <button className="px-4 py-2 bg-purple-600 text-white rounded" onClick={handleGlobalAddClick} > + Add Widget </button>
      </div>

      {categories.map((cat) => (
        <Category key={cat.category} categoryData={cat} onAddWidget={handleCardAddClick} />
      ))}

      <DrawerGlobal isOpen={isGlobalDrawerOpen} onClose={() => setGlobalDrawerOpen(false)} selectedCategory={selectedCategory} />
      <DrawerManual isOpen={isManualDrawerOpen} onClose={() => setManualDrawerOpen(false)} selectedCategory={selectedCategory} />

    </div>
    
  );
}

export default Dashboard;