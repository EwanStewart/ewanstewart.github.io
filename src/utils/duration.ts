export const monthsBetween = (start: Date, end: Date): number => {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
};

export const formatDuration = (months: number): string => {
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts: string[] = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs === 1 ? '' : 's'}`);
  if (mos > 0) parts.push(`${mos} mo${mos === 1 ? '' : 's'}`);
  return parts.length ? parts.join(' ') : '0 mos';
};
