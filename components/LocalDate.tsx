import { parseISO, format } from 'date-fns'
import React, {useEffect, useState} from "react";

export default function LocalDate({ dateString }: { dateString: string }) {
  const [isoDate, setIsoDate] = useState<Date>(()=> new Date());
  useEffect(()=>{
    const date = parseISO(dateString);
    setIsoDate(date);
  }, [dateString]);
  return <time dateTime={dateString}>{format(isoDate, 'eeee do LLL, yyyy')}</time>
}
