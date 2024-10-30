"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Container } from "../layout/container";
// import Link from "next/link";
// import { Icon } from "../icon";
import { FaFacebookF, FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import { useLayout } from "../layout/layout-context";
import { RawRenderer } from "../raw-renderer";
import { tinaField } from "tinacms/dist/react";

export default function Footer() {
  const { theme, globalSettings, pageData } = useLayout();
  const footer = globalSettings?.footer;
  const footerText = footer?.footerText;  // Access footerText from globalSettings
  const footerName = footer?.footerName;  // Access footerName from globalSettings
  
  console.log("footerText", footerText)
  console.log("footerName:", footerName)

  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
  };

  const footerColorCss =
    theme?.darkMode === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;

  return (
    <footer className={cn(`bg-gradient-to-br`, footerColorCss)}>
      <Container className="relative flex justify-between items-center items-end my-4" >
        <div className="flex flex-col">
          {footer && (
            <h3
              data-tina-field={tinaField(footer, "footerName")}
              className="relative inline-block px-3 py-1 mb-8 text-xl font-bold tracking-wide title-font z-20"
            >
              {footerText}
            </h3>
          )}
          {footer && (
            <a
              data-tina-field={tinaField(footer, "ownerName")}
              className="relative inline-block px-3 py-1  text-sm tracking-wide z-20"
            >
              {footer.ownerName}
            </a>
          )}
          {footer && (
            <a
              data-tina-field={tinaField(footer, "ownerEmail")}
              className="relative inline-block px-3 py-1  text-sm tracking-wide z-20"
            >
              {footer.ownerEmail}
            </a>
          )}
          {/* <div className="flex justify-between items-center gap-6 flex-wrap">
            <Link
              href="/"
              className="group mx-2 flex items-center font-bold tracking-tight text-gray-400 dark:text-gray-300 opacity-50 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap"
            >
              {globalSettings?.header?.icon && (
              <Icon
                parentColor={footer.color}
                data={{
                  name: globalSettings?.header.icon.name,
                  color:
                    theme.color === "primary"
                      ? "primary"
                      : globalSettings?.header.icon.color,
                  style: globalSettings?.header.icon.style,
                }}
                className="inline-block h-10 w-auto group-hover:text-orange-500"
              />
              )}
            </Link>
          </div> */}
        </div>

        <div
          className="flex flex-col"
        >
          {footer.services && (
            <div>
              {footer.services}
            </div>
          )}
          <div className="flex gap-4">
          {footer.social && footer.social.linkedin && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={footer.social.linkedin}
                target="_blank"
              >
                <FaLinkedin
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      footer.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {footer.social && footer.social.facebook && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={footer.social.facebook}
                target="_blank"
              >
                <FaFacebookF
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      footer.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {footer.social && footer.social.figma && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={footer.social.instagram}
                target="_blank"
              >
                <FaFigma
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      footer.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {footer.social && footer.social.github && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={footer.social.github}
                target="_blank"
              >
                <FaGithub
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      footer.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
          </div>
        </div>
          <RawRenderer parentColor={footer.color} rawData={pageData} />
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
    </footer>
  );
}
