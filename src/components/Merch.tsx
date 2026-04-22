import { useEffect, useRef, useState } from "react";

export default function Merch() {
    const merchRef = useRef<HTMLElement>(null);
    const [phaseIndex, setPhaseIndex] = useState(0);

    const images = ["/t-front.png", "/t-back.png", "/t-both.png"];
    // 0: front, 1: back, 2: both
    // Order: Sweep down reveals Front, Up reveals Back, Down reveals Both, Up reveals Front, Down reveals Back, Up reveals Both
    const bgSequence = [2, 0, 1, 2, 0, 1];
    const fgSequence = [0, 1, 2, 0, 1, 2];
    const dirSequence = ['down', 'up', 'down', 'up', 'down', 'up'];

    const bgImage = images[bgSequence[phaseIndex]];
    const fgImage = images[fgSequence[phaseIndex]];
    const direction = dirSequence[phaseIndex];

    const handleSweepEnd = () => {
        setPhaseIndex((prev) => (prev + 1) % 6);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        const elements = entry.target.querySelectorAll(".scroll-animate");
                        elements.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add("animate-in");
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (merchRef.current) {
            observer.observe(merchRef.current);
        }

        return () => {
            if (merchRef.current) {
                observer.unobserve(merchRef.current);
            }
        };
    }, []);

    return (
        <section
            id="merch"
            className="section merch-section relative overflow-hidden isolate"
            ref={merchRef}
            style={{ padding: "6rem 0", background: "transparent" }}
        >
            <div className="glow-bg glow-right -z-10"></div>
            <div className="section-container relative z-10">
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div className="title-block">
                        <h2 className="section-title scroll-animate">
                            OUR <span className="text-primary text-glow">MERCH</span>
                        </h2>
                        <div className="title-bar" style={{ margin: "1rem auto 0" }}></div>
                    </div>
                    <p className="scroll-animate" style={{ marginTop: "1.5rem", color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "1.5rem auto 0 auto" }}>
                        Equip yourself for the journey to the Upside Down. Limited edition DevSummit 2026 gear to survive the void.
                    </p>
                </div>

                <div className="merch-display scroll-animate" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>

                    <div className="merch-image-container" style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "500px",
                        borderRadius: "4px",
                        border: "3px solid var(--primary-color)",
                        background: "rgba(5, 5, 5, 0.8)",
                        boxShadow: "0 0 15px var(--primary-color), 0 0 30px rgba(255, 0, 0, 0.4), inset 0 0 20px var(--primary-color)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div className="corner-decor top-left"></div>
                        <div className="corner-decor top-right"></div>
                        <div className="corner-decor bottom-left"></div>
                        <div className="corner-decor bottom-right"></div>

                        {/* Invisible structural driver to eliminate letterbox wiping delay */}
                        <img src={images[0]} style={{ width: "100%", height: "auto", visibility: "hidden" }} alt="prop" />

                        <img src={bgImage} alt="T-Shirt Background" className={`scan-bg-img bg-sweep-${direction}`} key={`bg-${phaseIndex}`} />
                        <img src={fgImage} alt="T-Shirt Foreground" className={`scan-fg-img fg-sweep-${direction}`} key={`fg-${phaseIndex}`} />
                        <div className={`scanner-bar-react bar-sweep-${direction}`} key={`bar-${phaseIndex}`} onAnimationEnd={handleSweepEnd}></div>
                    </div>

                    <div className="merch-actions scroll-animate" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "600px" }}>
                        <button className="scanline-btn" onClick={() => window.open('https://forms.gle/sp2SEr4K6RTVZG4t9', '_blank')}>
                            HOW'S THE MERCH
                        </button>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginTop: '1rem',
                            fontFamily: 'monospace',
                            fontSize: '0.85rem',
                            color: '#dd4a36ff',
                            letterSpacing: '1px'
                        }}>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
