---
title: Научная
description: Научная cхема транслитерации
slug: scientific
---

Великая праматерь всех схем. Используется в научных работах. Из неё вырос [ГОСТ 16876-71](/gost-16876). Достойна уважения за вклад в историю, но страшная.

📅 1898 • ✔️ действует • ㊙️ с диакритикой

Особенности:

-   Отличается от [ГОСТ 16876-71](/gost-16876) только правилом для `Х`
-   Диакритика для букв `Ё`, `Ж`, `Ц`, `Ч`, `Ш`, `Щ`, `Э`
-   Обратимая (cyr ↔ lat)

## Пример

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">

<pre data-ref="source" contenteditable="true" class="editable"><code>Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю</code></pre>
<pre data-ref="target" data-schema="scientific"><code>Julija, sʺešʹ eščё ètix mjagkix francuzskix bulok iz Joškar-Oly, da vypej altajskogo čaju</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю";
var result = iuliia.translate(source, iuliia.SCIENTIFIC);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю"
result = iuliia.translate(source, schema=iuliia.SCIENTIFIC)</code></pre>
</div>

## Правила

```
cyr  lat
а    a
б    b
в    v
г    g
д    d
е    e
ё    ë
ж    ž
з    z
и    i
й    j
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
х    x
ц    c
ч    č
ш    š
щ    šč
ъ    ʺ
ы    y
ь    ʹ
э    è
ю    ju
я    ja
```

Особых правил нет.

ℹ️ [wikipedia.org](https://en.wikipedia.org/wiki/Scientific_transliteration_of_Cyrillic)
