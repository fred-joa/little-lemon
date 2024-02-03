import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

describe("App Component, Check the layout",()=>{


    test('Check the Navbar is displayed',()=>{
        render(
            <BrowserRouter>
                <Nav/>
            </BrowserRouter>
        );
        const nav = screen.getByTestId("navbar");
        expect(nav).toBeInTheDocument();
    });

    test("Check the Header component is displayed",()=>{
        render(<Header/>);
        const heading = screen.getByTestId("heading");
        expect(heading).toBeInTheDocument();
    });

    test("Check the Main component is displayed", ()=>{
        render(
            <BrowserRouter>
                 <Main/>  
            </BrowserRouter>
        );
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
        /* creen.debug(); */
    })

    test("Check the Footer component is displayed",()=>{
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>

        );
        const footer = screen.getByTestId("footer");
        expect(footer).toBeInTheDocument();
    })
})
