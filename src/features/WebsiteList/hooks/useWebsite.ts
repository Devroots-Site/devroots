import { Websites } from '@/models/Websites';
import { useQuery } from '@tanstack/react-query';

export default function useWebsites() {
    const website = useQuery({
        queryKey: ['websites'],
        queryFn: Websites.findAllActiveAndPublicWebsites,
    });

    return {
        websitesList: website.data,
        isLoadingWebsite: website.isPending,
        errorWebsite: website.error,
    };
}
