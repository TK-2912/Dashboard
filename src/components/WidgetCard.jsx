import { useDispatch } from "react-redux";
import { removeWidget } from "../utils/widgetSlice";
import { IoIosCloseCircleOutline } from "react-icons/io";


const WidgetCard = ({ widget, category, onAddClick }) => {
  const dispatch = useDispatch();

  if (!widget) {
    return (
      <div className="relative bg-white p-4 shadow rounded-lg flex justify-center items-center min-h-[150px]">
        <button onClick={onAddClick} className="text-purple-600 border border-purple-600 px-4 py-2 rounded" > + Add Widget </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white p-4 shadow rounded-lg min-h-[150px]">
      <button onClick={() => dispatch(removeWidget({ category, widgetId: widget.id }))} className="absolute top-2 right-2 text-red-500" > <IoIosCloseCircleOutline className="w-7 h-7" /> </button>
      <h3 className="font-bold text-lg mt-4">{widget.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{widget.text}</p>
    </div>
  );
}

export default WidgetCard;