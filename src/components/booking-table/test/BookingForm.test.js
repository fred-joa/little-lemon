import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingFormCopy from './BookingFormCopy';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

describe("Booking Component",()=>{
/*-----TEST # 1-----*/
    test('check title',()=>{
        //render the component
        render(<BookingFormCopy/>);
        const heading = screen.getByText("Book your table Now!");
        expect(heading).toBeInTheDocument();
    });
/*-----TEST # 2-----*/
    test("Check if the errors display when it is required",()=>{
        render(<BookingFormCopy/>);
        const buttoElement= screen.getByRole("button");
        act(()=>{
            userEvent.click(buttoElement);
        })
        const errorMessage = screen.getAllByText("-- Please select a time --");
        expect(errorMessage[1]).toBeInTheDocument();
    });
/*-----TEST # 3-----*/
    test("Check if data times load correctly when We insert a Date", ()=>{
        render( 
                <BookingFormCopy ></BookingFormCopy>
            );
        act(()=>{
            const inputDataElement = screen.getByTestId("select-date");
           fireEvent.change(inputDataElement, { target: { value: "2024-02-04"}});
        })
        screen.debug();
        const timeLoad = screen.getByTestId("time1");
        expect(timeLoad).toBeInTheDocument();
    })
})

