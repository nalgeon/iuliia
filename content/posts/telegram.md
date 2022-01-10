---
title: Телеграммы
description: Схема транслитерации «Телеграммы»
slug: telegram
---

Инструкция Минсвязи о порядке обработки международных телеграмм. Некрасивая, зато без апострофов.

📅 2001 • ✔️ действует • ⚪ без диакритики

Особенности:

-   Уродует слова с буквами `Ю` и `Я`
-   Редчайшее написание `Щ` как `SC`
-   Без апострофов для `Ъ` и `Ь`

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">

<pre data-ref="source" contenteditable="true" class="editable"><code>Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю</code></pre>
<pre data-ref="target" data-schema="telegram"><code>Iuliia, sesh esce etih miagkih francuzskih bulok iz Ioshkar-Oly, da vypei altaiskogo chaiu</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю";
var result = iuliia.translate(source, iuliia.TELEGRAM);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>
import iuliia
source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю"
result = iuliia.translate(source, schema=iuliia.TELEGRAM)</code></pre>
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
ж    j
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
х    h
ц    c
ч    ch
ш    sh
щ    sc
ъ    —
ы    y
ь    —
э    e
ю    iu
я    ia
```

Особых правил нет.

ℹ️ [cnt.ru](http://region.cnt.ru/documents/Instrukcia%20mezhdunarodnye%20telegrammy.pdf), стр. 8
