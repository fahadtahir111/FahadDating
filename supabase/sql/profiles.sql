-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  auth_id uuid not null,
  email text not null,
  full_name text not null,
  gender text check (gender in ('male', 'female', 'other')) not null,
  date_of_birth date not null,
  nationality text not null,
  address text not null,
  city text not null,
  country text not null,
  postal_code text not null,
  profile_picture_url text,
  bio text not null,
  interests text[] default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  is_active boolean default true not null,
  is_verified boolean default false not null,
  last_login timestamp with time zone
);

-- Create index for auth_id
create index idx_profiles_auth_id on profiles(auth_id);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policy to allow users to view their own profile
create policy "Users can view their own profile"
  on profiles for select
  using ( auth.uid() = id );

-- Create policy to allow users to update their own profile
create policy "Users can update their own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Create policy to allow users to insert their own profile
create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

-- Add trigger to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language 'plpgsql';

create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute procedure update_updated_at_column();
