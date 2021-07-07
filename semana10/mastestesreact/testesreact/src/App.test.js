import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Criar Novo Post", async () => {
    const { getByPlaceholderText} = render(<App/>);

    const inputPost = getByPlaceholderText(/Novo post/i);

    fireEvent.change(inputPost, { target: {value: 'test'}});
    
    expect(inputPost).toHaveDisplayValue('test');
})
