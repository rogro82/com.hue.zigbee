# Philips Hue (ZigBee)

Control your Philips Hue devices with Homey using ZigBee!

## !!! Warning !!!

__You will need a dimmer switch to correctly un-pair/reset lamps from the Hue bridge or to reset lamps in case something goes wrong during pairing. If you dont have one get one first before continuing!__

Deleting a lamp from the Hue app or resetting your bridge will NOT work to un-pair/reset your lamps correctly!

### Unpairing lights from the Hue bridge

You will have to un-pair your lamp from the Hue bridge before you can pair it with Homey.

A Hue dimmer switch can be used to un-pair/reset a light using TouchLink.

First pair the lamp to the dimmer-switch:

- Hold your dimmer switch in close proximity to the lamp and long press (+10 seconds) the on-button.
- Keep holding the button while the lamp is blinking.
- The lamp is now paired to the dimmer-switch

Now un-pair the light from the dimmer-switch:

- Hold your dimmer switch in close proximity to the lamp and long press (+10 seconds) both the on-button and the off-button at the same time.
- Keep holding the buttons while the lamp is blinking.
- Your lamp is now un-paired and ready to be included.

### Adding devices to Homey

I recommend adding devices using Homey \ ZigBee instead of selecting the device to add from the Hue app. That way the correct device will be selected automatically based on the interview.

### List of supported devices

- ambiance lamp
- ambiance spot
- ambiance ceiling
- color lamp
- go
- dimmer switch

### Changelog

0.0.1
- Philips Hue (ZigBee) based on the Osram Lightify app
