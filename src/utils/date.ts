import { parseISO, differenceInCalendarDays, addDays, format } from 'date-fns';

export const d = (s: string): Date => parseISO(s);

export const daysBetween = (a: string, b: string): number =>
  differenceInCalendarDays(d(a), d(b));

export const addDaysStr = (s: string, n: number): string =>
  format(addDays(d(s), n), 'yyyy-MM-dd');

export const formatMonth = (s: string): string => format(d(s), 'LLL yyyy');
export const formatDay = (s: string): string => format(d(s), 'yyyy-MM-dd');

export const toDate = (s: string) => parseISO(s);
export const dayDiff = (a: Date, b: Date) => differenceInCalendarDays(a, b);
