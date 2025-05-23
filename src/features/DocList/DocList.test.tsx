import { render } from '@testing-library/react';
import DocsList from './DocList';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('./hook/useDocumentation', () => ({
    useDocumentation: () => ({
        documentation: [],
        keywords: [],
        isLoadingDocumentation: true,
        isLoadingKeywords: false,
        errorDocumentation: null,
        errorDocumentationKeywords: null,
    }),
}));

const renderWithQuery = (ui: React.ReactElement) => {
    const testClient = new QueryClient();
    return render(<QueryClientProvider client={testClient}>{ui}</QueryClientProvider>);
};

describe.skip('DocList', () => {
    it('shows loading state', async () => {
        const { findByText } = renderWithQuery(<DocsList />);
        const loading = await findByText(/loading documentation/i);
        expect(loading).toBeInTheDocument();
    });
});
