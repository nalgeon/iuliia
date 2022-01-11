---
title: ICAO DOC 9303
description: Схема транслитерации ICAO DOC 9303
slug: icao-doc-9303
---

Стандарт Международной организации гражданской авиации. Используется МВД для ФИО в водительских удостоверениях, а МИД — в загранпаспортах. Подходит для гринкарты и вида на жительство. Используется некоторыми платёжными системами.

📅 2015 • ✔️ действует • ⚪ без диакритики

Особенности:

-   Уродует слова с буквами `Ю` и `Я`
-   `Й` переводит как `I`, а `Ъ` как `IE`
-   Без апострофов для `Ъ` и `Ь`

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">
<pre data-ref="source" contenteditable="true" class="editable"><code>Юлия Щеглова</code></pre>
<pre data-ref="target" data-schema="icao_doc_9303"><code>Iuliia Shcheglova</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Юлия Щеглова";
var result = iuliia.translate(source, iuliia.ICAO_DOC_9303);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Юлия Щеглова"
result = iuliia.translate(source, schema=iuliia.ICAO_DOC_9303)</code></pre>
</div>

## Правила / [json](https://github.com/nalgeon/iuliia/blob/master/icao_doc_9303.json)

```
cyr  lat
а    a
б    b
в    v
г    g
д    d
е    e
ё    e
ж    zh
з    z
и    i
й    i
к    k
л    l
м    m
н    n
о    o
п    p
р    r
с    s
т    t
у    u
ф    f
х    kh
ц    ts
ч    ch
ш    sh
щ    shch
ъ    ie
ы    y
ь    —
э    e
ю    iu
я    ia
```

Особых правил нет.

ℹ️ [МИД](http://www.consultant.ru/document/cons_doc_LAW_360580/9eb761ae644ec1e283b3a50ef232330b924577cb/) • [МВД](http://www.consultant.ru/document/cons_doc_LAW_89677/db3d94f8d21c0b290f4ed59633c74a4fa1f4767f/) • [ICAO](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)
