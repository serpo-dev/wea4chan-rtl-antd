import { render } from "@testing-library/react";
import { BackgroundVideo } from "./BackgroundVideo";
import "@testing-library/jest-dom";

describe("should render a valid background video", () => {
    it("snapshot should match to the component render view", () => {
        const { asFragment } = render(<BackgroundVideo />);
        expect(asFragment()).toMatchSnapshot();
    });
});
