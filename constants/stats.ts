export const PROOF_STATS = [
  {
    label: "Missed calls happen",
    value: "~62%",
    sub: "of inbound calls to small businesses are missed",
    sourceLabel: "Industry analyses",
    sourceUrl: "/blog/missed-calls-atlanta"
  },
  {
    label: "Speed-to-lead wins",
    value: "~21×",
    sub: "higher connect/qualification if you respond within 5 minutes",
    sourceLabel: "Speed-to-lead research",
    sourceUrl: "/blog/speed-to-lead-5-minutes"
  },
  {
    label: "First reply advantage",
    value: "78%",
    sub: "of buyers choose the first responder",
    sourceLabel: "Buyer behavior survey",
    sourceUrl: "/blog/first-responder-advantage"
  },
  {
    label: "SMS gets seen",
    value: "~98%",
    sub: "open rate; most read within minutes",
    sourceLabel: "Messaging benchmarks",
    sourceUrl: "/blog/sms-open-rate-98"
  }
];

export const ROI_DEFAULTS = {
  missedCallsPerMonth: 40,
  reachRate: 0.4,     // 40% of missed callers reached via text
  bookingRate: 0.3,   // 30% of reached leads book
  avgTicket: 200      // $200 average job value
};

