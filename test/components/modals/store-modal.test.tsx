import { render, screen, fireEvent } from "@testing-library/react";
import { StoreModal } from "@/components/modals/store-modal";
import * as StoreModalHook from "@/hooks/use-store-modal";
import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("@/hooks/use-store-modal");

describe("StoreModal Component", () => {
  it("renders the form and buttons", () => {
    // Simuler useStoreModal pour contrôler l'état du modal
    jest.spyOn(StoreModalHook, "useStoreModal").mockImplementation(() => ({
      isOpen: true,
      onClose: jest.fn(),
    }));

    render(<StoreModal />);

    expect(screen.getByPlaceholderText("E-Commerce")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });
});
