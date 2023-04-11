import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsLogin } from "../../../commons/hooks/useIsLogin";
import { IModal } from "../../../commons/hooks/useOpenModal";
import SigninUI from "./signin.presenter";

export default function Signin(props: IModal) {
    useIsLogin();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <SigninUI
            navigate={navigate}
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            {...props}
        />
    );
}
