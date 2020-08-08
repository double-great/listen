---
title: How to Record Audio from Screen Readers
---

Capturing the audio output from all of these screen readers is a bit of a challenge. There are many ways to do it. Here is one workflow.

## Software

- [Audacity](https://www.audacityteam.org/) - multi-track audio editor and recorder
- [VirtualBox](https://www.virtualbox.org/) - virtualization platform that can run Microsoft Windows as a virtual machine on macOS
- [NVDA](https://www.nvaccess.org/download/) - screen reader for Windows
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) - screen reader for Windows that provides speech and Braille output for computer applications
- [Soundflower](https://github.com/mattingalls/Soundflower) - record system audio output directly without sending it into the air to record
- [Quicktime](https://support.apple.com/quicktime) - play and record audio and video files on macOS

## Hardware and platforms

- Macbook (macOS 10.15 and Windows 8.1 using VirtualBox) - while setting up Windows in VirtualBox is beyond the scope of these notes, be sure that audio from Windows is playing properly
- iPhone (iOS 13) - using the built-in screen recording function of iOS handles the capture on the iPhone

## Configure macOS to pass audio to an application

These steps will show you how to use Soundflower to pass audio to Quicktime to create a recording.

Start by following the [installation instructions](https://github.com/mattingalls/Soundflower/releases/tag/2.0b2) from these (now several years old) Soundflower release notes:

1. Download and install the [signed Soundflower 2.0b2 installer](https://github.com/mattingalls/Soundflower/releases/download/2.0b2/Soundflower-2.0b2.dmg)
2. Start playing music through the built-in audio
3. Open Applications > Utilities > Audio MIDI Setup
4. Click '+' to add a new 'Create Multi Output Device'
   ![Multi Output audio setup]({{site.baseurl}}/assets/audio-midi-setup-01.png)
5. Select both "Soundflower 2ch" and "Built-in Output"
6. Click gear button and select "use this device for sound output"
   ![Configure audio output]({{site.baseurl}}/assets/audio-midi-setup-02.png)

The music you started playing in step 2 should continue to play. Now the audio is going to your built-in audio and is being passed to Soundflower for recording elsewhere. With the music continuing to play:

1. Open up Quicktime
2. File > New Audio Recording
3. Click the down arrow (next to record button) and choose "Soundflower (2ch)" as the input
   ![Select audio output for QuickTime test]({{site.baseurl}}/assets/quicktime-test.png)
4. You should now see audio levels changing
5. Press record to capture the music output
6. Play back the recording for confirmation

## Record audio from screen readers with Audacity

For heavier recording and editing capabilities, use Audacity. After confirming a working internal audio recording setup, [install and launch Audacity](https://www.audacityteam.org/). Choose Soundflower (2ch) as the microphone and your new Multi-Output Device as your speaker.

With audio playing, hit "Click to Start Monitoring" in Audacity. The visualizer should start to move.

![Audacity output visualizer]({{site.baseurl}}/assets/audacity-output.png)

### Record VoiceOver on macOS

1. Begin recording in Audacity
2. Press <kbd>⌘</kbd> + <kbd>F5</kbd> to start VoiceOver
3. Use VoiceOver to navigate
4. When finished, stop the recording in Audacity
5. Press <kbd>⌘</kbd> + <kbd>F5</kbd> to stop VoiceOver

### Record NVDA and JAWS on macOS

1. Open VirtualBox and launch Windows
2. [Install NVDA](https://www.nvaccess.org/download/) (free) and [install JAWS](https://www.freedomscientific.com/products/software/jaws/) (40-minute demo mode) in Windows
3. Open NVDA or JAWS in Windows
4. Open Audacity on macOS
5. Confirm audio output from NVDA or JAWS is reflected in Audacity
6. Record the audio as you navigate

### Record VoiceOver on iOS

1. General > Control Center > Add Screen Recording
2. Pull down Control Center > Start recording
   ![Screen recording icon in Control Center]({{site.baseurl}}/assets/ios-screen-recording.png)
3. General > Accessibility > VoiceOver > turn On
4. The screen recording will capture as you navigate
5. Stop the screen recording when finished
6. Move MP4 screen recording to macOS for editing

For quick editing you can re-record the audio using Audacity while playing back portions of the screen recording in QuickTime. Converting the MP4 screen recording to MP3 is doable, too.

## Editing

Using Audacity, open the full screen reader recording and begin to add labels, using <kbd>⌘</kbd> + <kbd>B</kbd>. Marking and labelling the audio file makes the clip export process easier to manage.

With a marked audio timeline, highlight the section of the timeline to export. To export the highlighted audio: Export > Export Selected Audio > Save as MP3
