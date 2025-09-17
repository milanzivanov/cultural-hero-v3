import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-50 tracking-wide text-pretty max-w-3xl">
      {props.children}
    </h1>
  );
}
