import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner.tsx', () => {
    it('renders the spinner without loading message', () => {
        const { getByRole, queryByText } = render(<LoadingSpinner />);

        // Spinner should be present
        expect(getByRole('progressbar')).toBeInTheDocument();

        // No loading message should be rendered
        expect(queryByText(/./)).toBeNull(); // nothing visible
    });

    it('renders the spinner with a loading message', async () => {
        const { findByText, getByRole } = render(
            <LoadingSpinner loadingmessage="Loading data..." />,
        );

        // Spinner is always present
        expect(getByRole('progressbar')).toBeInTheDocument();

        // Loading message should appear
        expect(await findByText('Loading data...')).toBeInTheDocument();
    });
});
