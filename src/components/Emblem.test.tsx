import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Emblem } from "./Emblem";
import { BrowserRouter } from "react-router-dom";

describe("should render a valid emblem component", () => {
    it("should match a snapshot", () => {
        const { asFragment } = render(<Emblem />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render the icon image", () => {
        render(<Emblem />, { wrapper: BrowserRouter });
        const icon = screen.getByTestId("redirect_icon");
        expect(icon).toBeInTheDocument();
    });

    it("should redirect to the '/' by clicking on the icon image", async () => {
        render(<Emblem />, { wrapper: BrowserRouter });
        const redirectIcon: HTMLAnchorElement =
            screen.getByTestId("redirect_icon");
        expect(redirectIcon.pathname).toEqual("/");
    });

    it("should render the title", () => {
        render(<Emblem />, { wrapper: BrowserRouter });
        const icon = screen.getByTestId("redirect_title");
        expect(icon).toBeInTheDocument();
    });

    it("should redirect to the '/' by clicking on the title", async () => {
        render(<Emblem />, { wrapper: BrowserRouter });
        const redirectTitle: HTMLAnchorElement =
            screen.getByTestId("redirect_title");
        expect(redirectTitle.pathname).toEqual("/");
    });
});
