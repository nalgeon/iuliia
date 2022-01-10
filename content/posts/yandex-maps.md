---
title: Яндекс.Карты
description: Схема транслитерации Яндекс.Карт
slug: yandex-maps
---

Правила Яндекса для адресов. Слегка улучшенная версия [Яндекс-денег](/yandex-money).

📅 2015 • ✔️ действует • ⚪ без диакритики

Особенности:

-   Нечастое написание `Ё` как `YO`
-   Приятная `Щ` → `SCH`
-   Без апострофов для `Ъ` и `Ь`

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">
<pre data-ref="source" contenteditable="true" class="editable"><code>Россия, город Йошкар-Ола, улица Яна Крастыня</code></pre>
<pre data-ref="target" data-schema="yandex_maps"><code>Rossiya, gorod Yoshkar-Ola, ulitsa Yana Krastynya</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Россия, город Йошкар-Ола, улица Яна Крастыня";
var result = iuliia.translate(source, iuliia.YANDEX_MAPS);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Россия, город Йошкар-Ола, улица Яна Крастыня"
result = iuliia.translate(source, schema=iuliia.YANDEX_MAPS)</code></pre>
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
ё    yo
ж    zh
з    z
и    i
й    y
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

Буква `Ъ` не пишется, кроме `ЪЕ` → `YE` (подъезд → podyezd)

Буквы `Ы` → `Y`, кроме окончаний на `-ЫЙ` (Сыктывкар → Syktyvkar)

Окончание `ЫЙ` → `IY` (Красный → Krasniy)

ℹ️ [yandex.ru](https://yandex.ru/support/nmaps/app_transliteration.html)
