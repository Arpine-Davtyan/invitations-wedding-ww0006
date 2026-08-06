"use client";

import dynamic from "next/dynamic";

const RSVPForm = dynamic(
    () => import("./RSVPForm"),
    {
        ssr: false,
    }
);

export default function RSVPWrapper() {
    return <RSVPForm />;
}