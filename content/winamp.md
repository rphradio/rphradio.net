+++
date = "2017-03-18T10:59:56+01:00"
title = "winamp"
draft = false

+++


**WINAMP TUTORIAL**
=====



Step 1 - Install Winamp

Download and install Winamp (if you dont already have it installed).  Winamp is a free download.

<a href="http://rphradio.net/library/winamp/winamp5666_full_en-us.exe">Download Winamp</a>

Step 2 - Install the Edcast DSP Plugin and lame_enc.dll

Download the Edcast Plugin for Winamp and install it.  This is a free plugin for Winamp that lets you stream out to the Internet.

<a href="http://rphradio.net/library/winamp/edcast_winamp_3.1.21.exe">Download Edcast plugin</a>

Download the LAME MP3 encoding plugin (lame_enc.dll) and place it into your Winamp folder. (C:\Program Files\Winamp)


<a href="http://rphradio.net/library/lame_winamp/lame_enc.dll">Download LAME</a>



Step 3 - Start Winamp and the Edcast DSP Plugin

- Start Winamp
- Press Ctrl - P (Ctrl and P keys together) - This will open the settings page.
- (1) Click "DSP/Effect" on the left column - you may need to scroll down.
- (2) Select "edcast DSP v3" - a window called "edcast" will appear.



![1](../winamp/edcast-2.png)


Step 4 - Set up the encoder"
- (3) Click the "Add Encoder’ button
- (4) Right-click the new encoder that appears below it
- (5) Choose "Configure" from the menu that appears


![1](../winamp/edcast-3.png)

In the "Basic Settings" section, set up the encoder.

- (6) Enter your chosen bitrate - (128)
- (7) Enter your samplerate - (44100)
- (8) Number of channels - (2)
- (9) Select the "MP3 Lame" encoder
- (10) Select "Icecast2"
- (11) Enter rphradio.net
- (12) Enter 8000
- (13) Enter "testpass"
- (14) Enter "/test.mp3"

##### Note that these credentials are for "test" channel only and not live channel in the main page. password and mountpoint for the live channel is in the guidlines page.

![1](../winamp/edcast-4.png)



- In the "YP Settings" section, enter your station details.
- Click "OK"

![1](../winamp/edcast-5.png)

Step 5 - Start encoding

- (15) Tick the "AutoReconnect" box
- (16) Highlight the new encoder, then click the "Connect" button
You should see information about the encoder status in the "Transfer Rate" column.  If its working properly, a numeric value will appear indicating the transmission speed.

![1](../winamp/edcast-6.png)

TEST IF YOU CAN BROADCAST BELOW

{{% testplayer %}}

Notes

- If you are unable to connect, go back to step 4 and double check every server setting.  You must also make sure there is music playing in Winamp.
- You can also stream audio directly from your sound card input (or other audio device on your PC).  Click the box with an "X" in it under "Live Recording".  You can then select the audio device you wish to capture audio from.


If you are ready to broadcast, proceed to <a href='{{< ref "guidelines.md" >}}'>Guidlines in Broadcasting page</a> 


