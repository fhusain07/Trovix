import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible || pathname === "/contact" || pathname === "/partners")
    return null;
  return (
    <div className="mobile-cta">
      <Link to="/contact" className="action action-primary">
        Discuss Your Project
        <ArrowUpRight size={14} />
      </Link>
      <a
        className="action action-secondary"
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={14} />
        WhatsApp us
      </a>
    </div>
  );
}
