export type State = 'Waiting' | 'Working' | 'Completed';

export type Todo = {
  title: string,
  date: Date,
  term: Date,
  status: State,
  cont: string
};
