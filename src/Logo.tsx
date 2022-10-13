import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={109}
      height={121}
      viewBox="0 0 109 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M91.584 52.734c0 22.883-23.744 56.501-37.312 56.501-13.568 0-37.312-33.618-37.312-56.5 0-10.99 3.931-21.529 10.928-29.3C34.886 15.666 44.376 11.3 54.272 11.3s19.386 4.365 26.383 12.136c6.998 7.77 10.929 18.31 10.929 29.298v0z"
        stroke="#81D8F7"
        strokeWidth={10.176}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.096 65.918c-2.695-.013-5.277-1.207-7.183-3.324-1.906-2.116-2.982-4.983-2.993-7.976v-1.884c2.695.013 5.277 1.207 7.183 3.324 1.906 2.116 2.982 4.983 2.993 7.976v1.884zM64.448 65.918v-1.884c.011-2.993 1.087-5.86 2.993-7.976 1.906-2.117 4.487-3.311 7.183-3.324v1.884c-.011 2.993-1.087 5.86-2.993 7.976-1.906 2.117-4.488 3.311-7.183 3.324z"
        fill="#81D8F7"
        stroke="#81D8F7"
        strokeWidth={10.176}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.184 86.635H59.36"
        stroke="#81D8F7"
        strokeWidth={10.176}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}