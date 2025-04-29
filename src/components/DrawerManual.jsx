import { useDispatch } from "react-redux";
import { useState } from "react";
import { addWidget } from "../utils/widgetSlice";
import { availableWidgets } from "../data/initialData";

const DrawerManual = ({ isOpen, onClose, selectedCategory }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleConfirm = () => {
    if (!widgetName.trim()) return;

    dispatch(
      addWidget({
        category: selectedCategory,
        widget: {
          id: `widget-${Date.now()}-${Math.random()}`,
          name: widgetName,
          text: widgetText || "Random text",
        },
      })
    );

    // Add manually created widget into availableWidgets under correct tab
    if (!availableWidgets[selectedCategory]) {
      availableWidgets[selectedCategory] = [];
    }
    availableWidgets[selectedCategory].push(widgetName);

    setWidgetName("");
    setWidgetText("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-96 p-6 h-full">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Add Widget</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl">×</button>
        </div>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="bg-slate-200 border px-4 py-2 rounded-md">Cancel</button>
          <button onClick={handleConfirm} className="bg-purple-600 text-white px-4 py-2 rounded-md">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default DrawerManual