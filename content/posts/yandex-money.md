---
title: Яндекс.Деньги
description: Схема транслитерации Яндекс.Денег
slug: yandex-money
---

Правила Яндекса для банковских карт. Простая и удобная схема.

📅 2020 • ✔️ действует • ⚪ без диакритики

Особенности:

-   Радикальное упрощение `Е` = `Ё`, `И` = `Й`
-   Приятная `Щ` → `SCH`
-   Без апострофов для `Ъ` и `Ь`

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">
<pre data-ref="source" contenteditable="true" class="editable"><code>Юлия Щеглова</code></pre>
<pre data-ref="target" data-schema="yandex_money"><code>Yuliya Scheglova</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Юлия Щеглова";
var result = iuliia.translate(source, iuliia.YANDEX_MONEY);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Юлия Щеглова"
result = iuliia.translate(source, schema=iuliia.YANDEX_MONEY)</code></pre>
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
щ    sch
ъ    —
ы    y
ь    —
э    e
ю    yu
я    ya
```

Особых правил нет.

ℹ️ [web.archive.org](http://web.archive.org/web/20130414040301/https://money.yandex.ru/doc.xml?id=525052) (оригинал удален)
