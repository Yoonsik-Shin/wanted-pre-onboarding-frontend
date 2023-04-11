// import { cloneElement } from "react";
import App from "../../../App";
import { useOpenModal } from "../hooks/useOpenModal";
import CustomModal from "../modals/modal01";
import LayoutNavigation from "./navigation";

// interface ILayoutProps {
//     children: JSX.Element;
// }

export default function Layout() {
    const { type, open, setOpen, handleOpen } = useOpenModal();

    return (
        <>
            <LayoutNavigation />
            <div>
                <App
                    type={type}
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                />
                {/* {cloneElement(props.children, {
                    type,
                    open,
                    setOpen,
                    handleOpen,
                })} */}
            </div>
            <CustomModal open={open} setOpen={setOpen} type={type} />
        </>
    );
}
