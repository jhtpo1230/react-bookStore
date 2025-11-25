import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트", () => {
    it("제목이 정상적으로 렌더링 된다.", () => {
        // 1 렌더
        render(
            <BookStoreThemeProvider>
                <Title size="large">제목</Title>
            </BookStoreThemeProvider>
        );

        // 2 확인
        expect(screen.getByText("제목2")).toBeInTheDocument();
    });

    it("size에 따라 스타일이 정상적으로 적용된다.", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size="large">제목</Title>
            </BookStoreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle({fontsize: 
            "2rem"
        });
    });

    it("color에 따라 스타일이 정상적으로 적용된다.", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size="large" color="primary">제목</Title>
            </BookStoreThemeProvider>
        );
        expect(container?.firstChild).toHaveStyle({color:
            "brown"
        });
    });
});