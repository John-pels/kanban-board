import RequestConfig from '.';
import { NewTaskData, NewTicketData, routes, UpdateTask } from './routes';

class TaskRequests extends RequestConfig {
    getAllTickets = async () => {
        return await this.defaultApi.get(routes.TICKETS);
    };

    getATicket = async (ticketId: string) => {
        return await this.defaultApi.get(`${routes.TICKETS}/${ticketId}`);
    };

    addTickets = async (payload: NewTicketData) => {
        return await this.defaultApi.post(routes.TICKETS, payload);
    };

    addTask = async (payload: NewTaskData) => {
        return await this.defaultApi.post(`${routes.TICKETS}/${payload.ticketId}/tasks`, {
            title: payload.title,
            description: payload.description,
        });
    };

    updateTaskTicket = async (payload: UpdateTask) => {
        return await this.defaultApi.put(
            `${routes.TICKETS}/${payload.ticketId}/tasks/${payload.taskId}`,
            { ticketId: payload.destinationId }
        );
    };
}

const taskRequests = new TaskRequests();

export { taskRequests };
