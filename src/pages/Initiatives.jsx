import React, { useState } from "react";
import { Shield, Leaf, Sprout, Wheat, Landmark, Droplets, Megaphone } from "lucide-react";
import "./Initiatives.css";

/* ── Protest data ── */
const protests = [
    {
        id: 1,
        year: "2017",
        title: "Jallikattu Protest – Madurai",
        tag: "Cultural Rights",
        tagColor: "#1a5d1a",
        icon: <Shield size={22} />,
        img: "/images/g7.jpeg",
        description:
            "MM Trust initiated and led the historic Jallikattu protest in Madurai on 16th January 2017, supporting the cultural rights of Tamil people and igniting a nationwide conversation about the preservation of Tamil heritage.",
    },
    {
        id: 2,
        year: "2017",
        title: "Sterlite Protest – Environmental Justice",
        tag: "Environment",
        tagColor: "#065f46",
        icon: <Leaf size={22} />,
        img: "/images/i2.jpeg",
        description:
            "The Trust actively participated in the Sterlite protest against environmental pollution, standing firmly with the communities affected by industrial negligence and demanding accountability for harm caused to air, water, and livelihoods.",
    },
    {
        id: 3,
        year: "2017",
        title: "Neduvasal Protest – Farmers' Lands",
        tag: "Farmers' Rights",
        tagColor: "#92400e",
        icon: <Wheat size={22} />,
        img: "/images/i3.jpeg",
        description:
            "MM Trust took a strong stand against the Neduvasal hydrocarbon extraction project, opposing plans that threatened fertile farmlands and the futures of thousands of farming families in the delta region.",
    },
    {
        id: 4,
        year: "Mar 2017",
        title: "Jantar Mantar Farmers' Protest – New Delhi",
        tag: "National Advocacy",
        tagColor: "#348a34",
        icon: <Landmark size={22} />,
        img: "/images/g15.jpeg",
        description:
            "Members of MM Trust participated in the farmers' protest at Jantar Mantar, New Delhi in March 2017, and supported Tamil Nadu farmers in meeting Union Ministers Arun Jaitley and Nitin Gadkari to represent their critical demands at the national level.",
    },
    {
        id: 5,
        year: "Ongoing",
        title: "Cauvery Water Dispute Protests",
        tag: "Water Rights",
        tagColor: "#f4ce14",
        icon: <Droplets size={22} />,
        img: "/images/i5.jpeg",
        description:
            "MM Trust stood firmly with farmers during the Cauvery water dispute protests, supporting Tamil Nadu farmers in their fight for fair water distribution and ensuring their voices reached the corridors of decision-making.",
    },
];

const Initiatives = () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div className="initiatives-page">
            {/* ── Hero ── */}
            <section className="initiatives-hero">
                <div className="initiatives-hero-bg" />
                <div className="initiatives-hero-content">
                    <span className="initiatives-eyebrow">Standing Up. Speaking Out.</span>
                    <h1 className="initiatives-hero-title">Our Initiatives</h1>
                    <p className="initiatives-hero-sub">
                        MM Trust has been at the forefront of social justice, farmers'
                        rights, and environmental protection across Tamil Nadu and India.
                    </p>
                </div>
                <div className="initiatives-hero-wave">
                    <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
                        <path
                            d="M0,45 C480,90 960,0 1440,45 L1440,90 L0,90 Z"
                            fill="#f5fdf5"
                        />
                    </svg>
                </div>
            </section>


            {/* ── Content ── */}
            <section className="initiatives-body">
                <>
                    {/* Section intro */}
                    <div className="ini-section-intro" data-aos="fade-up">
                        <div className="ini-intro-badge">
                            <Megaphone size={16} className="ini-badge-icon" /> Protest Activities
                        </div>
                        <h2 className="ini-section-title">
                            Protests Initiated &amp; Participated by MM Trust
                        </h2>
                        <p className="ini-section-desc">
                            MM Trust has actively stood for social justice, farmers' rights,
                            and environmental protection by initiating and participating in
                            several historic protests across Tamil Nadu and India.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="ini-timeline">
                        {protests.map((p, idx) => (
                            <div
                                key={p.id}
                                className={`ini-timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
                                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={idx * 80}
                            >
                                {/* Year bubble */}
                                <div className="ini-timeline-node">
                                    <span className="ini-timeline-icon">{p.icon}</span>
                                </div>

                                {/* Card */}
                                <div
                                    className={`ini-protest-card ${expandedId === p.id ? "expanded" : ""}`}
                                    onClick={() =>
                                        setExpandedId(expandedId === p.id ? null : p.id)
                                    }
                                >
                                    {p.img && (
                                        <div className="ini-card-image">
                                            <img src={p.img} alt={p.title} />
                                        </div>
                                    )}
                                    <div className="ini-card-top">
                                        <span
                                            className="ini-card-tag"
                                            style={{ background: p.tagColor }}
                                        >
                                            {p.tag}
                                        </span>
                                        <span className="ini-card-year">{p.year}</span>
                                    </div>
                                    <h3 className="ini-card-title">{p.title}</h3>
                                    <p
                                        className={`ini-card-desc ${expandedId === p.id ? "show" : ""}`}
                                    >
                                        {p.description}
                                    </p>
                                    <button className="ini-card-toggle">
                                        {expandedId === p.id ? "Show less ▲" : "Read more ▼"}
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Central spine */}
                        <div className="ini-timeline-spine" />
                    </div>

                    {/* Quote Banner */}
                    <div className="ini-quote-banner" data-aos="zoom-in">
                        <div className="ini-quote-mark">"</div>
                        <blockquote>
                            Small acts of courage, repeated everywhere, become the tide
                            that changes history.
                        </blockquote>
                        <cite>— Mannukkum Makkalukum Trust</cite>
                    </div>
                </>
            </section>
        </div>
    );
};

export default Initiatives;
