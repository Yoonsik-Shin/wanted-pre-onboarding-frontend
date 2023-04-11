import { NavigateFunction } from "react-router-dom";
import { ChangeEvent } from "react";

export interface IInfo {
    email: string;
    password: string;
    navigate: NavigateFunction;
    handleOpen: (type: string) => void;
}

export interface IProps extends IInfo {
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
