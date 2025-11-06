---
page_id: books
layout: page
permalink: /books/
title: 图书专著
description: 按时间倒序排列，由 jekyll-scholar 生成。
---

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography -f books %}

</div>