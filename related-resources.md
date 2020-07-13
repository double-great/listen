---
title: Related resources
links:
  - title: PowerMapper Assistive technology compatibility tests
    description: An extensive library of screen reader tests.
    url: https://www.powermapper.com/tests/
---

<ul class="post-list">
 {%- for link in page.links -%}
 <li>
   <a href="{{ link.url }}">
     {{ link.title | escape }}
   </a>
   - {{ link.description }}
 </li>
 {%- endfor -%}
</ul>
