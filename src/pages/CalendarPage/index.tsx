import React from "react";
import Card from "../../commons/Card";
import styles from "./calendarPage.module.scss";
import Calendar from "../../commons/Calendar";
import Button from "../../commons/Button";
import Header from "../../components/Header";

const CalendarPage: React.FC = () => {
  const [date, setDate] = React.useState(new Date());
  console.log("test date", date);
  return (
    <div className={styles.container}>
      <Header />
      <Card className={styles.card}>
        <Calendar value={date} onChange={setDate} />
        <div className={styles.buttonsContainer}>
          <Button className={styles.button}>Schedule</Button>
          <Button
            className={styles.button}
            variant={"outlined"}
            color={"secondary"}
          >
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CalendarPage;
