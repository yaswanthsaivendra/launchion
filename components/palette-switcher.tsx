"use client";

import { useState } from "react";
import { Palette, ChevronDown, ChevronUp } from "lucide-react";

interface ColorPalette {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
}

const palettes: ColorPalette[] = [
    {
        name: "Dark Teal",
        colors: {
            primary: "#00ADB5",
            secondary: "#393E46",
            accent: "#00ADB5",
            background: "#EEEEEE",
        },
    },
    {
        name: "Aqua Dream",
        colors: {
            primary: "#71C9CE",
            secondary: "#A6E3E9",
            accent: "#71C9CE",
            background: "#E3FDFD",
        },
    },
    {
        name: "Navy Blue",
        colors: {
            primary: "#3F72AF",
            secondary: "#DBE2EF",
            accent: "#3F72AF",
            background: "#F9F7F7",
        },
    },
    {
        name: "Peachy Pink",
        colors: {
            primary: "#FF9494",
            secondary: "#FFD1D1",
            accent: "#FF9494",
            background: "#FFF5E4",
        },
    },
    {
        name: "Soft Rose",
        colors: {
            primary: "#F2BED1",
            secondary: "#FDCEDF",
            accent: "#F2BED1",
            background: "#F9F5F6",
        },
    },
    {
        name: "Purple Blush",
        colors: {
            primary: "#8785A2",
            secondary: "#FFC7C7",
            accent: "#8785A2",
            background: "#F6F6F6",
        },
    },
    {
        name: "Warm Earth",
        colors: {
            primary: "#AD8B73",
            secondary: "#CEAB93",
            accent: "#AD8B73",
            background: "#FFFBE9",
        },
    },
    {
        name: "Lavender Sky",
        colors: {
            primary: "#424874",
            secondary: "#A6B1E1",
            accent: "#424874",
            background: "#F4EEFF",
        },
    },
    {
        name: "Neon Pop",
        colors: {
            primary: "#FF2E63",
            secondary: "#08D9D6",
            accent: "#FF2E63",
            background: "#EAEAEA",
        },
    },
    {
        name: "Ocean Blue",
        colors: {
            primary: "#3282B8",
            secondary: "#0F4C75",
            accent: "#3282B8",
            background: "#BBE1FA",
        },
    },
];

export function PaletteSwitcher() {
    const [selectedPalette, setSelectedPalette] = useState(0);
    const [isMinimized, setIsMinimized] = useState(false);

    const applyPalette = (palette: ColorPalette) => {
        const root = document.documentElement;

        // Convert hex to oklch (simplified - using direct hex for now)
        root.style.setProperty("--primary-hex", palette.colors.primary);
        root.style.setProperty("--secondary-hex", palette.colors.secondary);
        root.style.setProperty("--accent-hex", palette.colors.accent);
        root.style.setProperty("--background-hex", palette.colors.background);

        // Update CSS variables
        root.style.setProperty("--primary", palette.colors.primary);
        root.style.setProperty("--secondary", palette.colors.secondary);
        root.style.setProperty("--accent", palette.colors.accent);
        root.style.setProperty("--background", palette.colors.background);
    };

    const handlePaletteChange = (index: number) => {
        setSelectedPalette(index);
        applyPalette(palettes[index]);
    };

    return (
        <div className="fixed top-4 right-4 z-50 bg-card border border-border rounded-lg shadow-lg transition-all duration-300 ease-in-out max-w-xs">
            {/* Header with Toggle */}
            <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors rounded-t-lg"
            >
                <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-sm">Color Palette</h3>
                </div>
                {isMinimized ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                )}
            </button>

            {/* Collapsible Content */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isMinimized ? "max-h-0" : "max-h-[600px]"
                    }`}
            >
                <div className="p-4 pt-0 space-y-2 max-h-[500px] overflow-y-auto">
                    {palettes.map((palette, index) => (
                        <button
                            key={index}
                            onClick={() => handlePaletteChange(index)}
                            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-accent ${selectedPalette === index ? "bg-accent ring-2 ring-primary" : ""
                                }`}
                        >
                            <div className="flex gap-1">
                                <div
                                    className="w-6 h-6 rounded"
                                    style={{ backgroundColor: palette.colors.primary }}
                                />
                                <div
                                    className="w-6 h-6 rounded"
                                    style={{ backgroundColor: palette.colors.secondary }}
                                />
                                <div
                                    className="w-6 h-6 rounded"
                                    style={{ backgroundColor: palette.colors.accent }}
                                />
                                <div
                                    className="w-6 h-6 rounded"
                                    style={{ backgroundColor: palette.colors.background }}
                                />
                            </div>
                            <span className="text-xs font-medium">{palette.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
