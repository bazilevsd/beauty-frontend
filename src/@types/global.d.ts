interface Schedule {
  id?: string;
  day?: string;
  startTime?: string;
  endTime?: string;
}

interface Schedules {
  id?: string;
  schedule: array;
}
interface Time {
  id?: string;
  t?: string;
}

interface Book {
  id?: string;
  email: string;
  fullName: string;
  message: string;
}
