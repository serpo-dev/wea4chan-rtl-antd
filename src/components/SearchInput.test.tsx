import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchInput } from "./SearchInput";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedNavigate,
}));

describe("should render SearchInput properly", () => {
    afterEach(cleanup);
    afterEach(() => mockedNavigate.mockRestore());

    it("should match the snapshot", () => {
        const { asFragment } = render(<SearchInput />, {
            wrapper: BrowserRouter,
        });
        expect(asFragment()).toMatchSnapshot();
    });

    it("should be redirect button", async () => {
        render(<SearchInput />, { wrapper: BrowserRouter });
        const searchButton = screen.getByTitle("Search button");
        expect(searchButton).toBeInTheDocument();
    });

    it("should be input field", async () => {
        render(<SearchInput />, { wrapper: BrowserRouter });
        let input = screen.getByRole<HTMLInputElement>("combobox");
        expect(input).toBeInTheDocument();
    });

    it("should find the coordinates by typing a name of the city", async () => {
        render(<SearchInput />, { wrapper: BrowserRouter });
        let input = screen.getByRole<HTMLInputElement>("combobox");
        userEvent.type(input, "yekaterinb");
        const option = await screen.findByText("Yekaterinburg");
        userEvent.click(option);
        await waitFor(() => expect(input.value).toEqual("56.8519; 60.6122"));
    });

    it("should redirect to the city page when the user presses 'enter'", async () => {
        render(<SearchInput />, { wrapper: BrowserRouter });

        const input = screen.getByRole<HTMLInputElement>("combobox");
        userEvent.type(input, "56.8519; 60.6122{enter}");

        const resultUrl = "/q?latitude=56.8519&longitude=60.6122";
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith(resultUrl);
        });
    });

    it("should redirect to the city page when the user presses on 'Search' button", async () => {
        render(<SearchInput />, { wrapper: BrowserRouter });

        const input = screen.getByRole<HTMLInputElement>("combobox");
        userEvent.type(input, "56.8519; 60.6122");
        const searchButton = screen.getByTitle("Search button");
        fireEvent.click(searchButton);

        const resultUrl = "/q?latitude=56.8519&longitude=60.6122";
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith(resultUrl);
        });
    });
});
