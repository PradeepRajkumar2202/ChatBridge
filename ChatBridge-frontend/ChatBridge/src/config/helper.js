export function timeAgo(date) {
  if (!date) return "just now";

  const past = new Date(date);
  if (isNaN(past.getTime())) return "just now";  // ✅ strict check

  const now = new Date();
  const secondsAgo = Math.floor((now - past) / 1000);

  const timeUnits = [
    { unit: 'year', seconds: 365 * 24 * 60 * 60 },
    { unit: 'month', seconds: 30 * 24 * 60 * 60 },
    { unit: 'day', seconds: 24 * 60 * 60 },
    { unit: 'hour', seconds: 60 * 60 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ];

  for (const { unit, seconds } of timeUnits) {
    const amount = Math.floor(secondsAgo / seconds);
    if (amount >= 1) {
      return `${amount} ${unit}${amount > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}
import React from 'react';