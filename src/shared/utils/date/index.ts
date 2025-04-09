import { format } from 'date-fns';

export const formatTimestampToDate = (timestamp: number, formatStr = 'yyyy.MM.dd') =>
	format(new Date(timestamp), formatStr);
