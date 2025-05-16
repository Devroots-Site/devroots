import axiosInstance from '@/api/axios';
import { ApiResponse } from '@/interfaces/api.types';

export class Websites {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public link: string,
        public keywords: string[],
    ) {}

    public static async findAllActiveAndPublicWebsites() {
        const res = await axiosInstance.get<ApiResponse<Websites[]>>('/websites/public/all');

        if (res.data.status !== 'success' || !res.data.payload) {
            throw new Error(res.data.message || 'Unexpected API response');
        }
        return res.data.payload.map(
            (value) =>
                new Websites(value.id, value.name, value.description, value.link, value.keywords),
        );
    }
}
