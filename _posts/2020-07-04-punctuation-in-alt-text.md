---
title: Punctuation in alt text
cases:
  - title: No punctuation
    example: "A shape with eight sides"
    macos: punctuation-01-no-punctuation-macos-voiceover-10-15.mp3
    jaws: punctuation-01-no-punctuation-windows-jaws-2020.mp3
    nvda: punctuation-01-no-punctuation-windows-nvda-2019-2-1.mp3
    ios: punctuation-01-no-punctuation-ios-voiceover-13.mp3

  - title: Ends in a period
    example: "A shape with eight sides."
    macos: punctuation-02-period-macos-voiceover-10-15.mp3
    jaws: punctuation-02-period-windows-jaws-2020.mp3
    nvda: punctuation-02-period-windows-nvda-2019-2-1.mp3
    ios: punctuation-02-period-ios-voiceover-13.mp3

  - title: Ends in an exclamation point
    example: "A shape with eight sides!"
    macos: punctuation-03-exclamation-macos-voiceover-10-15.mp3
    jaws: punctuation-03-exclamation-windows-jaws-2020.mp3
    nvda: punctuation-03-exclamation-windows-nvda-2019-2-1.mp3
    ios: punctuation-03-exclamation-ios-voiceover-13.mp3

  - title: Ends in a question mark
    example: "A shape with eight sides?"
    macos: punctuation-04-question-macos-voiceover-10-15.mp3
    jaws: punctuation-04-question-windows-jaws-2020.mp3
    nvda: punctuation-04-question-windows-nvda-2019-2-1.mp3
    ios: punctuation-04-question-ios-voiceover-13.mp3

  - title: Contains a comma
    example: "A shape, with eight sides"
    macos: punctuation-05-comma-macos-voiceover-10-15.mp3
    jaws: punctuation-05-comma-windows-jaws-2020.mp3
    nvda: punctuation-05-comma-windows-nvda-2019-2-1.mp3
    ios: punctuation-05-comma-ios-voiceover-13.mp3

  - title: Contains a hyphen
    example: "A shape - with eight sides"
    macos: punctuation-06-hyphen-macos-voiceover-10-15.mp3
    jaws: punctuation-06-hyphen-windows-jaws-2020.mp3
    nvda: punctuation-06-hyphen-windows-nvda-2019-2-1.mp3
    ios: punctuation-06-hyphen-ios-voiceover-13.mp3

  - title: Contains an en dash
    example: "A shape – with eight sides"
    macos: punctuation-07-en-dash-macos-voiceover-10-15.mp3
    jaws: punctuation-07-en-dash-windows-jaws-2020.mp3
    nvda: punctuation-07-en-dash-windows-nvda-2019-2-1.mp3
    ios: punctuation-07-en-dash-ios-voiceover-13.mp3

  - title: Contains an em dash
    example: "A shape — with eight sides"
    macos: punctuation-08-em-dash-macos-voiceover-10-15.mp3
    jaws: punctuation-08-em-dash-windows-jaws-2020.mp3
    nvda: punctuation-08-em-dash-windows-nvda-2019-2-1.mp3
    ios: punctuation-08-em-dash-ios-voiceover-13.mp3

  - title: Contains three periods
    example: "A shape... with eight sides"
    macos: punctuation-09-dotdotdot-macos-voiceover-10-15.mp3
    jaws: punctuation-09-dotdotdot-windows-jaws-2020.mp3
    nvda: punctuation-09-dotdotdot-windows-nvda-2019-2-1.mp3
    ios: punctuation-09-dotdotdot-ios-voiceover-13.mp3

  - title: Contains an ellipsis
    example: "A shape… with eight sides"
    macos: punctuation-10-ellipsis-macos-voiceover-10-15.mp3
    jaws: punctuation-10-ellipsis-windows-jaws-2020.mp3
    nvda: punctuation-10-ellipsis-windows-nvda-2019-2-1.mp3
    ios: punctuation-10-ellipsis-ios-voiceover-13.mp3

  - title: Contains a colon
    example: "A shape: with eight sides"
    macos: punctuation-11-colon-macos-voiceover-10-15.mp3
    jaws: punctuation-11-colon-windows-jaws-2020.mp3
    nvda: punctuation-11-colon-windows-nvda-2019-2-1.mp3
    ios: punctuation-11-colon-ios-voiceover-13.mp3

  - title: Contains a semicolon
    example: "A shape; with eight sides"
    macos: punctuation-12-semicolon-macos-voiceover-10-15.mp3
    jaws: punctuation-12-semicolon-windows-jaws-2020.mp3
    nvda: punctuation-12-semicolon-windows-nvda-2019-2-1.mp3
    ios: punctuation-12-semicolon-ios-voiceover-13.mp3

  - title: Contains dumb quotes
    example: 'A shape "with eight sides"'
    macos: punctuation-13-dumb-quotes-macos-voiceover-10-15.mp3
    jaws: punctuation-13-dumb-quotes-windows-jaws-2020.mp3
    nvda: punctuation-13-dumb-quotes-windows-nvda-2019-2-1.mp3
    ios: punctuation-13-dumb-quotes-ios-voiceover-13.mp3

  - title: Contains smart quotes
    example: "A shape “with eight sides”"
    macos: punctuation-14-smart-quotes-macos-voiceover-10-15.mp3
    jaws: punctuation-14-smart-quotes-windows-jaws-2020.mp3
    nvda: punctuation-14-smart-quotes-windows-nvda-2019-2-1.mp3
    ios: punctuation-14-smart-quotes-ios-voiceover-13.mp3
---

This test details audible effects of punctuation in alternative text when read by different screen readers. Default settings are used in screen reader tests.

## Findings

In VoiceOver on macOS 10.15 and JAWS 2020, alt text ending with punctuation added a brief pause at the end, when read aloud. NVDA 2019.2.1 and VoiceOver on iOS 13 did not change pacing with or without punctuation.

Alt text ending in a question mark caused an audible inflection change, when read aloud in VoiceOver on macOS 10.15, VoiceOver on iOS 13, and JAWS 2020. NVDA 2019.2.1 adds a subtle inflection change when using an exclamation point.

A comma in alt text adds a brief pause in all screen readers.

JAWS announces most punctuation explicitly, including hyphen (dash), en dash, em dash, false ellipsis (three dots), colon, semicolon, dumb quotes, and smart quotes. The exception is ellipsis. In JAWS, an [ellipsis](#contains-an-ellipsis-jaws) adds a pause.

VoiceOver on macOS consistently adds a pause when encountering punctuation, but does not explicitly name the punctuation used.

VoiceOver on iOS adds a pause when encountering a hyphen, en dash, em dash, colon, or semicolon. Ellipsis, dumb quotes, and smart quotes do not cause a pause. One outlier is a [false ellipsis](#contains-three-periods-ios), where VoiceOver on iOS announces it as an ellipsis, explicitly.

NVDA adds a pause when encountering an en dash, false ellipsis, ellipsis, colon, or semicolon. Hyphen, em dash, dumb quotes, and smart quotes do not cause a pause.

{% include table.html cases=page.cases %}

## Related reading

- [Screen Readers: A Guide to Punctuation and Typographic Symbols](https://www.deque.com/blog/dont-screen-readers-read-whats-screen-part-1-punctuation-typographic-symbols/)
