import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "color",
      title: "Color (hex)",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/, { name: "hex color" }).error(
          "Use hex like #ff0000"
        )
    }),
    defineField({
      name: "description",
      type: "text"
    })
  ]
});
