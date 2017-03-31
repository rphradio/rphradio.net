
# rphradio.net

This is the source for the website of rphradio.net.

It contains all the necessary files/js/flatfiles that is needed to power the website. compile it using Hugo.

-------------------


**Non-Stop Channel Addresses**

Below are the addresses that you may use when you connect to the broadcast. the streams run on top of IceCast2 audio server.

- http://rphradio.net:8000/mpd.mp3 Channel 1 - All Songs Mix
- http://rphradio.net:8000/mpd2.mp3 Channel 2 - Acoustic Jam
- http://rphradio.net:8000/mpd3.mp3 Channel 3 - Easy Rock
- http://rphradio.net:8000/mpd4.mp3 Channel 4 - Pure Love Songs
- http://rphradio.net:8000/mpd5.mp3 Channel 5 - Foreign Mix
- http://rphradio.net:8000/mpd6.mp3 Channel 6 - OPM Mix
- http://rphradio.net:8000/mpd7.mp3 Channel 7 - OPM Alternatives
- http://rphradio.net:8000/mpd8.mp3 Channel 8 - OPM Rock Oldies

---------------------

**Live Channel Addresses and Credentials**

http://rphradio.net:8000/live.mp3
http://rphradio.net:8000/test.mp3

---------------------

**Credentials and format accepted**

- Type:	Icecast2
- Host:	rphradio.net
- Mount:	/live.mp3 <--make sure to include the "/"
- port:	8000
- Login:	source
- password:	livepass
- Bitrate:	128 kbps
- Format:	mp3
- Channels:	Stereo

Just change the live channel part if you will broadcast to other channels (i.e test to live etc.) note that you cannot stream on non-stop music channels.
