import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "dayjs/locale/pt-br";
import "./style.css";

const Calendar = () => {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

	const formatDayOfWeek = (day: string) => {
		const weekdays = ["Dom.", "Seg.", "Ter.", "Quar.", "Qui.", "Sex.", "Sáb."];
		return weekdays[parseInt(day, 10)];
	};

	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale="pt-BR">
			<DateCalendar
				className="calendar"
				value={value}
				onChange={(newValue) => setValue(newValue)}
				dayOfWeekFormatter={formatDayOfWeek}
				disablePast={true}
				openTo="day"
				autoFocus={true}
			/>
		</LocalizationProvider>
	);
};

export default Calendar;
