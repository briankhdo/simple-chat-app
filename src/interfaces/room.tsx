export interface Room {
  id: number;
  name: string;
  users_count: number;
  user_names: string[];
  last_message: string;
}
