import React, { useCallback, useState } from "react";
import styles from "./datePicker.module.scss";
import classnames from "classnames";
import Button from "../../Button";
import { formatDate, isSameDay } from "../../../utils/date";

type DatePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  value = new Date(),
  onChange,
}) => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = useCallback(() => {
    setDate((prevDate) => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setDate((prevDate) => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
    });
  }, []);

  const handleDateSelect = useCallback((selectedDate: Date) => {
    onChange?.(selectedDate);
  }, []);

  const renderWeeks = useCallback(() => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const weeks = [];

    let days = [];
    let dayOfWeek = firstDayOfMonth.getDay();
    let currentDay = firstDayOfMonth;

    while (currentDay <= lastDayOfMonth) {
      for (let i = 0; i < 7; i++) {
        const localeCurrentDay = currentDay;
        if (i < dayOfWeek) {
          days.push(<td key={`empty-${i}`}></td>);
        } else {
          days.push(
            <td
              className={classnames(styles.td, {
                [styles.greyText]: currentDay > lastDayOfMonth,
                [styles.selected]: isSameDay(currentDay, value),
              })}
              key={currentDay.toString()}
              onClick={() => {
                handleDateSelect(localeCurrentDay);
              }}
              data-testid={formatDate(currentDay)}
            >
              {currentDay.getDate()}
            </td>
          );
          currentDay = new Date(
            currentDay.getFullYear(),
            currentDay.getMonth(),
            currentDay.getDate() + 1
          );
        }
      }

      weeks.push(<tr key={currentDay.toString()}>{days}</tr>);
      days = [];
      dayOfWeek = 0;
    }

    return weeks;
  }, [date, value, onChange]);

  return (
    <div className={styles.container}>
      <div className={styles.dateNavAndLabelContainer}>
        <h3 className={styles.title}>
          {date.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <div className={styles.navButtonContainer}>
          <Button
            onClick={handlePrevMonth}
            variant={"text"}
            className={styles.button}
          >
            {"<"}
          </Button>
          <Button
            onClick={handleNextMonth}
            variant={"text"}
            className={styles.button}
          >
            {">"}
          </Button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className={styles.th}>S</th>
            <th className={styles.th}>M</th>
            <th className={styles.th}>T</th>
            <th className={styles.th}>W</th>
            <th className={styles.th}>T</th>
            <th className={styles.th}>F</th>
            <th className={styles.th}>S</th>
          </tr>
        </thead>
        <tbody>{renderWeeks()}</tbody>
      </table>
    </div>
  );
};

export default DatePicker;
