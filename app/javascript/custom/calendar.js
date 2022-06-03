import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const citasCalendar = () => {
  const calendarEl = document.getElementById("calendar");

  if (calendarEl) {
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
      eventTimeFormat: {
        hour: "2-digit",
        minute: "2-digit",
      },
      initialView: "dayGridMonth",
      editable: true,
      events: [
        {
          id: "a",
          title: "my event",
          start: "2022-06-01",
        },
      ],
      dayMaxEventRows: 3,
      allDaySlot: false,
    });
    calendar.render();
  }
};

document.addEventListener("turbo:load", function () {
  citasCalendar();
});
