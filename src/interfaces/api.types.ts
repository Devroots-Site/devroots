export interface ApiResponse<T> {
    status: 'success' | 'error';
    message: string;
    code?: string;
    payload?: T;
}
