/*
  # Create calendars and content items tables

  1. New Tables
    - `calendars`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users)
      - `prompt` (text)
      - `summary` (text)
      - `created_at` (timestamp)
    - `content_items`
      - `id` (uuid, primary key)
      - `calendar_id` (uuid, references calendars)
      - `title` (text)
      - `content` (text)
      - `platform` (text)
      - `scheduled_date` (timestamp)
      - `status` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

CREATE TABLE calendars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL DEFAULT auth.uid(),
  prompt text NOT NULL,
  summary text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE content_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  calendar_id uuid REFERENCES calendars(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  platform text NOT NULL,
  scheduled_date timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE calendars ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own calendars"
  ON calendars
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can manage their calendars' content items"
  ON content_items
  FOR ALL
  TO authenticated
  USING (calendar_id IN (
    SELECT id FROM calendars WHERE user_id = auth.uid()
  ));