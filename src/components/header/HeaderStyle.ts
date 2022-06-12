import {css} from "@emotion/css";
import {Theme} from "../../Theme/main"

export const HeaderStyle = {
    root(theme: Theme) {
        return css({
            background: theme.color.primary,
        })
    },

    navLink(theme: Theme) {
        return css({
            fontWeight: "600",
            fontSize: "20px",
            color: theme.color.white
        })
    },

    headerWrapper() {
        return css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        })
    },

    headerLogo() {
        return css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: '600',
            padding: '8px 16px',
            color: 'white',
        })
    },

    headerNav() {
        return css({
            display: "flex",
            alignItems: "center",
            justifyContent: "spaceBetween",

            "& > *": {
                marginRight: "12px",
                textDecoration: "none",
            },

            "& > *:hover": {
                textDecoration: "underline",
            }
        })
    }
}
