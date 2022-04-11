export enum routes {
    TICKETS = '/tickets',
}

export type NewTicketData = {
    title: string;
};

export type NewTaskData = {
    ticketId: string;
    title: string;
    description: string;
};

export type UpdateTask = {
    ticketId: string;
    taskId: string;
    destinationId: string;
};
