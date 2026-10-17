import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
export function WhatsAppFloatButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Let’s talk with Trovix on WhatsApp"
    >
      <MessageCircle size={17} aria-hidden="true" />
      Let’s talk
    </a>
  );
}
