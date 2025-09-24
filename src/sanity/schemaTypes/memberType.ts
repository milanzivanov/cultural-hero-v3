import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const memberType = defineType({
  name: "member",
  title: "Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name"
      }
    }),
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: []
        })
      ]
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
});
