import React, { useEffect } from "react";
import styles from "./calendar.module.scss";
import DatePicker from "./DatePicker";
import { formatDate } from "../../utils/date";
import TimePicker from "./TimePicker";

type CalendarProps = {
  value: Date;
  onChange: (date: Date) => void;
};
const Calendar: React.FC<CalendarProps> = ({ value, onChange }) => {
  const [date, setDate] = React.useState(value);
  const [time, setTime] = React.useState<{ hour: string; period: "AM" | "PM" }>(
    { hour: "12", period: "AM" }
  );

  useEffect(() => {
    onChange(new Date(`${date.toDateString()} ${time.hour}:00 ${time.period}`));
  }, [date, time]);

  return (
    <div className={styles.container}>
      <div className={styles.datePickerContainer}>
        <div className={styles.dateInputContainer}>
          <h3>Data</h3>
          <span className={styles.dateDisplay}>{formatDate(date)}</span>
        </div>
        <DatePicker value={date} onChange={setDate} />
      </div>
      <div>
        <div className={styles.dateInputContainer}>
          <h3>Time</h3>
          <span className={styles.dateDisplay}>
            {time.hour}:00 {time.period}
          </span>
        </div>
        <TimePicker value={time} onChange={setTime} />
      </div>
    </div>
  );
};

export default Calendar;
