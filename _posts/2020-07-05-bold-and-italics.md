---
title: Bold and italics
cases:
  - title: Unstyled
    example: "The quick brown fox jumps over the lazy dog."
    macos: bold-italics-unstyled-macos-voiceover-10-15.mp3
    jaws: bold-italics-unstyled-windows-jaws-2020.mp3
    nvda: bold-italics-unstyled-windows-nvda-2019-2-1.mp3
    ios: bold-italics-unstyled-ios-voiceover-13.mp3

  - title: Using &lt;b&gt; element
    example: "The <b>quick brown fox</b> jumps over the lazy dog."
    macos: bold-italics-b-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-b-tag-windows-jaws-2020.mp3
    nvda: bold-italics-b-tag-windows-nvda-2019-2-1.mp3
    ios: bold-italics-b-tag-ios-voiceover-13.mp3

  - title: Using &lt;strong&gt; element
    example: "The <strong>quick brown fox</strong> jumps over the lazy dog."
    macos: bold-italics-strong-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-strong-tag-windows-jaws-2020.mp3
    nvda: bold-italics-strong-tag-windows-nvda-2019-2-1.mp3
    ios: bold-italics-strong-tag-ios-voiceover-13.mp3

  - title: Using &lt;i&gt; element
    example: "The <i>quick brown fox</i> jumps over the lazy dog."
    macos: bold-italics-i-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-i-tag-windows-jaws-2020.mp3
    nvda: bold-italics-i-tag-windows-nvda-2019-2-1.mp3
    ios: bold-italics-i-tag-ios-voiceover-13.mp3

  - title: Using &lt;em&gt; element
    example: "The <em>quick brown fox</em> jumps over the lazy dog."
    macos: bold-italics-em-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-em-tag-windows-jaws-2020.mp3
    nvda: bold-italics-em-tag-windows-nvda-2019-2-1.mp3
    ios: bold-italics-em-tag-ios-voiceover-13.mp3
---

This test details the audible effects of bold and italic markup when read by different screen readers.

## Findings

In all screen readers tested, **no audible distinction** is present between unstyled text, `<b>`, `<strong>`, `<i>`, and `<em>`.

{% include table.html cases=page.cases %}
