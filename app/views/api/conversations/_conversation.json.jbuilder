json.(conversation, :id, :name, :description, :owner_id, :is_private?, :playlist_url, :restricted_playlist?, :convo_type, :message_ids, :member_ids)
json.last_message conversation.messages.last


