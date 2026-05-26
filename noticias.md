---
layout: page
title: Noticias
permalink: /noticias/
---

# Noticias
Hitos y actualizaciones del proyecto: campañas de campo, talleres, entregables y materiales divulgativos.

{% for post in site.posts %}
<article class="reconecta-noticia-card">
  <h2 class="reconecta-noticia-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <p class="reconecta-post-date">{{ post.fecha }}</p>
  {% if post.image %}
  <img src="{{ post.image }}" alt="{{ post.title }}" class="reconecta-noticia-img">
  {% endif %}
  <div class="reconecta-noticia-excerpt">{{ post.excerpt }}</div>
  {% if post.content.size > post.excerpt.size %}
  <a class="reconecta-btn reconecta-btn--secondary" href="{{ post.url | relative_url }}">Leer más →</a>
  {% endif %}
</article>
{% endfor %}
