import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./style.css";
const Calendar = () => {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateCalendar
				className="calendar"
				value={value}
				onChange={(newValue) => setValue(newValue)}
				dayOfWeekFormatter={(day) => `${day}.`}
			/>
		</LocalizationProvider>
	);
};

export default Calendar;
