+++
date = "2017-03-18T10:59:56+01:00"
title = "mixxx"
draft = false

+++



**MIXXX TUTORIAL**
=====


Step 1: Download MIXXX

<a href="https://www.mixxx.org/download/" target="_blank">Download MIXXX</a>


Step 2: Download libmp3lame.dll file and put it on your Mixxx Directory probably the path: C:\Program Files\Mixxx

<a href="http://rphradio.net/library/For%2032Bit%20Windows/libmp3lame.dll">Download LAME 32-bit Windows</a>
&nbsp;  
<a href="http://rphradio.net/library/For%2064Bit%20Windows/libmp3lame.dll">Download LAME 64-bit Windows</a>
&nbsp;  
<a href="http://rphradio.net/library/For%20Mac/Lame%203.98.4%20universal%20x86_64%20i386.pkg">Download MAC</a>



Step 3:  Open Mixxx Preferences and go to "Live Broadcasting" there's a screenshot <a href="https://www.mixxx.org/manual/latest/chapters/livebroadcasting.html#configuring-mixxx" target="_blank">on this link</a> to guide you. Below are the credentials to be used to connect to test channel:


- **Type:**	Icecast2
- **Host:**	rphradio.net
- **Mount:**	/test.mp3 <--make sure to include the "/"
- **port:**	8000
- **Login:**	source
- **password:**	testpass
- **Bitrate:**	128 kbps
- **Format:**	mp3
- **Channels:**	Stereo
- **check:** "public stream"
- **check:** "enable live broadcasting"
- **click Ok**

##### Note that these credentials are for "test" channel only and not live channel in the main page. password and mountpoint for the live channel is in the guidlines page.

A prompt will tell you that you are connected to the server and on-air on test channel live below. you may also check the middle part of Mixxx to see if the "On-Air" label is lighted up. you may also disconnect to the server by clicking that same "On Air" label.

![1](../mixxx/mixxx.PNG)

You should hear a sound coming from the below player if your connection is successfull:

{{% testplayer %}}




If you are ready to broadcast, proceed to <a href='{{< ref "guidelines.md" >}}'>Guidelines in Broadcasting page</a> 
