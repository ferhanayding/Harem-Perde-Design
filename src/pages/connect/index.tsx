'use client'

import React from "react"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaHome } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export default function ConnectPage() {

    const { t } = useTranslation("global");

    const lat = "40.3986932"
    const lng = "49.8336391"

    const mapLink =
        typeof window !== "undefined" &&
            /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
            ? `geo:${lat},${lng}`
            : `https://www.google.com/maps?q=${lat},${lng}`

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white px-4">




            <div className="w-full max-w-sm p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

                <div className=" flex justify-center">
                    <img
                        src="/logo/textlogo.png"
                        alt="harem perde logo"
                        className="w-40 md:w-48 object-contain"
                    />
                </div>

                <div className="grid gap-4">

                    <a
                        href="https://api.whatsapp.com/send/?phone=994505606173"
                        className="flex items-center gap-3 justify-center py-4 rounded-xl bg-green-500 hover:bg-green-600 transition"
                    >
                        <FaWhatsapp size={22} />
                        {t("whatsapp")}
                    </a>

                    <a
                        href="https://www.instagram.com/haremperde_baku/"
                        target="_blank"
                        className="flex items-center gap-3 justify-center py-4 rounded-xl bg-pink-500 hover:bg-pink-600 transition"
                    >
                        <FaInstagram size={22} />
                        {t("instagram")}
                    </a>

                    <a
                        href={mapLink}
                        className="flex items-center gap-3 justify-center py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
                    >
                        <FaMapMarkerAlt size={22} />
                        {t("map")}
                    </a>

                    <Link
                        href="/"
                        className="flex items-center gap-3 justify-center py-4 rounded-xl bg-neutral-700 hover:bg-neutral-600 transition"
                    >
                        <FaHome size={22} />
                        {t("home")}
                    </Link>

                </div>

            </div>

        </div>
    )
}