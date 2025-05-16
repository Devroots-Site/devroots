import { Tools } from '@/models/Tools.class';
import { useQuery } from '@tanstack/react-query';

export function useTools() {
    const tools = useQuery({
        queryKey: ['tools'],
        queryFn: Tools.findAllPublicTools,
    });

    return {
        toolsList: tools.data,
        isLoadingTools: tools.isPending,
        errorTools: tools.error,
    };
}
