CREATE TABLE chorewars_children (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_id INTEGER   
    REFERENCES chorewars_users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL
);