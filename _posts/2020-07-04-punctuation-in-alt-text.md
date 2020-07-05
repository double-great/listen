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

This test details audible effects of punctuation in alternative text when read by different screen readers.

{% include table.html headings=page.headings cases=page.cases %}

## Findings

In VoiceOver on macOS 10.15 and JAWS 2020, alt text ending with punctuation added a brief pause at the end, when read aloud. NVDA 2019.2.1 and VoiceOver on iOS 13 did not change pacing with or without punctuation.

Alt text ending in a question mark caused an audible inflection change, when read aloud in VoiceOver on macOS 10.15, VoiceOver on iOS 13, and JAWS 2020. NVDA 2019.2.1 adds a subtle inflection change when using an exclamation point.
