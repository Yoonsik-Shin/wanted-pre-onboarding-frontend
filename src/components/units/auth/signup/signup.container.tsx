import { useState, ChangeEvent } from "react";
import SignupUI from "./signup.presenter";
import { useNavigate } from "react-router-dom";
import { ISignup, ISignupInfo } from "./signup.types";
import { useIsLogin } from "../../../commons/hooks/useIsLogin";

export default function Signup() {
    useIsLogin();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: "",
    });

    const SIGNUP_INFO: ISignupInfo = {
        email: {
            category: "email",
            info: email,
            infoSet: setEmail,
            condition: (target: string) => !target.includes("@"),
            errorMsg: "이메일 형식이 올바르지 않습니다.",
        },
        password: {
            category: "password",
            info: password,
            infoSet: setPassword,
            condition: (target: string) => target.length < 8,
            errorMsg: "비밀번호는 8자리이상부터 가능합니다.",
        },
    };

    const onChangeSignup =
        ({ category, infoSet, condition, errorMsg }: ISignup) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            infoSet(e.target.value);

            if (condition(e.target.value) && e.target.value) {
                const tempMsg = { ...errorMessage, [category]: errorMsg };
                setErrorMessage(tempMsg);
                setButtonDisabled(true);
                return;
            }
            const tempMsg = { ...errorMessage, [category]: "" };
            setErrorMessage(tempMsg);
            setButtonDisabled(false);
        };

    return (
        <SignupUI
            navigate={navigate}
            email={email}
            password={password}
            buttonDisabled={buttonDisabled}
            errorMessage={errorMessage}
            onChangeSignup={onChangeSignup}
            SIGNUP_INFO={SIGNUP_INFO}
        />
    );
}
