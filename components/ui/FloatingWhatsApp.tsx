"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { personalData } from "@/data/personal";

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I found your portfolio and I'm interested in discussing opportunities with you."
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${personalData.contact.phone}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        title="Chat with me on WhatsApp"
      >
        {/* WhatsApp icon */}
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          {/* Notification dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          />
        </div>

        {/* Text that appears on hover */}
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          whileHover={{ opacity: 1, width: "auto" }}
          className="whitespace-nowrap overflow-hidden text-sm font-semibold"
        >
          Let's Chat!
        </motion.span>

        {/* Ripple effect */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
        />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap backdrop-blur-sm"
      >
        Start a conversation on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
      </motion.div>
    </motion.div>
  );
}