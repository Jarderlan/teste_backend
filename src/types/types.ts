import { Response } from "express";

export interface ISendResponse {
    data?: object | Array<any>;
    code: number;
    res: Response;
}

export interface IErrorHandlerResponse {
    message?: string | Array<string>;
    values?: object;
    code?: number;
    res: Response;
    error: any;
}

export interface ISingIn {
    email: string,
    password: string
}