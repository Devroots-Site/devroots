interface IDocumentation {
    id: number;
    name: string;
    description: string;
    version: string;
    created_at: Date | string;
    updated_at: Date | string;
    keywords: string[];
    picturepath: string;
    creator: string;
    filepath: string;
}

export type { IDocumentation };
