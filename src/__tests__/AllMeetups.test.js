import App from "../App"
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import AllMeetupsPage from "../pages/AllMeetups"
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";


test ('jest is working', ()=>{
    expect(1+1).toEqual(2);
});

test ('home page renders heading', ()=>{
    render(
        <Router>
            <App />
        </Router>);
    
    expect(screen.getByRole("heading")).toHaveTextContent(/All Meetups Page/);
});



// ...
// test('renders the landing page', () => {
//   render(<App />);
  
//   expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
//   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
//   expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
//   expect(screen.getByRole("img")).toBeInTheDocument();
// });