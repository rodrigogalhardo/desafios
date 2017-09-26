Media Recorder API Demo

Record a 640x480 video using the media recorder API implemented in Firefox and Chrome

made by Rodrigo Galhardo - CTO, Software Archtect and Technology Inovation, Code Exorcist, Code Evangelist, [Profile](https://www.linkedin.com/in/galhardoro)

Works on:

Firefox 30 and up
Chrome 47,48 (video only, enable experimental Web Platform features at chrome://flags)
Chrome 49+
Issues:
Pause does not stop audio recording on Chrome 49,50
Containers & codecs:

 	Chrome 47	Chrome 48	Chrome 49+	Chrome 52+	Firefox 30+
Container	webm	webm	webm	webm	webm
Video	VP8	VP8	VP8/VP9	VP8/VP9/H264	VP8
Audio	none	none	Opus @ 48kHz	Opus @ 48kHz	Vorbis @ 44.1 kHz
Links:

Reference W3C: https://www.w3.org/TR/webrtc/#simple-peer-to-peer-example
GitHub: https://github.com/rodrigogalhardo/desafios/tree/master/30sh
W3C MediaStream: https://dvcs.w3.org/hg/audio/raw-file/tip/streams/StreamProcessing.html
Media Recorder API at 65% penetration thanks to Chrome: https://addpipe.com/blog/media-recorder-api-is-now-supported-by-65-of-all-desktop-internet-users/
