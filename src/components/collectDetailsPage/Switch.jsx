import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchDemo() {
  return (
     <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" className="h-[28px] w-[56px]"/>
    </div>
  )
}

export default SwitchDemo;