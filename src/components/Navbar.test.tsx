import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar.tsx', () => {
    it('renders logo and navigation links', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        // Main logo and title
        expect(await screen.findByText('Devroots')).toBeInTheDocument();
        expect(screen.getByAltText('Logo')).toBeInTheDocument();

        // Desktop navigation links
        // expect(screen.getByText('Docs')).toBeInTheDocument();
        expect(screen.getByText('Tools')).toBeInTheDocument();
        // expect(screen.getByText('About me')).toBeInTheDocument();
        expect(screen.getByText('Websites')).toBeInTheDocument();
    });

    it('opens and displays Drawer with mobile navigation links', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        // Click the hamburger menu
        const menuButton = screen.getByRole('button');
        fireEvent.click(menuButton);

        // Get the drawer container
        const drawer = await screen.findByRole('presentation');
        const drawerContent = within(drawer);

        // Mobile links inside the drawer
        expect(drawerContent.getByText('Docs')).toBeInTheDocument();
        expect(drawerContent.getByText('Tools')).toBeInTheDocument();
        expect(drawerContent.getByText('About me')).toBeInTheDocument();
        expect(drawerContent.getByText('Websites')).toBeInTheDocument();
        expect(drawerContent.getByText('Contact Now')).toBeInTheDocument();
    });
});
