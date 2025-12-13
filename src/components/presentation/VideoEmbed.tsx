
import { motion } from "framer-motion";

interface VideoEmbedProps {
    src: string;
    title?: string;
    type?: "youtube" | "vimeo" | "native";
    className?: string;
}

export const VideoEmbed = ({ src, title = "Video", type = "youtube", className = "aspect-video" }: VideoEmbedProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50"
        >
            <div className={`${className} w-full`}>
                {type === "native" ? (
                    <video
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        src={src}
                    />
                ) : (
                    <iframe
                        src={src}
                        title={title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </motion.div>
    );
};
