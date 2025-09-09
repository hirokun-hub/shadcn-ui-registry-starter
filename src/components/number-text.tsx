import React from "react";
import { formatCurrencyJPY, formatNumber, formatPercent } from "@/lib/format";

type Props = {
  value: number | string | null | undefined;
  kind?: "percent" | "jpy" | "number";
  digits?: number;
  className?: string;
  as?: "span" | "text";
};

const toNum = (v: number | string | null | undefined): number | null => {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};

export default function NumberText({
  value,
  kind = "number",
  digits,
  className,
  as = "span",
}: Props) {
  const n = toNum(value);
  const d = digits ?? (kind === "percent" ? 1 : 0);

  let content: string;
  if (kind === "percent") content = formatPercent(n, d);
  else if (kind === "jpy") content = formatCurrencyJPY(n);
  else content = typeof value === "string" ? value : formatNumber(n, d);

  if (as === "text") return <>{content}</>;
  return <span className={className}>{content}</span>;
}


