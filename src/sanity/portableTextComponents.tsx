import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote>
        <p>{children}</p>
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>
  },
  listItem: {
    bullet: ({ children }) => (
      <li>
        <p>{children}</p>
      </li>
    ),
    number: ({ children }) => (
      <li>
        <p>{children}</p>
      </li>
    )
  },
  types: {
    image: (props) =>
      props.value ? (
        <figure className="not-prose">
          <Image
            className="rounded-lg h-auto max-w-full"
            src={urlFor(props.value)
              .width(600)
              .height(400)
              .quality(80)
              .auto("format")
              .url()}
            alt={props?.value?.alt || ""}
            width={600}
            height={400}
          />
          {props?.value?.alt ? (
            <figcaption>{props.value.alt}</figcaption>
          ) : null}
        </figure>
      ) : null
  }
};
