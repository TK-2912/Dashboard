import WidgetCard from "./WidgetCard";

const Category = ({ categoryData, onAddWidget }) => {
  const widgets = categoryData.widgets;

  const cardsToShow = [...widgets];
  while (cardsToShow.length < 3 || cardsToShow.length % 3 !== 0) {
    cardsToShow.push(null);
  }

  return (
    <div className="mb-10">

      <h2 className="text-2xl font-semibold mb-4">{categoryData.category}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsToShow.map((widget, idx) => (
          <WidgetCard
            key={idx}
            widget={widget}
            category={categoryData.category}
            onAddClick={() => onAddWidget(categoryData.category)}
          />
        ))}
      </div>
    </div>
  );
}

export default Category

