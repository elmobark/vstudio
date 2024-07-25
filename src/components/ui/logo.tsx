"use client";
import { useTheme } from "next-themes";
import Image from "next/image";


export enum LogoDirection {
    rtl = "rtl",
    ltr = "ltr",
}
interface LogoProps {
    direction?: LogoDirection;
    isIcon?: boolean;
}
export default function Logo(
    {
        direction = LogoDirection.ltr,
        isIcon,
    }: LogoProps
) {
  const { resolvedTheme } = useTheme();

    const logo = resolvedTheme === "dark" ? "light" : "dark";
    const directionClass = direction === LogoDirection.rtl ? "-rtl" : "";
    const logoIcon = "logoIcon";

    if (isIcon??false) {
        return (
            <Image
                src={`/images/${logoIcon}.svg`}
                alt="Value Studio"
                width={40}
                height={40}
            />
        );
    }
    return (
        <Image
            src={`/images/${logo}${directionClass}-logo.svg`}
            alt="Value Studio"
            width={150}
            height={40}
        />
    );
}