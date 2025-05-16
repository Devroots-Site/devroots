import axiosInstance from '@/api/axios';
import { ApiResponse } from '@/interfaces/api.types';

export class Tools {
    constructor(
        public id: number,
        public name: string,
        public language: string,
        public keywords: string[],
        public link: string,
        public author: string,
        public updated_at: Date,
        public picturepath: string,
    ) {}

    public static async findAllPublicTools(): Promise<Tools[]> {
        const res = await axiosInstance.get<ApiResponse<Tools[]>>('/tools/public/all');

        if (res.data.status !== 'success' || !res.data.payload) {
            throw new Error(res.data.message || 'Unexpected API response');
        }

        return res.data.payload.map(
            (val) =>
                new Tools(
                    val.id,
                    val.name,
                    val.language,
                    val.keywords,
                    val.link,
                    val.author,
                    new Date(val.updated_at),
                    val.picturepath,
                ),
        );
    }
}
