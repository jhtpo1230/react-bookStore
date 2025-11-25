import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Button 컴포넌트", () => {
    it("버튼이 정상적으로 렌더링 된다.", () => {
        // 1 렌더
        render(
            <BookStoreThemeProvider>
                <Button size="large" scheme = "primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        // 2 확인
        expect(screen.getByText("버튼")).toBeInTheDocument();
    });

    it("버튼의 크기가 정상적으로 적용된다.", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Button size="large" scheme = "primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );  

        expect (screen.getByRole("button")).toHaveStyle({
            fontsie: "1.5rem",
        });
    });

    it("버튼의 색상이 정상적으로 적용된다.", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Button size="large" scheme = "primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        expect (screen.getByRole("button")).toHaveStyle({
            backgroundColor: 'midnightblue',
            color: 'white',
        });
    });
});