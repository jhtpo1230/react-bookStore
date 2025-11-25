import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { BookStoreThemeProvider } from "../../context/themeContext";
import React from "react";

describe("Button 컴포넌트", () => {
    it("버튼이 정상적으로 렌더링 된다.", () => {
        // 1 렌더
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="버튼"/>
            </BookStoreThemeProvider>
        );

        // 2 확인
        expect(screen.getByPlaceholderText("버튼")).
        toBeInTheDocument();
    });

    it('forwardRef가 정상적으로 동작한다.', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvider>
                <InputText placeholder = "입력" ref={ref} />
            </BookStoreThemeProvider>
        );

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});