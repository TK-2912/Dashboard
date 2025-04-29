import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { availableWidgets } from "../data/initialData";
import { addWidget, removeWidget } from "../utils/widgetSlice";

const DrawerGlobal = ({ isOpen, onClose, selectedCategory }) => {
  const dispatch = useDispatch();
  const widgetsState = useSelector((state) => state.widgets);
  const [tab, setTab] = useState("CSPM Executive Dashboard");
  const [search, setSearch] = useState("");
  const [localChecked, setLocalChecked] = useState({});

  const currentTabWidgets = availableWidgets[tab] || [];
  const widgetsInCategory = widgetsState.find((cat) => cat.category === tab)?.widgets || [];

  useEffect(() => {
    if (selectedCategory) {
      setTab(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const checkedMap = {};
    currentTabWidgets.forEach((widgetName) => {
      const isPresent = widgetsInCategory.some((w) => w.name === widgetName);
      checkedMap[widgetName] = isPresent;
    });
    setLocalChecked(checkedMap);
  }, [tab, widgetsInCategory]);

  const handleCheckboxToggle = (widgetName) => {
    setLocalChecked((prev) => ({
      ...prev,
      [widgetName]: !prev[widgetName],
    }));
  };

  const handleConfirm = () => {
    currentTabWidgets.forEach((widgetName) => {
      const wasInDashboard = widgetsInCategory.some((w) => w.name === widgetName);
      const isNowChecked = localChecked[widgetName];

      if (isNowChecked && !wasInDashboard) {
        dispatch(
          addWidget({
            category: tab,
            widget: {
              id: `widget-${Date.now()}-${Math.random()}`,
              name: widgetName,
              text: "Random text",
            },
          })
        );
      }

      if (!isNowChecked && wasInDashboard) {
        const widget = widgetsInCategory.find((w) => w.name === widgetName);
        if (widget) {
          dispatch(removeWidget({ category: tab, widgetId: widget.id }));
        }
      }
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">

      <div className="bg-white w-96 p-6 h-full overflow-auto">

        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Add Widget</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl">×</button>
        </div>

        <div className="flex gap-4 mb-4 flex-wrap">
          {Object.keys(availableWidgets).map((tabName) => (
            <button key={tabName} onClick={() => setTab(tabName)} className={`px-3 py-1 border-b-2 ${tab === tabName ? "border-purple-600" : "border-transparent"}`} >
              {tabName}
            </button>
          ))}
        </div>
        
        <input type="text" placeholder="Search widgets..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border p-2 mb-4" />

        <div className="flex flex-col gap-2">
          {currentTabWidgets .filter((w) => w.toLowerCase().includes(search.toLowerCase()))
            .map((widgetName) => (
              <label key={widgetName} className="flex items-center gap-2">
                <input type="checkbox" checked={localChecked[widgetName] || false} onChange={() => handleCheckboxToggle(widgetName)} />
                {widgetName}
              </label>
            ))}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="border px-4 py-2">Cancel</button>
          <button onClick={handleConfirm} className="bg-purple-600 text-white px-4 py-2">Confirm</button>
        </div>

      </div>
    </div>
  );
}

export default DrawerGlobal;