import { component$ } from "@builder.io/qwik";

interface GradientSubtitleProps {
  text: string;
  className?: string;
}

export const GradientSubtitle = component$(
  ({ text, className = "" }: GradientSubtitleProps) => {
    return (
      <h2
        class={`font-instrument mb-6 bg-clip-text text-3xl text-transparent sm:text-6xl ${className}`}
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: "100%",
          letterSpacing: "0%",
          backgroundImage:
            "linear-gradient(to right, #FEB24C, #FF5C95, #B638CF, #7432F6)",
        }}
      >
        {text}
      </h2>
    );
  },
);
