---
title: BGN/PCGN
description: Схема транслитерации BGN/PCGN
slug: bgn-pcgn
---

Древняя схема транслитерации ООН для географических названий. Почти без диакритики, но зачем-то оставила `Ё` с точками.

📅 1944 / 1947 • ✔️ действует • ㊙️ с диакритикой

Особенности:

-   Редчайшее написание `Ё` как `YЁ`
-   Другой диакритики, кроме `Ё`, нет
-   Для разрешения неоднозначности между `Й` и `Ы` опционально использует интерпункт (`·`)
-   Много нюансов

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">

<pre data-ref="source" contenteditable="true" class="editable"><code>Россия, город Йошкар-Ола, улица Яна Крастыня</code></pre>
<pre data-ref="target" data-schema="bgn_pcgn"><code>Rossiya, gorod Yoshkar-Ola, ulitsa Yana Krastynya</code></pre>
<pre data-ref="target" data-schema="bgn_pcgn_alt"><code>Rossiya, gorod Yoshkar-Ola, ulitsa Yana Krastynya</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Россия, город Йошкар-Ола, улица Яна Крастыня";
var result = iuliia.translate(source, iuliia.BGN_PCGN);
var result_alt = iuliia.translate(source, iuliia.BGN_PCGN_ALT);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Россия, город Йошкар-Ола, улица Яна Крастыня"
result = iuliia.translate(source, schema=iuliia.BGN_PCGN)
result_alt = iuliia.translate(source, schema=iuliia.BGN_PCGN_ALT)</code></pre>
</div>

## Правила / [json](https://github.com/nalgeon/iuliia/blob/master/bgn_pcgn.json)

```
cyr  lat
а    a
б    b
в    v
г    g
д    d
е    ye,e
ё    yё,ё
ж    zh
з    z
и    i
й    y,y·
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
ъ    ”
ы    y,y·,·y
ь    ’
э    e,·e
ю    yu
я    ya
```

Буква `Е` →

-   `YE` в начале слова;
-   `YE` после гласных, `Й`, `Ь`, `Ъ`;
-   `E` во всех остальных случаях.

Буква `Ё` →

-   `YЁ` в начале слова;
-   `YЁ` после гласных, `Й`, `Ь`, `Ъ`;
-   `Ё` во всех остальных случаях.

Буква `Й` (опционально) →

-   `Y·` перед `А`, `У`, `Ы`, `Э`;
-   `Y` в остальных случаях.

Буква `Ы` (опционально) →

-   `Y·` перед `А`, `У`, `Ы`, `Э`;
-   `·Y` после гласной;
-   `Y` в остальных случаях.

Буква `Э` (опционально) →

-   `·E` после согласных кроме `Й`;
-   `E` в остальных случаях.

Буквосочетания (опционально) →

-   `ТС` → `T·S`;
-   `ШЧ` → `SH·CH`.

ℹ️ [wikipedia.org](https://en.wikipedia.org/wiki/BGN/PCGN_romanization_of_Russian)
