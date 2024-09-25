import {render,screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import Page from '../app/page';


describe('Home Page', () => {
    it('renders the welcome message', () => {
      render(<Page />);
      const welcomeMessage = screen.getByText(/Welcome to Acme/i);
      expect(welcomeMessage).toBeInTheDocument();
    });
    it('has a login button', () => {
      render(<Page />);
      const loginButton = screen.getByRole('link', { name: /Log in/i });
      expect(loginButton).toBeInTheDocument();
    });
    it('renders the desktop images', () => {
      render(<Page />);
      const desktopImage = screen.getByAltText(
        'Screenshots of the dashboard project showing desktop version'
      );
      expect(desktopImage).toBeInTheDocument();

    });
    it('renders the mobile images', () => {
        global.innerWidth = 500; // Adjust this value as needed
        global.dispatchEvent(new Event('resize'));
        render(<Page />);
        const mobileImage = screen.getByAltText(
            'Screenshot of the dashboard project showing mobile version'
        );
        expect(mobileImage).toBeInTheDocument();
    })
  });
