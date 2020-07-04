---
title: Punctuation in alt text
cases:
  - title: No punctuation
    example: "A shape with eight sides"
    macos: endperiod-01-no-punctuation-macos-voiceover-10-15.mp3
    jaws: endperiod-01-no-punctuation-windows-jaws-2020.mp3
    nvda: endperiod-01-no-punctuation-windows-nvda-2019-2-1.mp3
    ios: endperiod-01-no-punctuation-ios-voiceover-13.mp3

  - title: Ends in a period
    example: "A shape with eight sides."
    macos: endperiod-02-period-macos-voiceover-10-15.mp3
    jaws: endperiod-02-period-windows-jaws-2020.mp3
    nvda: endperiod-02-period-windows-nvda-2019-2-1.mp3
    ios: endperiod-02-period-ios-voiceover-13.mp3

  - title: Ends in an exclamation point
    example: "A shape with eight sides!"
    macos: endperiod-03-exclamation-macos-voiceover-10-15.mp3
    jaws: endperiod-03-exclamation-windows-jaws-2020.mp3
    nvda: endperiod-03-exclamation-windows-nvda-2019-2-1.mp3
    ios: endperiod-03-exclamation-ios-voiceover-13.mp3

  - title: Ends in a question mark
    example: "A shape with eight sides?"
    macos: endperiod-04-question-macos-voiceover-10-15.mp3
    jaws: endperiod-04-question-windows-jaws-2020.mp3
    nvda: endperiod-04-question-windows-nvda-2019-2-1.mp3
    ios: endperiod-04-question-ios-voiceover-13.mp3
---

<div class="expand">
<table>
<thead>
<tr>
<th>Test case</th>
<th>MacOS</th>
<th>JAWS</th>
<th>NVDA</th>
<th>iOS</th>
</tr>
</thead>
<tbody>
{%-for case in page.cases-%}
<tr>
  <td>
    {{case.title}}
    <pre><code>{{case.example}}</code></pre>
  </td>
  <td>{% include audio.html case=case.title title="MacOS" file=case.macos %}</td>
  <td>{% include audio.html case=case.title title="JAWS" file=case.jaws %}</td>
  <td>{% include audio.html case=case.title title="NVDA" file=case.nvda %}</td>
  <td>{% include audio.html case=case.title title="iOS" file=case.ios %}</td>
</tr>
{%-endfor-%}
</tbody>
</table>
</div>

## Findings

In VoiceOver on macOS (10.15), all alt text ending with tested punctuation added a brief pause at the end, when read aloud. Alt text ending in a question mark caused an audible inflection change, when read aloud.
