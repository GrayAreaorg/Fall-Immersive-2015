# Week 8: Projection Mapping
Taught by [Taurin Barrera](http://www.taurinbarrera.com)

## Schedule
* Tuesday, November 17th (6-9pm) 
* Friday, November 17th (6-9pm)
* Saturday, November 17th (12-4pm)

# Day 1
### Introduction To Projectors, Mapping, Mapping Projections.

##### What is Projection Mapping?
* [Thanks, Wikipedia](https://en.wikipedia.org/wiki/Projection_mapping)
* [Augmented Reality - Projection Mapping (Minidoc)](https://vimeo.com/43385747) 
##### State of the Art

* [AntiVJ - The Ark](https://vimeo.com/85212054)
* [3hund - Bioluminescent Forest](http://www.bioluminescent-forest.com/film/)
* [Emmy Curl - Come Closer](https://vimeo.com/113000956)
* [Amon Tobin - ISAM](http://www.derivative.ca/Events/2011/AmonTobinVSquared/)
* [Flying Lotus x Strangeloop](https://vimeo.com/52415848)
* [Obscura Digital - illUmiNations: Protecting Our Planet](http://obscuradigital.com/work/climate_summit_2014/)
* [Projection Bombing - Instructable](http://www.instructables.com/id/PROJECTION-BOMBING/)
* [Box (Process) - Bot & Dolly](https://vimeo.com/102776011)
* [Sony Realtime Projection Mapping](https://vimeo.com/34021153)

##### DIY
Find an object, spatial detail, or unique surface and write down 5 qualities it has.
 
###### Examples:
* Material
* Color
* Shape
* Texture
* Context

….Now shine a projector onto it and explore what it means to shine concentrated light onto the object.

Make solid background colors and explore how different colors work with the surface and material

Look at the 5 qualities you wrote down and think about how they are affected by the light.

##### The basic process
* Identify content / concept
    * What is the content?
        * Videos
        * Images
        * Vector animations
    * What is/are the object(s) you’ll map to?
        * How many surfaces will cover all objects?
        * Is it planar?
        * Is it made up of straight lines?
    * What is the concept?
        * Why are you mapping this object with this content?
* Decide on a technique (or multiple) based on the object(s) to be mapped
    * Quad mapping
    * Masking layers
    * Mesh mapping

##### Quad mapping

###### Basic idea:
The corners of a rectangle act as anchor points for rendering a texture onto an object properly. 
***(Max tutorial:"1_Projection Mapping in Jit.World.maxpat")***

***( Processing tutorial: "CornerPin" )***

##### Try it yourself
* Go back to the object you chose earlier
* Break it down into quads, as best you can
* Draw the proper quads in Processing and fit them onto the object
* Explore different colors, images, animations

##### Quad mapping with multiple quads
***( Max tutorial:"1_Projection Mapping in Jit.World.maxpat")***

***( Processing tutorial: "ProjectedQuadsGIFs")***

#### Do it yourself!
* Grab a projector and a partner and spend the last 30 min of class mapping a spot in the theater. 

#### Additional Links and Resources
* [Projector Central](http://www.projectorcentral.com/)
* [Projection Mapping Blog](http://projection-mapping.org/)

====

# Day 2
### Objects, Meshes, and Textures 

- Projection Mapping in Processing
- Entering the Matrix w/ jit.world
- The OpenGL pipeline and you
- Mapping Factory 2U @ Night!

##### ***CLASS CHALLENGE!  . . .***
  - Use the toolkit of your choice to map the Factory 2U
  - Consider which architectural elements you want to map.
  - Use mesh mapping, quad mapping, or combination.
  - Balance your the time spent modeling, content, installation, calibration
  - Group work is encouraged! Divide up tasks, share amongst teams. 

====

# Day 3 
### Putting it all together 

- Friday Night Review
- Code Frameworks & Software Packages Overview
- Projector Types Overview
- Building a Projection Mapping Application in Max/Msp/Jitter

#### Code Frameworks

  - [Processing](http://processing.org)
    - [First Toolkit](github)  
  - [Keystone](http://keystonep5.sourceforge.net/)  
  - [Openframeworks](http://Openframeworks.cc)
    - [Mapamok](https://github.com/YCAMInterlab/ProCamToolkit/wiki/mapamok-(English))
    - [Ycam ProCam Toolkit](http://createdigitalmotion.com/2012/03/projector-and-camera-a-little-closer-new-magical-mapping-tools-3d-scanning-and-more/)
    - Raspberry Pi

#### Software Packages

  - [Touch Designer](http://www.derivative.ca/)  
  - [Lpmt](http://hv-a.com/lpmt/)
  - [Resolume](http://www.resolume.com/)
  - [vvvv](http://vvvv.org/)
     - [How to project on 3D Geometry](http://vvvv.org/documentation/how-to-project-on-3d-geometry)
  - [Vdmx](http://vidvox.net/)
  - [Syphon](http://syphon.v002.info/)
  - [Max/MSP + Jitter](maxmsp)
  - [Cinder](http://libcinder.org)
  - [madmapper](http://www.madmapper.com/)
  - [Structured-light](http://en.wikipedia.org/wiki/Structured-light_3D_scanner)
  - [Dynamapper](http://dynamapper.net/)
  - [Painting With Light](http://pwl.bigfug.com/)
  - [VPT](http://hcgilje.wordpress.com/vpt/)
  - [MapMap](http://mapmap.info/tiki-index.php)
  - [Mesh Warp Server](http://meshwarpserver.org/)

#### Automatic Calibration

  - [TightLight](http://createdigitalmotion.com/2013/08/tightlight-automatic-3d-mapping-for-anything-touchdesigner-arduino/) 
  - [Structured Light](http://en.wikipedia.org/wiki/Structured-light_3D_scanner)
  - [Structured Light Instructable](http://www.instructables.com/id/Structured-Light-3D-Scanning/)

#### Types of Projectors

##### DLP
DLP stands for digital light processing. These projectors use tiny mirrors to reflect light toward the screen (an "on" pixel) or away (an "off" pixel). Most use a color wheel -- literally a spinning wheel with color filters -- to create sequential color. Some high-end models use three DLP chips; one each for red, green, and blue. DLP projectors range in price from a few hundred dollars to tens of thousands, and more. Most projectors in movie theaters use DLP. A challenge imposed by DLP projectors is that unless you are filming them with a high-end camera, you will see banding on most consumer digital cameras.

Pros of DLP:
- Great color accuracy
- Great contrast.
- Best contrast ratios and shadow detail.
- Same technology as projectors installed in digital theaters.

Cons of DLP:
- On some projectors, viewers can detect a color breakup effect called the "rainbow" effect.
- Sometimes color saturation is not as good as LCD or home theater DLP projectors.

###### LCD
LCD, i.e., liquid crystal display, is the technology found in most TVs. LCD projectors use three liquid crystal panels, each tasked with creating an image using just one of the primary colors (red, green, and blue). All three are projected on the screen at once, so you see a full color image. LCD projectors range in price from a few hundred to several thousand dollars. LCD projectors will film properly with hand-held and consumer cameras, they are ideal for documenting projection works.

Pros of LCD:
- Very bright
- True high definition models are the least costly of any technologies with 720p models starting at under $2k.
- Great color saturation.
- 1000 lumen and lower models will usually have long lasting lamps.
- Can be filmed with consumer cameras w/out banding.

Cons of LCD:
- Dead pixels are common.
- Contrast ratios are lower than those on DLP projectors.
- Shadow detail and absolute black levels fall short of DLP powered projectors.
- Panel convergence problems (where the three LCD panels don't align properly producing a noticeable color halo around each pixel) are common.
- LCD panels are organic and lose image quality over time. The less the machine is used each day, the less of a problem this is. Projectors that are used for over eight (8) hours a day can exhibit problems fairly quickly.
- Color uniformity across the image is lower than that of DLP powered projectors.

##### LCoS
LCoS, or liquid crystal on silicone projectors, came along at about the same time as DLP powered projectors. It is a bit of a hybrid between LCD and DLP LCoS technology is also referred to as reflective LCD, while individual manufacturers use their own names. Sony and JVC are the primary manufacturers of LCoS projectors, which they call SXRD and D-ILA, respectively. LCoS projectors range in price from a few thousand dollars to a few models that are in the tens-of-thousands range. 

Pros of LCoS:
- LCoS resolutions tend to start at SXGA enabling native 720p high definition images to be shown.
- Like LCD, LCoS machines can be very bright.
- Offers a very smooth, film-like image due to its pixel structure.
- Great color saturation and accuracy.

Cons of LCoS:
- Can be pricey, although based on resolution, the cost is not much more than that of DLP.
- Dead pixels are more visible than with other technologies and happen as often as with LCD's.

====

Projector References:
- http://www.projectorcentral.com/
- http://www.theprojectorpros.com/learn-s-learn-p-theater_dlp_vs_lcd_vs_lcos.htm
- http://www.cnet.com/news/dlp-vs-lcd-vs-lcos-projector-tech-pros-and-cons/



