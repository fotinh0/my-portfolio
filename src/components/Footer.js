import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <section id="footer" className="text-gray-400 text-center p-5">
        <p>© {year} Foti Ceci</p>
        </section>
    )
}