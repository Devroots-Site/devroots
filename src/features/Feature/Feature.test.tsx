import { render } from '@testing-library/react';
import Features from './Feature';

describe('Features.tsx', () => {
    it('renders section title and descriptions', async () => {
        const { findByText } = render(<Features />);

        // Section Header
        expect(await findByText('Features')).toBeInTheDocument();
        expect(
            await findByText('That Simplify Your Development', { exact: true }),
        ).toBeInTheDocument();

        // Card 1
        expect(
            await findByText('Tools that make your work Easier', { exact: true }),
        ).toBeInTheDocument();
        expect(
            await findByText(/Access a suite of powerful tools tailored to boost productivity/i),
        ).toBeInTheDocument();

        // Card 2
        expect(await findByText('Documentation to Guide You', { exact: true })).toBeInTheDocument();
        expect(await findByText(/Explore comprehensive documentation/i)).toBeInTheDocument();
    });
});
