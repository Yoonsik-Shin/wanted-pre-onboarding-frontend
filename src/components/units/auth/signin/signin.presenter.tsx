import NavigateHome from "../../../commons/buttons/button-NavigateHome";
import { onClickSubmit } from "./signin.queries";
import { IProps } from "./signin.types";

export default function SigninUI(props: IProps) {
    const {
        navigate,
        email,
        password,
        onChangeEmail,
        onChangePassword,
        handleOpen,
    } = props;

    return (
        <>
            <h1>로그인페이지</h1>
            <input
                type="text"
                data-testid="email-input"
                onChange={onChangeEmail}
            />
            <input
                type="password"
                data-testid="password-input"
                onChange={onChangePassword}
            />
            <button
                data-testid="signup-button"
                onClick={onClickSubmit({
                    navigate,
                    email,
                    password,
                    handleOpen,
                })}
            >
                로그인
            </button>
            <NavigateHome />
        </>
    );
}
