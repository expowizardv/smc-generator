/*
  # Initial Schema Setup for Social Media Content Calendar

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - full_name (text)
      - created_at (timestamp)
    
    - projects
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - user_id (uuid, foreign key)
      - created_at (timestamp)
    
    - content_items
      - id (uuid, primary key)
      - project_id (uuid, foreign key)
      - title (text)
      - content (text)
      - platform (text)
      - scheduled_date (timestamp)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create content_items table
CREATE TABLE content_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  platform text NOT NULL,
  scheduled_date timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their own data"
  ON users
  FOR ALL
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can manage their own projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can manage their own content items"
  ON content_items
  FOR ALL
  TO authenticated
  USING (project_id IN (
    SELECT id FROM projects WHERE user_id = auth.uid()
  ));