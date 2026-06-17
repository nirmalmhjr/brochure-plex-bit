import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  className: "size-5",
};

// export function DollarCircleIcon(props: IconProps) {
//   return (
//     <svg aria-hidden="true" {...base} {...props} viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="10" />
//       <text
//         x="12"
//         y="16.5"
//         textAnchor="middle"
//         fontSize="11"
//         fontWeight="bold"
//         fontFamily="Georgia, serif"
//         fill="currentColor"
//         stroke="none"
//       >
//         $
//       </text>
//     </svg>
//   );
// }

export function DollarCircleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props} viewBox="0 0 24 24">
      <text
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="bold"
        stroke="none"
        style={{ transformOrigin: "12px 12px" }}
        textAnchor="middle"
        transform="scale(1, 1.2)"
        x="12"
        y="17"
      >
        $
      </text>
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function ExpandIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
