-- Basic chat messages table
create table messages (
  id uuid default uuid_generate_v4() primary key,
  sender_id uuid references profiles(id) on delete cascade not null,
  recipient_id uuid references profiles(id) on delete cascade not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for faster lookups
create index idx_messages_sender_recipient on messages(sender_id, recipient_id);

-- Enable RLS
alter table messages enable row level security;

-- Allow users to insert and select their own messages
create policy "Users can interact with messages" on messages
  for all
  using (auth.uid() = sender_id or auth.uid() = recipient_id)
  with check (auth.uid() = sender_id);
