import {
    render,
    screen,
    fireEvent,
    waitFor
} from "@testing-library/react";

import Employees from "./Employee";

import {
    getEmployees,
    createEmployee,
    deleteEmployee
} from "../services/employeeService";

jest.mock("../services/employeeService");

describe("Employees Component", () => {

    beforeEach(() => {

        getEmployees.mockResolvedValue({
            data: [
                { id: 1, name: "Sunil" },
                { id: 2, name: "Raj" }
            ]
        });

    });

    test("renders Employee CRUD heading", async () => {

        render(<Employees />);

        const heading = await screen.findByText(/Employee CRUD/i);

        expect(heading).toBeInTheDocument();

    });

    test("loads employees from API", async () => {

        render(<Employees />);

        expect(await screen.findByText("Sunil"))
            .toBeInTheDocument();

        expect(await screen.findByText("Raj"))
            .toBeInTheDocument();

    });

    test("updates input value when typing", () => {

        render(<Employees />);

        const input = screen.getByRole("textbox");

        fireEvent.change(input, {
            target: { value: "Kumar" }
        });

        expect(input.value).toBe("Kumar");

    });

    test("calls createEmployee when Add button clicked", async () => {

        createEmployee.mockResolvedValue({});

        render(<Employees />);

        const input = screen.getByRole("textbox");

        fireEvent.change(input, {
            target: { value: "New Employee" }
        });

        const addButton = screen.getByText("Add");

        fireEvent.click(addButton);

        await waitFor(() => {

            expect(createEmployee)
                .toHaveBeenCalledWith({
                    name: "New Employee"
                });

        });

    });

    test("clears input after adding employee", async () => {

        createEmployee.mockResolvedValue({});

        render(<Employees />);

        const input = screen.getByRole("textbox");

        fireEvent.change(input, {
            target: { value: "David" }
        });

        fireEvent.click(screen.getByText("Add"));

        await waitFor(() => {

            expect(input.value).toBe("");

        });

    });

    test("calls deleteEmployee when Delete button clicked", async () => {

        deleteEmployee.mockResolvedValue({});

        render(<Employees />);

        const deleteButtons =
            await screen.findAllByText("Delete");

        fireEvent.click(deleteButtons[0]);

        await waitFor(() => {

            expect(deleteEmployee)
                .toHaveBeenCalledWith(1);

        });

    });

});