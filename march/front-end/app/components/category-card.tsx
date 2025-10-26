export default function CategoryCard({ category, handleCategoryClick }) {
  return (
    <div className="mb-4 text-gray-800 text-xs p-1 cursor-pointer hover:text-red-800">
      <span onClick={() => handleCategoryClick(category.id)}>{category.name}</span>
    </div>
  );
}
