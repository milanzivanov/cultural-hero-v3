import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl md:text-4xl font-semibold text-slate-800 tracking-wide text-pretty max-w-3xl">
      {props.children}
    </h1>
  );
}
