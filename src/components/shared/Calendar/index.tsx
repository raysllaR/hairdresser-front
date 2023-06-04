import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calendar = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticDatePicker />
		</LocalizationProvider>
	);
};

export default Calendar;
