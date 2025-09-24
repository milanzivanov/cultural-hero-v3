import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_BY_SLUG_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      style={{ backgroundColor: category.color || "#fefefe" }}
      className="rounded-full px-3 py-1 leading-none whitespace-nowrap text-sm font-semibold text-gray-50"
    >
      {category.title}
    </span>
  ));
}
