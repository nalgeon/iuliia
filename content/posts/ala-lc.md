---
title: ALA-LC
description: Схема транслитерации ALA-LC
slug: ala-lc
---

Схема транслитерации американской Библиотеки Конгресса. Страшноватая. Есть варианты с диакритикой и без.

📅 1997 • ✔️ действует • ㊙️ ⚪ с диакритикой и без

Особенности:

-   Диакритика для `Ё`, `Й`, `Ц`, `Э`, `Ю`, `Я`
-   Редчайшее использование символа верхней перемычки (`t͡s`) для `Ц`, `Ю`, `Я`
-   Уродует слова с буквами `Ю` и `Я`

<div class="tabs">
<input name="tabs" type="radio" id="text" checked="checked" class="input"/>
<label for="text" class="label"><span>Текст</span></label>
<div class="panel pre-group">

<pre data-ref="source" contenteditable="true" class="editable"><code>Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю</code></pre>
<pre data-ref="target" data-schema="ala_lc"><code>I͡ulii͡a, sʺeshʹ eshchё ėtikh mi͡agkikh frant͡suzskikh bulok iz Ĭoshkar-Oly, da vypeĭ altaĭskogo chai͡u</code></pre>
<pre data-ref="target" data-schema="ala_lc_alt"><code>Iuliia, s"esh' eshche etikh miagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chaiu</code></pre>
</div>

<input name="tabs" type="radio" id="js" class="input"/>
<label for="js" class="label"><span>JavaScript</span></label>
<pre class="panel"><code>var source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю";
var result = iuliia.translate(source, iuliia.ALA_LC);
var result_alt = iuliia.translate(source, iuliia.ALA_LC_ALT);</code></pre>

<input name="tabs" type="radio" id="python" class="input"/>
<label for="python" class="label"><span>Python</span></label>
<pre class="panel"><code>import iuliia
source = "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю"
result = iuliia.translate(source, schema=iuliia.ALA_LC)
result_alt = iuliia.translate(source, schema=iuliia.ALA_LC_ALT)</code></pre>
</div>

## Правила / [json](https://github.com/nalgeon/iuliia/blob/master/ala_lc.json)

```
cyr  lat1 lat2
а    a    a
б    b    b
в    v    v
г    g    g
д    d    d
е    e    e
ё    ë    e
ж    zh   zh
з    z    z
и    i    i
й    ĭ    i
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
х    kh   kh
ц    t͡s   ts
ч    ch   ch
ш    sh   sh
щ    shch shch
ъ    ʺ    "
ы    y    y
ь    ʹ    '
э    ė    e
ю    i͡u   iu
я    i͡a   ia
```

Особых правил нет.

ℹ️ [loc.gov](https://www.loc.gov/catdir/cpso/romanization/russian.pdf) • [wikipedia.org](https://en.wikipedia.org/wiki/ALA-LC_romanization_for_Russian)
