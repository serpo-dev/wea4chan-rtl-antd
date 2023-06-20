import { render, screen } from "@testing-library/react";
import { Info } from "./Info";
import { BrowserRouter } from "react-router-dom";

describe("should render Info properly", () => {
    it("should match the snapshot", () => {
        const { asFragment } = render(<Info />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });

    it("should contain a route to 'about' page", () => {
        render(<Info />, { wrapper: BrowserRouter });
        const about_link: HTMLAnchorElement = screen.getByTestId("about_link");
        expect(about_link.pathname).toEqual("/about");
    });
});
