// src/lib/format.ts
/**
 * 表示用フォーマッタ（日本向け）
 * - 表示のみ変更するため、値は変換しない（計算ロジック不変）
 * - null/undefined/NaN は "—" を返す（UIでの空表示）
 */

/**
 * パーセント表示（例: 0.948 -> "94.8%")
 * @param v - 0..1 の小数
 * @param digits - 小数点以下桁数（デフォルト 1）
 */
export function formatPercent(v: number | null | undefined, digits = 1): string {
  if (v === null || v === undefined || Number.isNaN(v)) return "—";
  const n = v * 100;
  // 少数桁を固定表示（例: 94.8）
  return `${n.toFixed(digits)}%`;
}

/**
 * 日本円表示（例: 27663.496 -> "27,663円"）
 * - 四捨五入して整数に（表示のみ）
 */
export function formatCurrencyJPY(v: number | null | undefined): string {
  if (v === null || v === undefined || Number.isNaN(v)) return "—";
  const n = Math.round(v);
  const s = new Intl.NumberFormat("ja-JP", { maximumFractionDigits: 0 }).format(n);
  return `${s}円`;
}

/**
 * 汎用数値フォーマット（桁区切り、小数桁指定）
 */
export function formatNumber(v: number | null | undefined, digits = 0): string {
  if (v === null || v ===undefined || Number.isNaN(v)) return "—";
  return new Intl.NumberFormat("ja-JP", { maximumFractionDigits: digits }).format(v);
}


