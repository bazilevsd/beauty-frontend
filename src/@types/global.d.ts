interface Schedule {
  id?: string;
  day?: string;
  startTime?: string;
  endTime?: string;
  token?: string;
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

interface UserData {
  name: string;
  email: string;
  password: string;
  confirm: string;
  error: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface Token {
  token: string;
}
