import axiosInstance from '../api/axios';

interface ApiResponse<T> {
    status: 'success' | 'error';
    message: string;
    code?: string;
    payload?: T;
}

export class Documentation {
    constructor(
        public id: number,
        public readonly name: string,
        public readonly description: string,
        public readonly version: string,
        public readonly created_at: Date,
        public readonly updated_at: Date,
        public readonly creator: string,
        public readonly filepath: string,
        public readonly picturepath: string,
        public readonly keywords: string[],
    ) {}

    /**
     * Fetches all public and active documentation entries from the backend.
     */
    public static async getAllActiveAndPublicDocuments(): Promise<Documentation[]> {
        const response =
            await axiosInstance.get<ApiResponse<Documentation[]>>(`/documentation/public/all`);

        if (response.data.status !== 'success' || !response.data.payload) {
            throw new Error(response.data.message || 'Unexpected API response');
        }

        return response.data.payload.map(
            (doc) =>
                new Documentation(
                    doc.id,
                    doc.name,
                    doc.description,
                    doc.version,
                    new Date(doc.created_at),
                    new Date(doc.updated_at),
                    doc.creator,
                    doc.filepath,
                    doc.picturepath,
                    doc.keywords,
                ),
        );
    }

    public static async getAllKeywords(): Promise<string[]> {
        const response = await axiosInstance.get(`/documentation/keywords/all`);
        
        return response.data.payload;
    }
}
