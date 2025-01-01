interface Doc {
  id: string;
  name: string;
  description?: string;
  keywords?: string[];
  picturepath: string;
  version: string;
  creator: string;
  filepath: string;
}

export type { Doc };
