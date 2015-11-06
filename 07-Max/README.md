# Week 7: Max/MSP
Taught by Matt Ganucheau

## Schedule

### Tuesday, November 3rd (6-9pm)

#### Introduction To Max

Works Refernced:
* [The International Transducer Orchestra](https://cycling74.com/project/international-transducer-orchestra/)
* [The Album](https://cycling74.com/project/album/)
* [Dow Jones](https://cycling74.com/project/dow-jones/)
* [Pipilan](https://cycling74.com/project/pipilan-gamelan-composition-real-time/) 
* [Rose Engine](http://www.tedwiggin.com/Rose_Engine)

The History:
* [Max Matthews](http://en.wikipedia.org/wiki/Max_Mathews)
* [Music N](http://en.wikipedia.org/wiki/MUSIC-N)
* [Who Owns The Software](http://msp.ucsd.edu/Publications/isea-reprint.pdf)
* [PD Vs MaxMSP](http://en.wikipedia.org/wiki/Pure_Data)
* [Philosophy](http://createdigitalmusic.com/2005/05/maxmsp-and-pd-political-manifestos-and-free-music-software/)


The Interface:
* Max Tour
* Locking vs Unlocking [Four Ways to Unlock](https://cycling74.com/2011/04/12/week-1/#.VjlLRq6rRE4)
* Inlets & Outlets
* Presentation View
* Order of Operations (R to L)
* Finding Help
* Patches in Text (compressed and uncompressed): [example](http://cycling74.com/toolbox/8-channel-mixer/)
* [Types of Patch Cords](https://docs.cycling74.com/max7/vignettes/patch_cords)]
* [Patch Cord Alignment](https://docs.cycling74.com/max7/vignettes/aligning_patchcords)
* [Inspector](https://docs.cycling74.com/max7/vignettes/inspector)
* [Documentation](https://docs.cycling74.com/max7/)
* [Keyboard Shortcuts](https://docs.cycling74.com/max7/vignettes/shortcuts)

General Concepts:
* Objects
* Subpatches
* Initializing Objects
* Message Types
    ⁃ Integer = 0
    ⁃ Floating point = 0.0
    ⁃ Message = Symbol = hello world
    ⁃ Message is command that directs object’s behavior
    ⁃ example: “stop” message for metro
    ⁃ bang is a message

Overview of Essential Objects:
* counter
* numberbox (n)
* metro
* toggle (t)
* send (s) and receive(r)

Assignment:
Create standalone application that creates your own music composition in the style of [Steve Reich's Piano Phase](http://toddtarantino.com/hum/reich_pianophase.html)


### Thursday, November 6th (6-9pm)
MSP(Audio) + Processing via OSC

* Recap from Class 1 and New Materials
    - Sends and Receives

* Synthesis
	- Amplitude
		⁃ Visualizing
			- understanding [number~] & how to limit for safety
			- [meter~]
			- [levelmeter~] 
		⁃ Mixing	 	= [gain~]
		⁃ Envelopes 		= [function]
		⁃ Selecting		= [selector~]
	- Waveforms: The Building Blocks
		⁃ Sine 	 		= [cycle~]
		⁃ Square 		= [rect~]
		⁃ Saw	 		= [saw~]
		⁃ Triangle 		= [tri~]
		⁃ White Noise 		= [noise~]
		⁃ Pink Noise 		= [pink~]	 
	- Effects
		⁃ Delay 		= [delay~]
		⁃ Delay+Feedback	= [tapin~] & [tapout~] 
		⁃ Reverb		= [yafr2] (reverb_example.maxpat)		
		⁃ Filters		= [biquad~] + [filtergraph]


* Making it Fun
	- Modulation using Sequencers and Envelopes [techno~] 
	- Using MIDI Controllers: [notein] & [ctlin] 
	- Presets	= [preset]
	- Adding an Interface in Presentation Mode

* [BEAP Audio Curriculum](https://cycling74.com/wiki/index.php?title=BEAP_Analog_Model_Curriculum_Outline&oldid=4425)
* [BEAP: Getting Started - youtube video](https://www.youtube.com/watch?v=A7EMG7Tnots)
* Processing via OSC
	- OSC-Route: http://cnmat.berkeley.edu/downloads
	- TouchOSC
	- [Route]
	- OSC_sampler  
* [PureData (PD)](http://puredata.info/)
* jWeb
* [MaxObjects Database](http://www.maxobjects.com/)


### Saturday, November 8th (12-4pm)
Jitter (Video + Controllers (Arduino))


----------

## Resources
* [Youtube - Max 7 Tutorials](https://www.youtube.com/watch?v=xRd0-giLGPM&list=PLVIa8UkRzErsdnC1DEpDy7S9Ss7BhY7nY)

