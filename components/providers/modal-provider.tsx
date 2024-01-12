"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../modals/create-server-modal"

export const ModalProvider = () => {
    // preventing modals from render on server side
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null;
    }

    return (
        <>
            <CreateServerModal />
        </>
    )
}