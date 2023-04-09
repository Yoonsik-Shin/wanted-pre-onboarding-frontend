import { NavigateFunction } from "react-router-dom";
import { ChangeEvent } from "react";

export interface IInfo {
    email: string;
    password: string;
    navigate: NavigateFunction;
}

export interface IProps extends IInfo {
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
