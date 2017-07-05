---
layout: partials-markdown.html
title: Partials from markdown
test: 'Testing testing'
---
## Include `\{{> footer}}` footer with navigatin
{{> nav}}

## Include `\{{ test }}` from frontmatter
<p>{{ test }}</p>

## Include `\{{ hero }}` hero
{{> hero title=title }}
