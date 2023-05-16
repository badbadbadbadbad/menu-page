import sunImage from "./Assets/IconsColor/sun.png";
import sunStationImage from "./Assets/IconsColor/sunStation.png";
import emberTwinImage from "./Assets/IconsColor/emberTwin.png";
import ashTwinImage from "./Assets/IconsColor/ashTwin.png";
import timberHearthImage from "./Assets/IconsColor/timberHearth.png";
import attlerockImage from "./Assets/IconsColor/attlerock.png";
import brittleHollowImage from "./Assets/IconsColor/brittleHollow.png";
import hollowsLanternImage from "./Assets/IconsColor/hollowsLantern.png";
import giantsDeepImage from "./Assets/IconsColor/giantsDeep.png";
import orbitalProbeCannonImage from "./Assets/IconsColor/orbitalProbeCannon.png";
import darkBrambleImage from "./Assets/IconsColor/darkBramble.png";
import interloperImage from "./Assets/IconsColor/interloper.png";
import whiteHoleStationImage from "./Assets/IconsColor/whiteHoleStation.png";
import quantumMoonImage from "./Assets/IconsColor/quantumMoon.png";
import strangerImage from "./Assets/stranger.png";

import sunOutline from "./Assets/IconsColorOutlines/sun.png";
import sunStationOutline from "./Assets/IconsColorOutlines/sunStation.png";
import emberTwinOutline from "./Assets/IconsColorOutlines/emberTwin.png";
import ashTwinOutline from "./Assets/IconsColorOutlines/ashTwin.png";
import timberHearthOutline from "./Assets/IconsColorOutlines/timberHearth.png";
import attlerockOutline from "./Assets/IconsColorOutlines/attlerock.png";
import brittleHollowOutline from "./Assets/IconsColorOutlines/brittleHollow.png";
import hollowsLanternOutline from "./Assets/IconsColorOutlines/hollowsLantern.png";
import giantsDeepOutline from "./Assets/IconsColorOutlines/giantsDeep.png";
import orbitalProbeCannonOutline from "./Assets/IconsColorOutlines/orbitalProbeCannon.png";
import darkBrambleOutline from "./Assets/IconsColorOutlines/darkBramble.png";
import interloperOutline from "./Assets/IconsColorOutlines/interloper.png";
import whiteHoleStationOutline from "./Assets/IconsColorOutlines/whiteHoleStation.png";
import quantumMoonOutline from "./Assets/IconsColorOutlines/quantumMoon.png";

const planetData = [
  {
    name: "The Sun",
    image: sunImage,
    outline: sunOutline,
    description:
      "The Sun is a main sequence star at the center of our Solar System. It may seem like it should burn us alive due to its proximity, but considering that we are alive, there must be an error in our calculations. Still, be careful of not flying into it by accident due to using your ship's autopilot carelessly!",
  },
  {
    name: "Sun Station",
    image: sunStationImage,
    outline: sunStationOutline,
    description:
      "A satellite orbiting the Sun. Considering the design, it appears to be of Nomai origin. So far, there have been no successful attempts at landing on it (and Feldspar trying repeatedly to crash into it does not count).",
  },
  {
    name: "Ember Twin",
    image: emberTwinImage,
    outline: emberTwinOutline,
    description:
      "The first half of the Hourglass Twins. Mostly desert rock and many deep caverns, though the planet appears to almost be divided into two halves by an equatorial canyon. Over the course of a Twin Cycle, the sands of Ash Twin are transported into this canyon by gravitational pull.",
  },
  {
    name: "Ash Twin",
    image: ashTwinImage,
    outline: ashTwinOutline,
    description:
      "The second half of the Hourglasss Twins. Almost entirely sand, which is transported back and forth between the twins on a cycle of roughly 20 minutes. Hiding beneath the sands are a small core of sparkly rock and large towers of Nomai origin.",
  },
  {
    name: "Timber Hearth",
    image: timberHearthImage,
    outline: timberHearthOutline,
    description:
      "Our home! A rocky planet, covered in grass, accented with trees, geysers, mountains and craters. One of the craters houses our little village, and the geysers are all connected to strong underground water currents hiding beneath the planet's crust.",
  },
  {
    name: "The Attlerock",
    image: attlerockImage,
    outline: attlerockOutline,
    description:
      "The only moon of Timber Hearth. A small and barren rock, covered in craters. While there does not seem to be much of anything here, we have built an outpost which is being overseen by Esker. The only point of interest is a Nomai structure - which we believe is trying to locate.. something.",
  },
  {
    name: "Brittle Hollow",
    image: brittleHollowImage,
    outline: brittleHollowOutline,
    description:
      "On a glance, this planet seems to be a lot of blue rock, all brittle and in disarray. The interesting aspect lies beneath the crust: The planet is almost entirely hollow, and at the core awaits a Black Hole. We do know that there is a hanging Nomai city under the crust, though exploring it has proven to be difficult.",
  },
  {
    name: "Hollow's Lantern",
    image: hollowsLanternImage,
    outline: hollowsLanternOutline,
    description:
      "The only moon of Brittle Hollow. It appears as if this moon is nothing but lava and a few volcanoes. The volcanoes shoot out balls of lava into the orbit of its planet every so often, making exploration of Brittle Hollow even more fear-inducing.",
  },
  {
    name: "Giant's Deep",
    image: giantsDeepImage,
    outline: giantsDeepOutline,
    description:
      "An ocean planet surrounded by a layer of atmospheric fog. There is no solid land besides a few small islands which are being ravaged by constant tornadoes and thunderstorms. While the ocean itself seems to be safe, it is also impossible to dive deeper than a few metres due to strong currents pushing one out. Still, this planet seems to be among the safer ones in our Solar System.",
  },
  {
    name: "Nomai Cannon",
    image: orbitalProbeCannonImage,
    outline: orbitalProbeCannonOutline,
    description:
      "A large structure of Nomai origin in orbit around Giant's Deep. We are not entirely sure what this structure actually is, but as it seems to resemble a large cannon, we have decided to call it that. We hope that the Nomai translation tool we developed recently will help us understand more about this structure.",
  },
  {
    name: "Dark Bramble",
    image: darkBrambleImage,
    outline: darkBrambleOutline,
    description:
      "This planet used to be a small frozen water planet, but has since been ripped apart by some kind of enormous vine growth for as long as we have known. The center of this vine growth has multiple openings, yet we cannot see anything inside besides dense fog and lights. We have not yet dared investigating the inside of the core.",
  },
  {
    name: "The Interloper",
    image: interloperImage,
    outline: interloperOutline,
    description:
      "A small frozen comet orbiting the Sun, leaving behind a magnificent light blue tail. There is not much we know besides the comet containing a layer of rock and its orbit being a stable ellipsis. Due to the speed and size, we have not yet been able to land on the comet.",
  },
  {
    name: "White Hole Station",
    image: whiteHoleStationImage,
    outline: whiteHoleStationOutline,
    description:
      "At the edge of our Solar System is a White Hole which is just as awe-inspiring as Brittle Hollow's Black Hole. Close to it is a Nomai building that appears to be some kind of outpost or station, enclosed in a circular frame. The function of this building is currently unclear to us.",
  },
  {
    name: "Quantum Moon",
    image: quantumMoonImage,
    outline: quantumMoonOutline,
    description:
      "A small and most curious moon, being in orbit around all five planets of our Solar System at the same time. It appears to behave similar to the purple shard in the Museum - look at it as long as you want, but the moment you look away, it disappears and orbits another planet. The Quantum Moon is covered in thick fog, so we do not know what it actually looks like.",
  },
  {
    name: "???",
    image: strangerImage,
    outline: "none",
    description:
      "The Deep Space Satellite we managed to launch recently has already produced magnificent images of our Solar System. Curiously, this image - and this image alone - shows an anomaly that we do not understand. Each astral body is accounted for, yet there is an impossible shadow on the sun. Gabbro was tasked with checking the Deep Space Satellite for any problems, yet they were not able to find anything.",
  },
];

export default planetData;
