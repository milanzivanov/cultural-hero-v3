import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-50 tracking-wide text-pretty max-w-3xl">
      {props.children}
    </h2>
  );
}
