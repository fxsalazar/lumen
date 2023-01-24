import { useEvent, useMount } from "react-use"

function setThemeColor() {
  if (typeof window === "undefined") {
    return
  }

  const themeColorMeta = document.querySelector('meta[name="theme-color"]')

  const backgroundColor = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color")

  themeColorMeta?.setAttribute("content", backgroundColor)
}

/** Dyanmically change the theme color to match the background color */
export function ThemeColor() {
  useMount(setThemeColor)
  useEvent("visibilitychange", setThemeColor)
  useEvent("colorschemechange", setThemeColor)
  return null
}