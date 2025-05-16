import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer.tsx', () => {
    it('renders all elements and verifies links', async () => {
        const { findByText, findByAltText } = render(<Footer />);
        const year = new Date().getFullYear();

        // Title
        const title = await findByText('Devroots', { exact: true });
        expect(title).toBeInTheDocument();

        // Copyright
        const copyright = await findByText(`© ${year} All rights reserved. Devroots`, {
            exact: true,
        });
        expect(copyright).toBeInTheDocument();

        // Instagram
        const instagramText = await findByText('Instagram: EinfachBaste', { exact: true });
        expect(instagramText).toBeInTheDocument();
        expect(instagramText.closest('a')).toHaveAttribute(
            'href',
            'https://www.instagram.com/einfachbasde/',
        );
        const instagramLogo = await findByAltText('Instagram Logo');
        expect(instagramLogo).toBeInTheDocument();

        // LinkedIn
        const linkedInText = await findByText('LinkedIn: Bastian Bichler', { exact: true });
        expect(linkedInText).toBeInTheDocument();
        expect(linkedInText.closest('a')).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/bastian-bichler-3645b0299/',
        );
        const linkedInLogo = await findByAltText('LinkedIn Logo');
        expect(linkedInLogo).toBeInTheDocument();

        // Logo
        const logo = await findByAltText('Logo');
        expect(logo).toBeInTheDocument();
    });

    describe('test links on safety', () => {
        it('instagram link is safe and has correct logo', async () => {
            const { findByRole, findByAltText } = render(<Footer />);

            const instagramLink = await findByRole('link', { name: /Instagram: EinfachBaste/i });
            expect(instagramLink).toHaveAttribute(
                'href',
                'https://www.instagram.com/einfachbasde/',
            );
            expect(instagramLink).toHaveAttribute('target', '_blank');
            expect(instagramLink).toHaveAttribute('rel', 'noopener');

            const instagramLogo = await findByAltText('Instagram Logo');
            expect(instagramLogo).toBeInTheDocument();
        });

        it('linkedin link is safe and has correct logo', async () => {
            const { findByRole, findByAltText } = render(<Footer />);

            const linkedInLink = await findByRole('link', { name: /LinkedIn: Bastian Bichler/i });
            expect(linkedInLink).toHaveAttribute(
                'href',
                'https://www.linkedin.com/in/bastian-bichler-3645b0299/',
            );
            expect(linkedInLink).toHaveAttribute('target', '_blank');
            expect(linkedInLink).toHaveAttribute('rel', 'noopener');

            const linkedInLogo = await findByAltText('LinkedIn Logo');
            expect(linkedInLogo).toBeInTheDocument();
        });
    });
});
