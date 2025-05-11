import { useQuery } from '@tanstack/react-query';
import { Documentation } from '../../../models/Documentation';

export function useDocumentation() {
    const documentation = useQuery({
        queryKey: ['documentation'],
        queryFn: Documentation.getAllActiveAndPublicDocuments,
    });

    const documentationKeywords = useQuery({
        queryKey: ['documentationKeywords'],
        queryFn: Documentation.getAllKeywords,
    });

    return {
        documentation: documentation.data,
        isLoadingDocumentation: documentation.isLoading,
        errorDocumentation: documentation.error,

        keywords: documentationKeywords.data,
        isLoadingKeywords: documentationKeywords.isLoading,
        errorDocumentationKeywords: documentationKeywords.error,
    };
}
