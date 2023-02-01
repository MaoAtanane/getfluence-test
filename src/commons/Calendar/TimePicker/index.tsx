import React from "react";
import styles from "./timePicker.module.scss";
import classnames from "classnames";

type TimePickerProps = {
  value: { hour: string; period: "AM" | "PM" };
  onChange: (time: { hour: string; period: "AM" | "PM" }) => void;
};
const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {[
          "12",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
        ].map((hour) => (
          <div
            key={hour}
            className={classnames(styles.hourContainer, {
              [styles.selected]: value.hour === hour && value.period === "AM",
            })}
            onClick={() => onChange({ hour, period: "AM" })}
            data-testid={`${hour} : 00 AM`}
          >
            <div className={styles.hour}>{hour} : 00 AM</div>
          </div>
        ))}
        {[
          "12",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
        ].map((hour) => (
          <div
            key={hour}
            className={classnames(styles.hourContainer, {
              [styles.selected]: value.hour === hour && value.period === "PM",
            })}
            onClick={() => onChange({ hour, period: "PM" })}
          >
            <div className={styles.hour}>{hour} : 00 PM</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TimePicker;
