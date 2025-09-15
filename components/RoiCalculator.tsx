"use client";
import { useMemo, useState } from "react";
import { ROI_DEFAULTS } from "@/constants/stats";

function currency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function RoiCalculator() {
  const [missed, setMissed] = useState(ROI_DEFAULTS.missedCallsPerMonth);
  const [reach, setReach]   = useState(ROI_DEFAULTS.reachRate);
  const [book, setBook]     = useState(ROI_DEFAULTS.bookingRate);
  const [ticket, setTicket] = useState(ROI_DEFAULTS.avgTicket);

  const recovered = useMemo(() => missed * reach * book * ticket, [missed, reach, book, ticket]);

  return (
    <div className="rounded-2xl border bg-card p-4 md:p-6 shadow-sm">
      <h3 className="text-base md:text-lg font-medium">Estimate your recovered revenue</h3>
      <p className="text-sm text-muted-foreground">Recovered = Missed × Reach × Booking × Avg ticket</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-medium">Missed calls / month: {missed}</label>
          <input aria-label="Missed calls per month" className="w-full" type="range" min={0} max={200} value={missed} onChange={(e)=>setMissed(+e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium">Reach rate via text: {(reach*100).toFixed(0)}%</label>
          <input aria-label="Reach rate" className="w-full" type="range" min={0} max={1} step={0.01} value={reach} onChange={(e)=>setReach(+e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium">Booking rate from reached: {(book*100).toFixed(0)}%</label>
          <input aria-label="Booking rate" className="w-full" type="range" min={0} max={1} step={0.01} value={book} onChange={(e)=>setBook(+e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium">Average ticket: {currency(ticket)}</label>
          <input aria-label="Average ticket" className="w-full" type="range" min={50} max={5000} step={10} value={ticket} onChange={(e)=>setTicket(+e.target.value)} />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <div className="text-sm text-muted-foreground">Estimated monthly revenue recovered:</div>
        <div className="text-2xl md:text-3xl font-semibold">{currency(recovered)}</div>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        Defaults are editable. Results are estimates; actuals vary by industry and response quality.
      </p>
    </div>
  );
}


