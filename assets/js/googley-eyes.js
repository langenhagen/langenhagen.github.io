// Googley eyes module.
// Extracted from googley-eyes.html so the same face appears in the About section.
// The mouth periodically wiggles into a smile, then relaxes.

const WIGGLE_INTERVAL_S = 5;
const WIGGLE_DURATION_S = 3;
const WIGGLE_FREQUENCY = 5;
const WIGGLE_AMPLITUDE = 10;
const WAVE_AMPLITUDE = 5;
const NUM_HUMPS = 2;
const STEPS = 200;

const P0 = { x: 10, y: 10 };
const P1_BASE = { x: 50, y: 60 };
const P2 = { x: 90, y: 10 };
const REST_PATH = "M10,10 Q50,60 90,10";

function bezier(t, p0, p1, p2) {
    const u = 1 - t;
    return {
        x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
        y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
    };
}

function fadeFactor(elapsed, total) {
    const half = total / 2;
    return elapsed < half ? elapsed / half : (total - elapsed) / half;
}

function wavePath(mainProgress, fade, tForWiggle) {
    const t = tForWiggle * WIGGLE_FREQUENCY * 2 * Math.PI;
    const yControl = P1_BASE.y + Math.sin(t) * WIGGLE_AMPLITUDE * fade;
    const P1 = { x: P1_BASE.x, y: yControl };
    let d = "";
    for (let i = 0; i <= STEPS; i++) {
        const bt = i / STEPS;
        const p = bezier(bt, P0, P1, P2);
        const y = p.y + Math.sin(bt * NUM_HUMPS * 2.4 * Math.PI + mainProgress) *
            WAVE_AMPLITUDE * fade;
        d += i === 0 ? `M${p.x},${y}` : ` L${p.x},${y}`;
    }
    return d;
}

export function initGoogleyEyes(root) {
    if (!root) return;

    const eyes = root.querySelectorAll(".googley-eye");
    const mouth = root.querySelector(".googley-mouth path");
    if (!eyes.length || !mouth) return;

    // Pupils follow the cursor
    document.addEventListener(
        "pointermove",
        (event) => {
            eyes.forEach((eye) => {
                const pupil = eye.querySelector(".googley-pupil");
                if (!pupil) return;
                const rect = eye.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const angle = Math.atan2(event.clientY - cy, event.clientX - cx);
                const maxX = (rect.width - pupil.offsetWidth) / 2;
                const maxY = (rect.height - pupil.offsetHeight) / 2;
                const px = Math.cos(angle) * maxX;
                const py = Math.sin(angle) * maxY;
                pupil.style.transform = `translate(${px}px, ${py}px)`;
            });
        },
        { passive: true }
    );

    // Periodic mouth wiggle (skipped under reduced-motion preference)
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let wiggleStart = null;
    function animate(timestamp) {
        if (wiggleStart === null) wiggleStart = timestamp;
        const elapsed = (timestamp - wiggleStart) / 1000;
        if (elapsed < WIGGLE_DURATION_S) {
            const fade = fadeFactor(elapsed, WIGGLE_DURATION_S);
            const mainProgress = elapsed * 2 * Math.PI * 4;
            mouth.setAttribute("d", wavePath(mainProgress, fade, elapsed));
            requestAnimationFrame(animate);
        } else {
            mouth.setAttribute("d", REST_PATH);
            wiggleStart = null;
            setTimeout(
                () => requestAnimationFrame(animate),
                WIGGLE_INTERVAL_S * 1000
            );
        }
    }
    setTimeout(() => requestAnimationFrame(animate), WIGGLE_INTERVAL_S * 1000);
}
