import React from 'react'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaMobileAlt,
} from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'

export default function PlatformsLogo({ platform }) {
  switch (platform) {
    case 1:
      return (
        <span>
          <FaWindows className="text-white text-2xl" />
        </span>
      )
    case 2:
      return (
        <span>
          <FaPlaystation className="text-white text-2xl" />
        </span>
      )
    case 3:
      return (
        <span>
          <FaXbox className="text-white text-2xl" />
        </span>
      )
    case 7:
      return (
        <span>
          <SiNintendoswitch className="text-white text-2xl" />
        </span>
      )
    case 6:
      return (
        <span>
          <FaLinux className="text-white text-2xl" />
        </span>
      )
    case 8:
      return (
        <span>
          <FaMobileAlt className="text-white text-2xl" />
        </span>
      )
    // no default
  }
}
