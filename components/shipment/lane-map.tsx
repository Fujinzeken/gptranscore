import { cx, label } from "../ui";

/**
 * Regular-lane map for the Freight Services hub.
 *
 * The content pack asks for lanes drawn as route lines rather than a shaded
 * country, so the map is a coarse contiguous-US outline with one arc per lane.
 * Coordinates are longitude/latitude, projected with a fixed aspect that is
 * close to true at the latitude of the lanes (~37°N).
 */

type LngLat = [number, number];

const LNG_MIN = -125;
const LAT_MAX = 49.5;
const KX = 19;
const KY = 24;
const WIDTH = 59 * KX;
const HEIGHT = 25 * KY;

function project([lng, lat]: LngLat): [number, number] {
  return [(lng - LNG_MIN) * KX, (LAT_MAX - lat) * KY];
}

/** Coarse outline of the contiguous US, clockwise from the Pacific Northwest. */
const OUTLINE: LngLat[] = [
  [-124.7, 48.4], [-123.0, 49.0], [-95.2, 49.0], [-89.6, 48.0], [-84.5, 46.5],
  [-82.4, 43.0], [-83.1, 42.0], [-82.5, 41.7], [-79.0, 42.8], [-76.5, 43.6],
  [-75.0, 45.0], [-71.5, 45.0], [-70.0, 46.7], [-69.2, 47.4], [-67.8, 47.1],
  [-67.0, 44.9], [-70.2, 43.6], [-70.6, 42.6], [-70.0, 41.8], [-71.5, 41.4],
  [-73.9, 40.6], [-74.0, 39.8], [-74.9, 38.9], [-75.5, 38.4], [-76.0, 37.0],
  [-75.5, 35.3], [-77.9, 33.9], [-79.2, 33.2], [-80.9, 32.0], [-81.4, 30.4],
  [-80.6, 28.4], [-80.0, 26.7], [-80.4, 25.2], [-81.1, 25.1], [-81.8, 26.1],
  [-82.7, 27.7], [-82.8, 29.2], [-84.3, 30.0], [-85.4, 29.7], [-87.5, 30.3],
  [-88.1, 30.4], [-89.6, 30.2], [-89.4, 29.0], [-90.5, 29.1], [-92.3, 29.6],
  [-94.0, 29.7], [-95.0, 29.2], [-96.9, 28.0], [-97.4, 26.0], [-99.2, 26.5],
  [-100.5, 28.4], [-101.5, 29.8], [-103.2, 29.0], [-104.5, 29.7], [-106.5, 31.8],
  [-108.2, 31.3], [-111.0, 31.3], [-114.8, 32.5], [-117.1, 32.5], [-118.5, 34.0],
  [-120.6, 34.6], [-121.9, 36.6], [-122.5, 37.8], [-123.8, 39.8], [-124.4, 42.0],
  [-124.0, 46.2],
];

/** Approximate interior point of each state a regular lane touches. */
const STATES: Record<string, LngLat> = {
  WI: [-89.8, 44.6],
  MI: [-84.7, 43.4],
  IL: [-89.2, 40.0],
  IN: [-86.3, 39.9],
  OH: [-82.8, 40.3],
  KY: [-85.3, 37.5],
  MA: [-71.8, 42.3],
  CT: [-72.7, 41.6],
  NJ: [-74.5, 40.1],
  NC: [-79.4, 35.5],
  SC: [-80.9, 33.9],
  GA: [-83.4, 32.7],
  FL: [-81.9, 28.6],
  TX: [-98.5, 31.3],
};

/** Regular lanes from the content pack's services notes. */
export const LANES: Array<[string, string]> = [
  ["WI", "FL"], ["WI", "MA"], ["WI", "CT"], ["WI", "NJ"],
  ["IL", "FL"], ["IL", "GA"], ["IL", "TX"],
  ["NJ", "MI"], ["NJ", "GA"], ["NJ", "SC"], ["NJ", "NC"], ["NJ", "FL"],
  ["FL", "NC"], ["FL", "GA"],
  ["GA", "OH"], ["GA", "MI"],
  ["NC", "IN"], ["KY", "TX"],
];

const outlinePath =
  OUTLINE.map((p, i) => `${i ? "L" : "M"}${project(p).join(" ")}`).join(" ") +
  " Z";

/** A shallow arc between two states, bowed to one side of the chord. */
function arc(from: string, to: string) {
  const [x1, y1] = project(STATES[from]);
  const [x2, y2] = project(STATES[to]);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const bow = 0.18;
  return `M${x1} ${y1} Q${mx - dy * bow} ${my + dx * bow} ${x2} ${y2}`;
}

const lanesText = LANES.map(([a, b]) => `${a} to ${b}`).join(", ");

export function LaneMap({ className }: { className?: string }) {
  const used = Array.from(new Set(LANES.flat()));
  return (
    <figure className={cx("m-0", className)}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="lane-map-title"
        className="block h-auto w-full"
      >
        <title id="lane-map-title">
          {`PKT regular lanes: ${lanesText}.`}
        </title>
        <path
          d={outlinePath}
          className="fill-paper stroke-[#c2ccd8]"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <g fill="none" className="stroke-azure" strokeWidth={2.4} strokeLinecap="round">
          {LANES.map(([a, b]) => (
            <path key={`${a}-${b}`} d={arc(a, b)} opacity={0.75} />
          ))}
        </g>
        <g>
          {used.map((s) => {
            const [x, y] = project(STATES[s]);
            return (
              <g key={s}>
                <circle cx={x} cy={y} r={7} className="fill-ink" />
                <circle cx={x} cy={y} r={3} className="fill-paper" />
                <text
                  x={x + 11}
                  y={y - 9}
                  className="fill-ink font-display"
                  fontSize={20}
                  fontWeight={700}
                >
                  {s}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      <figcaption className={cx(label, "mt-4 text-soft-text")}>
        {LANES.map(([a, b]) => `${a}–${b}`).join(" · ")}
      </figcaption>
    </figure>
  );
}
