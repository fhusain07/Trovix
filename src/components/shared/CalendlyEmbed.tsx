import React from 'react';

// Update this URL after setting up your Calendly account at https://calendly.com
const CALENDLY_URL = 'https://calendly.com/trovixtech/30min';

export const CalendlyEmbed: React.FC = () => (
  <div className="glass-effect rounded-xl overflow-hidden">
    <div className="px-6 py-4 border-b border-border text-center">
      <h3 className="font-display font-bold text-lg">Book a Free 30-Minute Discovery Call</h3>
      <p className="text-sm text-muted-foreground mt-1">
        No commitment — just a conversation about your project.
      </p>
    </div>
    <iframe
      src={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=0`}
      style={{ border: 'none', display: 'block' }}
      width="100%"
      height="660"
      title="Book a free discovery call with Trovix"
      loading="lazy"
    />
  </div>
);
