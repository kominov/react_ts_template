import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import style from "./Layout.module.css";
import { ThemeContext as ThemeContextLocal } from "../contexts/ThemeContext";
import {
  ThemeContext as ThemeContextSKB,
  THEME_2022_DARK,
  ThemeFactory,
} from "@skbkontur/react-ui";
import { theme } from "../Theme/main";
import { css, cx } from "@emotion/css";

// const myDarkTheme = ThemeFactory.create(
//     {btnPrimaryBg: "red"},
//     THEME_2022_DARK
// );

const Layout = () => {
  return (
    <>
      <ThemeContextLocal.Provider value={theme}>
        <ThemeContextSKB.Provider value={THEME_2022_DARK}>
          <div className={style.wrapper}>
            <Header />
            <div
              className={cx(
                  css`flex: 1`,
                  'container')}
            >
              <Outlet />
            </div>

            <footer>2022</footer>
          </div>
        </ThemeContextSKB.Provider>
      </ThemeContextLocal.Provider>
    </>
  );
};

export { Layout };
