import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Emblem } from "./Emblem";
import { BrowserRouter } from "react-router-dom";

describe("should render a valid emblem component", () => {
    it("should match a snapshot", () => {
        const { asFragment } = render(<Emblem />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
