---
title: How to Record Audio from Screen Readers
---

Capturing the audio output from all of these screen readers is a bit of a challenge. There are many ways to do it. Here is one.

## Hardware used

- Macbook (running macOS 10.15 and Windows 8.1)
- iPhone (running iOS 13)

## Software used

- [Audacity](https://www.audacityteam.org/)
- [VirtualBox](https://www.virtualbox.org/)
- [NVDA](https://www.nvaccess.org/download/)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)
- [Soundflower](https://github.com/mattingalls/Soundflower)

## Platforms

I'm using macOS as the primary operating system. Windows 8.1 runs on my Macbook Pro using VirtualBox. The built-in screen recording function of iOS handles the capture on the iPhone.

Setting up Windows in VirtualBox is beyond the scope of these notes. Be sure that audio from Windows is playing properly.

## Configuring macOS to pass audio to an application

To record the system audio output directly, without sending it into the air to record, I'm using Soundflower. This is a macOS system extension that allows applications to pass audio to other applications.

Follow the installation instructions from these (now several years old) Soundflower release notes: https://github.com/mattingalls/Soundflower/releases/tag/2.0b2

1. Download and install the signed Soundflower 2.0b2 installer
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

## Recording audio from screen readers

Install Audacity for heavier recording and editing capabilities, after confirming a working internal audio recording setup. Choose Soundflower (2ch) as the microphone and your new Multi-Output Device as your speaker.

With audio playing, hit "Click to Start Monitoring" in Audacity. The visualizer should start to move.

![Audacity output visualizer]({{site.baseurl}}/assets/audacity-output.png)

### Recording VoiceOver on macOS

Begin recording in Audacity. Press <kbd>⌘</kbd> + <kbd>F5</kbd> to start VoiceOver. Use VoiceOver to navigate. When finished, stop the recording in Audacity.

### Recording NVDA and JAWS on macOS

Open VirtualBox and launch Windows. Install NVDA (free) and JAWS (40-minute demo mode) in Windows. Open NVDA or JAWS in Windows and Audacity on macOS. Confirm audio output from NVDA or JAWS is reflected in Audacity. Record the audio as you navigate.

### Recording VoiceOver on iOS

1. General > Control Center > Add Screen Recording
2. Pull down Control Center > Start recording
   ![Screen recording icon in Control Center]({{site.baseurl}}/assets/ios-screen-recording.png)
3. General > Accessibility > VoiceOver > turn On
4. The screen recording will capture as you navigate
5. Stop the screen recording when finished
6. Move MP4 screen recording to macOS

I re-recorded the audio using Audacity while playing back portions of the screen recording in QuickTime — the audio could be removed from the screen recording in other ways, too

## Editing

Using Audacity, open the lengthy recordings and begin to add labels, using <kbd>⌘</kbd> + <kbd>B</kbd>. Marking and labelling the audio file makes the clip export easier to manage.

Export > Export Selected Audio > Save as MP3
