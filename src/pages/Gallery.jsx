import React, { useState } from "react";
import "./Gallery.css";

const categories = ["All", "Tree Plantation", "Community", "Events", "Volunteers"];

const galleryItems = [
    {
        id: 1,
        category: "Tree Plantation",
        title: "Saplings Drive – Cuddalore",
        date: "Jan 2025",
        img: "/images/g1.jpeg",
        span: "tall",
    },
    {
        id: 2,
        category: "Community",
        title: "Village Outreach Program",
        date: "Nov 2024",
        img: "/images/g2.jpeg",
        span: "wide",
    },
    {
        id: 3,
        category: "Events",
        title: "Annual Environment Day",
        date: "Jun 2024",
        img: "/images/g3.jpeg",
        span: "",
    },
    {
        id: 4,
        category: "Volunteers",
        title: "Student Volunteer Camp",
        date: "Dec 2024",
        img: "/images/g4.jpeg",
        span: "",
    },
    {
        id: 5,
        category: "Community",
        title: "School Partnership – Chennai",
        date: "Feb 2025",
        img: "/images/g5.jpeg",
        span: "tall",
    },
    {
        id: 6,
        category: "Tree Plantation",
        title: "Mangrove Restoration",
        date: "Mar 2024",
        img: "/images/g6.jpeg",
        span: "wide",
    },
    {
        id: 7,
        category: "Community",
        title: "Women Self-Help Group",
        date: "Oct 2024",
        img: "/images/g1.jpeg",
        span: "",
    },
    {
        id: 8,
        category: "Events",
        title: "Cultural Heritage Fair",
        date: "Jan 2025",
        img: "/images/g2.jpeg",
        span: "",
    },
    {
        id: 9,
        category: "Volunteers",
        title: "Clean-Up Drive – Beach",
        date: "Sep 2024",
        img: "/images/g3.jpeg",
        span: "",
    },
    {
        id: 10,
        category: "Community",
        title: "Nature Science Workshop",
        date: "Mar 2025",
        img: "/images/g4.jpeg",
        span: "wide",
    },
    {
        id: 11,
        category: "Tree Plantation",
        title: "Forest Corridor Project",
        date: "Aug 2024",
        img: "/images/g5.jpeg",
        span: "",
    },
    {
        id: 12,
        category: "Community",
        title: "Farmer Awareness Program",
        date: "Dec 2023",
        img: "/images/g6.jpeg",
        span: "tall",
    },
    {
        id: 13,
        category: "Events",
        title: "Sustainability Summit",
        date: "Apr 2025",
        img: "/images/g10.jpeg",
        span: "",
    },
    {
        id: 14,
        category: "Tree Plantation",
        title: "Urban Greenery Project",
        date: "May 2025",
        img: "/images/g11.jpeg",
        span: "wide",
    },
    {
        id: 15,
        category: "Volunteers",
        title: "Coastal Cleanup Initiative",
        date: "Jun 2025",
        img: "/images/g12.jpeg",
        span: "",
    },
    {
        id: 16,
        category: "Community",
        title: "Eco-Education Program",
        date: "Jul 2025",
        img: "/images/g13.jpeg",
        span: "tall",
    },
    {
        id: 17,
        category: "Community",
        title: "Local Market Support",
        date: "Aug 2025",
        img: "/images/g14.jpeg",
        span: "",
    },
    {
        id: 18,
        category: "Events",
        title: "Earth Day Celebration",
        date: "Apr 2025",
        img: "/images/g15.jpeg",
        span: "wide",
    },
];

const Gallery = () => {
    const [active, setActive] = useState("All");
    const [lightbox, setLightbox] = useState(null);

    const filtered =
        active === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === active);

    return (
        <div className="gallery-page">
            {/* ── Hero Banner ── */}
            <section className="gallery-hero">
                <div className="gallery-hero-overlay" />
                <div className="gallery-hero-content">
                    <span className="gallery-hero-eyebrow">Our Moments</span>
                    <h1 className="gallery-hero-title">Gallery</h1>
                    <p className="gallery-hero-sub">
                        Capturing every step of our journey — from saplings to communities.
                    </p>
                </div>
                <div className="gallery-hero-wave">
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path
                            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
                            fill="var(--gallery-bg)"
                        />
                    </svg>
                </div>
            </section>

            {/* ── Filter Bar ── */}
            <section className="gallery-body">
                <div className="gallery-filter-bar" data-aos="fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`gallery-filter-btn ${active === cat ? "active" : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Masonry Grid ── */}
                <div className="gallery-grid" data-aos="fade-up" data-aos-delay="100">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className={`gallery-card ${item.span}`}
                            onClick={() => setLightbox(item)}
                        >
                            <img src={item.img} alt={item.title} loading="lazy" />
                            <div className="gallery-card-overlay">
                                <span className="gallery-card-category">{item.category}</span>
                                <h3 className="gallery-card-title">{item.title}</h3>
                                <p className="gallery-card-date">{item.date}</p>
                            </div>
                            <div className="gallery-card-zoom">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    <line x1="11" y1="8" x2="11" y2="14" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="gallery-empty">No photos in this category yet.</p>
                )}
            </section>

            {/* ── Lightbox ── */}
            {lightbox && (
                <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
                    <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close Lightbox">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <img src={lightbox.img} alt={lightbox.title} />
                        <div className="gallery-lightbox-info">
                            <span className="gallery-lightbox-cat">{lightbox.category}</span>
                            <h2>{lightbox.title}</h2>
                            <p>{lightbox.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
