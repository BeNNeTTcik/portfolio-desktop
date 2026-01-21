import './DateTime.css';
import { useEffect, useState } from 'react';

{/* Calendar component */}
function Calendar({
  year,
  month,
  activeDay,
}: {
  year: number;
  month: number;
  activeDay: number;
}) {
  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];

  for (let i = 1; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="calendar">
      <div className="calendar-header">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {cells.map((d, i) => (
          <div
            key={i}
            className={`calendar-cell ${
              d === activeDay ? 'active' : ''
            }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

{/* Analog Clock component */}
function AnalogClock({ date }: { date: Date }) {
  const h = date.getHours() % 12;
  const m = date.getMinutes();
  const s = date.getSeconds();

  return (
    <div className="analog-clock">
      <div
        className="hand hour"
        style={{ transform: `rotate(${h * 30 + m * 0.5}deg)` }}
      />
      <div
        className="hand minute"
        style={{ transform: `rotate(${m * 6}deg)` }}
      />
      <div
        className="hand second"
        style={{ transform: `rotate(${s * 6}deg)` }}
      />
    </div>
  );
}

{/* Month Picker component */}
function MonthPicker({
  year,
  month,
  onChange,
}: {
  year: number;
  month: number;
  onChange: (y: number, m: number) => void;
}) {
  return (
    <div className="month-picker">
      <select
        value={month}
        onChange={e => onChange(year, +e.target.value)}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <option key={i} value={i}>
            {new Date(0, i).toLocaleString('en', { month: 'long' })}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={year}
        onChange={e => onChange(+e.target.value, month)}
      />
    </div>
  );
}


export default function DateTime() {
  const [now, setNow] = useState(new Date());

  // aktualizacja zegara
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  return (
    <div className="datetime-window">
      <div className="datetime-left">
        <MonthPicker
          year={year}
          month={month}
          onChange={(y, m) => {
          setYear(y);
          setMonth(m);
        }}
        />
        <Calendar year={year} month={month} activeDay={now.getDate()} />
      </div>

      <div className="datetime-right">
        <AnalogClock date={now} />
        <div className="digital-time">
          {now.toLocaleTimeString('pl-PL')}
        </div>
      </div>
    </div>
  );
}
