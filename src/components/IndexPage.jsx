import React from 'react';
import { EventCard } from './EventCard';

export function IndexPage({ futureEvents, grouped, allStates }) {
  // Get sorted date keys
  const dateKeys = Object.keys(grouped).sort();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <title>Upcoming Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="dist/styles.css" rel="stylesheet" />
      </head>
      <body className="p-4 lg:p-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
            <div>
              <label htmlFor="stateFilter" className="font-medium mr-2">Filter by State:</label>
              <select
                id="stateFilter"
                className="px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="ALL">All States</option>
                {allStates.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="dateFilter" className="font-medium mr-2">Filter by Date:</label>
              <select
                id="dateFilter"
                className="px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="ALL">All Dates</option>
                <option value="TODAY">Today</option>
                <option value="WEEKEND">This Weekend</option>
                <option value="WEEK">This Week</option>
              </select>
            </div>
          </div>
        </header>

        <div id="eventList" className="space-y-8">
          {dateKeys.map(dateKey => {
            if (!dateKey || dateKey === 'Invalid Date') return null;
            const eventsForThisDate = grouped[dateKey] || [];
            if (eventsForThisDate.length === 0) return null;

            return (
              <div className="date-group" key={dateKey}>
                <h2 className="text-xl font-semibold my-4 border-b border-gray-300 pb-2 dark:border-gray-700">
                  {dateKey}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {eventsForThisDate.map(e => (
                    <EventCard key={e.UUID} event={e} dateKey={dateKey} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div id="noEventsMessage" className="hidden text-gray-500 dark:text-gray-400 mt-4 italic"></div>

        {/* External scripts for filtering and clipboard behavior */}
        <script src="dist/scripts/filters.js"></script>
        <script src="dist/scripts/clipboard.js"></script>
      </body>
    </html>
  );
}