import { IModal } from "../../../components/commons/hooks/useOpenModal";
import Signin from "../../../components/units/auth/signin/signin.container";

export default function SigninPage(props: IModal) {
    return <Signin {...props} />;
}
