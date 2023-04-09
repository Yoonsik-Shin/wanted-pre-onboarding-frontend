import { NavigateFunction } from "react-router-dom";
import { ChangeEvent } from "react";

export interface ISignup {
    category: string;
    infoSet: React.Dispatch<React.SetStateAction<string>>;
    condition: (target: string) => boolean;
    errorMsg: string;
}

export interface IInfo {
    email: string;
    password: string;
    navigate: NavigateFunction;
}

export interface ISignupInfo {
    email: ISignupInfoDetail;
    password: ISignupInfoDetail;
}

export interface ISignupInfoDetail {
    category: string;
    info: string;
    infoSet: React.Dispatch<React.SetStateAction<string>>;
    condition: (target: string) => boolean;
    errorMsg: string;
}

export interface IProps extends IInfo {
    buttonDisabled: boolean;
    errorMessage: {
        email: string;
        password: string;
    };
    onChangeSignup: ({
        category,
        infoSet,
        condition,
        errorMsg,
    }: ISignup) => (e: ChangeEvent<HTMLInputElement>) => void;
    SIGNUP_INFO: ISignupInfo;
}
