import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_BY_SLUG_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => {
    const color =
      typeof category.color === "string"
        ? category.color
        : category.color
          ? (category.color as { hex?: string }).hex
          : undefined;

    return (
      <span
        key={category._id}
        style={{ backgroundColor: color || "#fecaca" }}
        className="rounded-full px-3 py-1 leading-none whitespace-nowrap text-sm font-semibold text-gray-50"
      >
        {category.title}
      </span>
    );
  });
}
