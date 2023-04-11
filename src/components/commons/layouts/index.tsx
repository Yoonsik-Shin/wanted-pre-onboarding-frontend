// import { cloneElement } from "react";
import App from "../../../App";
import { useOpenModal } from "../hooks/useOpenModal";
import CustomModal from "../modals/modal01";
import LayoutNavigation from "./navigation";

// interface ILayoutProps {
//     children: JSX.Element;
// }

export default function Layout() {
    const modalProps = useOpenModal();

    return (
        <>
            <LayoutNavigation {...modalProps} />
            <div>
                <App {...modalProps} />
                {/* {cloneElement(props.children, {
                    type,
                    open,
                    setOpen,
                    handleOpen,
                })} */}
            </div>
            <CustomModal
                open={modalProps.open}
                setOpen={modalProps.setOpen}
                type={modalProps.type}
            />
        </>
    );
}
