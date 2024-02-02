# `Iuliia`

> Transliterate Cyrillic → Latin in every possible way

Transliteration means representing Cyrillic data (mainly names and geographic locations) with Latin letters. It is used for international passports, visas, green cards, driving licenses, mail and goods delivery etc.

`Iuliia` makes transliteration easy as calling `iuliia.translate()` in your favorite programming language.

Why use `Iuliia`:

-   20 transliteration schemas (rule sets), including all main international and Russian standards.
-   Correctly implements not only the base mapping, but all the special rules for letter combinations and word endings (AFAIK, Iuliia is the only library which does so).
-   Simple API and zero third-party dependencies.

## Supported schemas

Actual schemas:

-   ALA-LC: [ala_lc.json](ala_lc.json) and [ala_lc_alt.json](ala_lc_alt.json)
-   BGN/PCGN: [bgn_pcgn.json](bgn_pcgn.json) and [bgn_pcgn_alt.json](bgn_pcgn_alt.json)
-   BS 2979:1958: [bs_2979.json](bs_2979.json) and [bs_2979_alt.json](bs_2979_alt.json)
-   GOST R 52290-2004: [gost_52290.json](gost_52290.json)
-   GOST R 7.0.34-2014: [gost_7034.json](gost_7034.json)
-   ICAO DOC 9303: [icao_doc_9303.json](icao_doc_9303.json)
-   ISO 9:1995 aka GOST 7.79-2000: [gost_779.json](gost_779.json) and [gost_779_alt.json](gost_779_alt.json)
-   UNGEGN 1987 V/18: [ungegn_1987.json](ungegn_1987.json)
-   Moscow Metro map: [mosmetro.json](mosmetro.json)
-   Scientific: [scientific.json](scientific.json)
-   Telegram: [telegram.json](telegram.json)
-   Wikipedia: [wikipedia.json](wikipedia.json)
-   Yandex.Maps: [yandex_maps.json](yandex_maps.json)
-   Yandex.Money: [yandex_money.json](yandex_money.json)

And deprecated ones:

-   GOST 16876-71: [gost_16876.json](gost_16876.json) and [gost_16876_alt.json](gost_16876_alt.json)
-   GOST R 52535.1-2006: [gost_52535.json](gost_52535.json)
-   ISO/R 9:1954: [iso_9_1954.json](iso_9_1954.json)
-   ISO/R 9:1968: [iso_9_1968.json](iso_9_1968.json) and [iso_9_1968_alt.json](iso_9_1968_alt.json)
-   MVD 310-1997: [mvd_310.json](mvd_310.json) and [mvd_310_fr.json](mvd_310_fr.json)
-   MVD 782-2000: [mvd_782.json](mvd_782.json)

For schema details and other information, see [iuliia.ru](https://iuliia.ru/) (in Russian).

## Supported languages

-   [C#](https://github.com/belianin/iuliia-cs)
-   [Crystal](https://github.com/kandayo/iuliia-cr)
-   [Go](https://github.com/mehanizm/iuliia-go)
-   [Java](https://github.com/massita99/iuliia-java) (Gson)
-   [Java](https://github.com/homyakin/iuliia-java) (Jackson)
-   [Java](https://github.com/radist-nt/iuliia-java) (Jackson)
-   [JavaScript](https://github.com/nalgeon/iuliia-js)
-   [Kotlin](https://github.com/yorlov/iuliia)
-   [PHP](https://github.com/perevoshchikov/iuliia-php)
-   [PostgreSQL](https://github.com/rin-nas/postgresql-patterns-library/blob/master/functions/iuliia_translate.sql)
-   **[Python](https://github.com/nalgeon/iuliia-py) ✨**
-   [Ruby](https://github.com/adnikiforov/iuliia-rb)
-   [Rust](https://github.com/massita99/iuliia-rust)
-   [Swift](https://github.com/petertretyakov/Iuliia)

This repo contains schema descriptions. It is not intended to be used directly. If you want to add another schema — send a PR! See [schema.jsd](schema.jsd) for JSON Schema definition and [wikipedia.json](wikipedia.json) as a reference.

## Issues and limitations

In general:

-   Only Russian subset of Cyrillic is supported.
-   Does not support composite Unicode characters (e.g., `Ё`, but not `Ё`).

Schema-specific:

-   _BS 2979:1958_. This schema defines two alternative translations for `Ы`: `Ы` → `Ȳ` (used by the Oxford University Press) and `Ы` → `UI` (used by the British Library). `iuliia` uses `Ы` → `Ȳ`.
-   _GOST R 7.0.34-2014_. This schema defines alternatives for many letters, but does not specify when to use which. Therefore, `iuliia` uses the first of suggested translations for each such letter.
-   _MVD-310_. This schema defines "`С` between two vowels → `SS`" rule. There is no such rule in other schemas, and MVD-310 itself is deprecated, so I decided to ignore this specific rule for the sake of code simplicity.
