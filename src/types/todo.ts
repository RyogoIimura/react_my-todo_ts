export type Todo = {
  title: string,
  date: Date,
  term: Date,
  status: 'Waiting' | 'Working' | 'Completed',
  cont: string
};
