 import { render, fireEvent, screen } from '@testing-library/react';
import BookingTable from './components/booking-table/BookingTable';

test('Adds one', () => {
  //Render the app component
  render(<BookingTable />);

  //save the headin in a variable
  const heading = screen.getByText("Book Now");
  expect(heading).toBeInTheDocument();
});
