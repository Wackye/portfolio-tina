"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../layout/container";
import { cn } from "../../lib/utils";
import { tinaField } from "tinacms/dist/react";
import { Icon } from "../icon";
import NavItems from "./nav-items";
import { useLayout } from "../layout/layout-context";

const headerColor = {
  default:
    "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
  primary: {
    blue: "text-white from-blue-300 to-blue-500",
    teal: "text-white from-teal-400 to-teal-500",
    green: "text-white from-green-400 to-green-500",
    red: "text-white from-red-400 to-red-500",
    pink: "text-white from-pink-400 to-pink-500",
    purple: "text-white from-purple-400 to-purple-500",
    orange: "text-white from-orange-400 to-orange-500",
    yellow: "text-white from-yellow-400 to-yellow-500",
  },
};

export default function Header() {
  const { globalSettings, theme } = useLayout();
  const header = globalSettings.header;

  const headerColorCss =
    header.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b ${headerColorCss}`}
    >
      <Container size="custom" className="py-0 relative z-10 max-w-8xl">
        <div className="flex items-center justify-between gap-6">
          <h4 className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
            <Link
              href="/"
              className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]"
            >
              <Icon
                tinaField={tinaField(header, "icon")}
                parentColor={header.color}
                data={{
                  name: header.icon.name,
                  color: header.icon.color,
                  style: header.icon.style,
                }}
              />{" "}
              <span data-tina-field={tinaField(header, "name")}>
                {header.name}
              </span>
            </Link>
          </h4>
          <NavItems navs={header.nav} />
          <div>
          <Link
                href="/https://drive.google.com/file/d/1koJ9CojsgFXf1VkDxchXlmkjo7uEHkjy/view?usp=drive_link"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4 4m0 0l4-4m-4 4V4" />
            </svg>
            {"download"}
          </Link>
        </div>
        </div>
        {/* UI underline  */}
        <div
          className={cn(
            `absolute h-1 bg-gradient-to-r from-transparent`,
            theme.darkMode === "primary"
              ? `via-white`
              : `via-black dark:via-white`,
            "to-transparent bottom-0 left-4 right-4 -z-1 opacity-5"
          )}
        />
      </Container>
    </div>
  );
}
