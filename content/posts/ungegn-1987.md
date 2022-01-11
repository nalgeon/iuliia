---
title: UNGEGN 1987 V/18
description: Схема транслитерации UNGEGN 1987 V/18
slug: ungegn-1987
---

Схема транслитерации ООН для географических названий. Основана на [ГОСТ 16876-71](/gost-16876). Такая же страшная, но до сих пор не отменена.

📅 1987 • ✔️ действует • ㊙️ с диакритикой

Особенности:

-   В точности соответствует диакритической схеме [ГОСТ 16876-71](/gost-16876), только без альтернатив для `Х`, `Щ`, `Ю`, `Я`
-   Обратимая (cyr ↔ lat)

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">
<pre data-ref="source" contenteditable="true" class="editable"><code>Россия, город Йошкар-Ола, улица Яна Крастыня</code></pre>
<pre data-ref="target" data-schema="ungegn_1987"><code>Rossija, gorod Joškar-Ola, ulica Jana Krastynja</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Россия, город Йошкар-Ола, улица Яна Крастыня";
var result = iuliia.translate(source, iuliia.UNGEGN_1987);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Россия, город Йошкар-Ола, улица Яна Крастыня"
result = iuliia.translate(source, schema=iuliia.UNGEGN_1987)</code></pre>
</div>

## Правила / [json](https://github.com/nalgeon/iuliia/blob/master/ungegn_1987.json)

```
а    a
б    b
в    v
г    g
д    d
е    e
ё    ë
ж    ž
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
х    h
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

ℹ️ [un.org](https://unstats.un.org/unsd/geoinfo/UNGEGN/docs/23-gegn/crp/23rd_ungegn_CRP6.pdf) • [eki.ee](https://www.eki.ee/wgrs/rom1_ru.htm)
