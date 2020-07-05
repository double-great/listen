---
title: Emoji in alt text
cases:
  - title: Face example
    example: "Runner at finish line, looking 😤"
    macos: emoji-01-macos-voiceover-10-15.mp3
    jaws: emoji-01-windows-jaws-2020.mp3
    nvda: emoji-01-windows-nvda-2019-2-1.mp3
    ios: emoji-01-ios-voiceover-13.mp3
---

This test details audible effects of emoji (in alternative text) when read by different screen readers. Inspired by [Emoji Accessibility for Visually Impaired People](https://dl.acm.org/doi/10.1145/3313831.3376267). See [the specific test case from the research article on YouTube](https://youtu.be/uIbPcZq6izk?t=480).

<div class="expand">
<table>
  <thead>
    <tr>
      <th>Test case</th>
      <th>VoiceOver<br>macOS 10.15</th>
      <th>JAWS 2020<br>Windows 8.1</th>
      <th>NVDA 2019.2.1<br>Windows 8.1</th>
      <th>VoiceOver<br>iOS 13</th>
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
      <td>{% include audio.html case=case.title title="iOS" file=case.ios %}</td>
    </tr>
  {%-endfor-%}
  </tbody>
</table>
</div>

<a class="button" href="test">View test case page</a>

## Findings
