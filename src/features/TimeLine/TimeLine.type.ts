type TimelineItem = {
    startDate: string;
    endDate?: string; // Optional
    title: string;
    jobTitle: string;
    description: string;
    link: string;
};

type TimelineProps = {
    items: TimelineItem[];
};

export type { TimelineProps, TimelineItem };
