---
title: ГОСТ 7.79-2000
description: Схема транслитерации ГОСТ 7.79-2000
slug: gost-779
---

Универсальная схема транслитерации, международный стандарт `ISO 9:1995`. Громоздкая, зато обратимая. Есть вариант с диакритикой.

📅 1995 en / 2000 ru • ✔️ действует • ㊙️ ⚪ с диакритикой и без

Особенности:

-   В варианте с диакритикой есть альтернативы для `Х`, `Щ`, `Ю`, `Я`
-   Обратимая (cyr ↔ lat)

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">

<pre data-ref="source" contenteditable="true" class="editable"><code>Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю</code></pre>
<pre data-ref="target" data-schema="gost_779"><code>Ûliâ, sʺešʹ eŝё ètih mâgkih francuzskih bulok iz Joškar-Oly, da vypej altajskogo čaû</code></pre>
<pre data-ref="target" data-schema="gost_779_alt"><code>Yuliya, s&#96;&#96;esh&#96; eshhyo е&#96;tix myagkix franczuzskix bulok iz Joshkar-Oly&#96;, da vy&#96;pej altajskogo chayu</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю";
var result = iuliia.translate(source, iuliia.GOST_779);
var result_alt = iuliia.translate(source, iuliia.GOST_779_ALT);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю"
result = iuliia.translate(source, schema=iuliia.GOST_779)
result_alt = iuliia.translate(source, schema=iuliia.GOST_779_ALT)</code></pre>
</div>

## Правила

```
cyr  lat1 lat2
а    a    a
б    b    b
в    v    v
г    g    g
д    d    d
е    e    e
ё    ё    yо
ж    ž    zh
з    z    z
и    i    i
й    j    j
к    k    k
л    l    l
м    m    m
н    n    n
о    o    o
п    p    p
р    r    r
с    s    s
т    t    t
у    u    u
ф    f    f
х    h    x
ц    c    cz,c
ч    č    ch
ш    š    sh
щ    ŝ    shh
ъ    ʺ    ``
ы    y    y`
ь    ʹ    `
э    è    е`
ю    û    yu
я    â    ya
```

**lat2**

Буква `Ц` →

-   `С` перед буквами `Е`, `И`, `Й`, `Ы`;
-   `CZ` в остальных случаях.

ℹ️ [cntd.ru](http://docs.cntd.ru/document/1200026226)
