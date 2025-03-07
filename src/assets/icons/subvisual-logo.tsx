import { SvgIcon, SvgIconProps } from "@mui/joy";

export const SubvisualLogo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="36.696" cy="6.03" rx="5.253" ry="5.03" fill="url(#paint0_radial)" />
        <path
          d="M25.134 13.692h.547l-.547-9.632c-3.01-1.641-7.279-2.462-10.617-2.462C7.02 1.598 1 5.428 1 12.652c0 11.93 18.771 11.329 18.771 21.234 0 4.706-3.284 6.567-6.403 6.567-6.075 0-9.96-5.254-11.766-12.368h-.547l.547 10.179C4.612 39.906 9.373 41 13.313 41c7.334 0 14.065-3.721 14.065-12.149 0-12.423-18.771-12.258-18.771-21.617 0-3.611 2.79-5.09 5.965-5.09 5.144 0 8.756 5.638 10.562 11.548z"
          fill="#045CFC"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(128.89 19.49 10.886) scale(8.35154 8.8203)"
          >
            <stop stopColor="#045CFC" stopOpacity=".6" />
            <stop offset="1" stopColor="#045CFC" />
          </radialGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};
