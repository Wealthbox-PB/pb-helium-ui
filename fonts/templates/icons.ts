export type Icons =<% @glyphs.each do |name, value| %>
  | `<%= name.to_s %>`<% end %>;
