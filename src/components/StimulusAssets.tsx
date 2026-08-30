import type { StimulusAsset } from "../types";
import { Diagram } from "../diagrams";

function Plot({
  rows,
  plot,
}: {
  rows: Record<string, string | number>[];
  plot: { x: string; y: string; title: string; xLabel: string; yLabel: string };
}) {
  const pts = rows
    .map((r) => ({ x: Number(r[plot.x]), y: Number(r[plot.y]) }))
    .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (pts.length === 0) return null;
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMin = Math.min(...ys);
  const yMax = Math.max(...ys);
  const padX = (xMax - xMin || 1) * 0.08;
  const padY = (yMax - yMin || 1) * 0.12;
  const x0 = xMin - padX;
  const x1 = xMax + padX;
  const y0 = yMin - padY;
  const y1 = yMax + padY;
  const W = 400;
  const H = 220;
  const l = 48;
  const r = 16;
  const t = 28;
  const b = 36;
  const sx = (x: number) => l + ((x - x0) / (x1 - x0)) * (W - l - r);
  const sy = (y: number) => t + (1 - (y - y0) / (y1 - y0)) * (H - t - b);

  return (
    <figure className="plot-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} className="diagram-svg" role="img">
        <title>{plot.title}</title>
        <rect width={W} height={H} fill="#f7f4ee" />
        <text x={W / 2} y={18} textAnchor="middle" fill="#243040" fontSize="12">
          {plot.title}
        </text>
        <line x1={l} y1={H - b} x2={W - r} y2={H - b} stroke="#243040" />
        <line x1={l} y1={t} x2={l} y2={H - b} stroke="#243040" />
        <text x={(l + W - r) / 2} y={H - 8} textAnchor="middle" fill="#243040" fontSize="11">
          {plot.xLabel}
        </text>
        <text
          x={14}
          y={(t + H - b) / 2}
          fill="#243040"
          fontSize="11"
          transform={`rotate(-90 14 ${(t + H - b) / 2})`}
          textAnchor="middle"
        >
          {plot.yLabel}
        </text>
        {pts.map((p, i) => (
          <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={4} fill="#3d5a80" />
        ))}
      </svg>
    </figure>
  );
}

export function StimulusAssets({ assets }: { assets: StimulusAsset[] }) {
  return (
    <div className="assets">
      {assets.map((asset, i) => {
        if (asset.type === "svg") {
          return (
            <figure key={i} className="diagram-frame">
              <Diagram id={asset.id} />
              {asset.caption ? <figcaption>{asset.caption}</figcaption> : null}
            </figure>
          );
        }
        return (
          <div key={i} className="table-block">
            {asset.caption ? <p className="caption">{asset.caption}</p> : null}
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    {asset.columns.map((col) => (
                      <th key={col.key}>
                        {col.label}
                        {col.unit ? <span className="unit"> ({col.unit})</span> : null}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {asset.rows.map((row, ri) => (
                    <tr key={ri}>
                      {asset.columns.map((col) => (
                        <td key={col.key}>{String(row[col.key] ?? "")}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {asset.plot ? <Plot rows={asset.rows} plot={asset.plot} /> : null}
          </div>
        );
      })}
    </div>
  );
}
