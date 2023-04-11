import NavigateHome from "../../../commons/buttons/button-NavigateHome";
import { onClickSubmit } from "./signup.queries";
import { IProps } from "./signup.types";

export default function SignupUI(props: IProps) {
    const {
        navigate,
        email,
        password,
        buttonDisabled,
        errorMessage,
        onChangeSignup,
        SIGNUP_INFO,
        handleOpen,
    } = props;

    return (
        <>
            <h1>회원가입페이지</h1>
            <input
                type="text"
                data-testid="email-input"
                onChange={onChangeSignup(SIGNUP_INFO.email)}
            />
            {errorMessage.email}
            <input
                type="password"
                data-testid="password-input"
                onChange={onChangeSignup(SIGNUP_INFO.password)}
            />
            {errorMessage.password}
            <button
                data-testid="signup-button"
                onClick={onClickSubmit({
                    email,
                    password,
                    navigate,
                    handleOpen,
                })}
                disabled={buttonDisabled}
            >
                회원가입
            </button>
            <NavigateHome />
        </>
    );
}
