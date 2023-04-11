import { useState } from "react";

export interface IModal {
    type: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: (type: string) => void;
}

export const useOpenModal = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const handleOpen = (type: string) => {
        setOpen(true);
        setType(type);
    };

    return {
        type,
        open,
        setOpen,
        handleOpen,
    };
};
