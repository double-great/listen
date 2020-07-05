---
title: Bold and italics
cases:
  - title: Unstyled
    example: "The quick brown fox jumps over the lazy dog."
    macos: bold-italics-unstyled-macos-voiceover-10-15.mp3
    jaws: bold-italics-unstyled-windows-jaws-2020.mp3
    nvda: bold-italics-unstyled-windows-nvda-2019-2-1.mp3

  - title: Using &lt;b&gt; tag
    example: "The <b>quick brown fox</b> jumps over the lazy dog."
    macos: bold-italics-b-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-b-tag-windows-jaws-2020.mp3
    nvda: bold-italics-b-tag-windows-nvda-2019-2-1.mp3

  - title: Using &lt;strong&gt; tag
    example: "The <strong>quick brown fox</strong> jumps over the lazy dog."
    macos: bold-italics-strong-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-strong-tag-windows-jaws-2020.mp3
    nvda: bold-italics-strong-tag-windows-nvda-2019-2-1.mp3

  - title: Using &lt;i&gt; tag
    example: "The <i>quick brown fox</i> jumps over the lazy dog."
    macos: bold-italics-i-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-i-tag-windows-jaws-2020.mp3
    nvda: bold-italics-i-tag-windows-nvda-2019-2-1.mp3

  - title: Using &lt;em&gt; tag
    example: "The <em>quick brown fox</em> jumps over the lazy dog."
    macos: bold-italics-em-tag-macos-voiceover-10-15.mp3
    jaws: bold-italics-em-tag-windows-jaws-2020.mp3
    nvda: bold-italics-em-tag-windows-nvda-2019-2-1.mp3
---

This test details the audible effects of bold and italic markup when read by different screen readers.

<div class="expand">
<table>
  <thead>
    <tr>
      <th>Test case</th>
      <th>VoiceOver<br>macOS 10.15</th>
      <th>JAWS 2020<br>Windows 8.1</th>
      <th>NVDA 2019.2.1<br>Windows 8.1</th>
    </tr>
  </thead>
  <tbody>
  {%-for case in page.cases-%}
    <tr>
      <td>
        {{case.title}}
        <pre><code>{{case.example}}</code></pre>
      </td>
      <td>{% include audio.html case=case.title title="macOS" file=case.macos %}</td>
      <td>{% include audio.html case=case.title title="JAWS" file=case.jaws %}</td>
      <td>{% include audio.html case=case.title title="NVDA" file=case.nvda %}</td>
    </tr>
  {%-endfor-%}
  </tbody>
</table>
</div>

<a class="button" href="test">View test case page</a>

## Findings

In all screen readers tested, **no audible distinction** is present between unstyled text, `<b>`, `<strong>`, `<i>`, and `<em>`.
