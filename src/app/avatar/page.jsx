"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Avatar() {
    const containerRef = useRef(null);

    const [eyes, setEyes] = useState({
        left: { x: 0, y: 0 },
        right: { x: 0, y: 0 },
    });

    const handleMouseMove = (e) => {
        const isDesktop = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        if (!isDesktop || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const updateEye = (eyeX, eyeY, maxDistance = 8) => {
            const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);

            return {
                x: Math.cos(angle) * maxDistance,
                y: Math.sin(angle) * maxDistance,
            };
        };

        const leftEyeCenter = {
            x: rect.width * 0.4,
            y: rect.height * 0.405,
        };

        const rightEyeCenter = {
            x: rect.width * 0.55,
            y: rect.height * 0.4,
        };

        setEyes({
            left: updateEye(leftEyeCenter.x, leftEyeCenter.y),
            right: updateEye(rightEyeCenter.x, rightEyeCenter.y),
        });
    };

    return (
        <div
            ref={containerRef}
            className="avatar"
            onMouseMove={handleMouseMove}
        >
            <Image
                src="/images/avatar.jpg"
                alt="Avatar"
                width={960}
                height={1280}
                priority
            />

            {/* Left Eye */}
            <div className="eye left-eye">
                <div
                    className="pupil"
                    style={{
                        transform: `translate(${eyes.left.x}px, ${eyes.left.y}px)`,
                    }}
                />
            </div>

            {/* Right Eye */}
            <div className="eye right-eye">
                <div
                    className="pupil"
                    style={{
                        transform: `translate(${eyes.right.x}px, ${eyes.right.y}px)`,
                    }}
                />
            </div>
        </div>
    );
}