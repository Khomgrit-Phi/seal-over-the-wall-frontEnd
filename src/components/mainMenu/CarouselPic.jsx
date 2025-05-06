"use client"

import slide1 from "../../assets/images/shop/Don’t_kill_my_vibe_bag_white.png"
import slide2 from "../../assets/images/shop/Fetch_this_bag_black.png"
import slide3 from "../../assets/images/shop/Fetch_this_shirt_blue.png"
import slide4 from "../../assets/images/shop/Just_keep_running_shirt_black.png"

import React, { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const images = [slide1, slide2, slide3, slide4]

export default function MyCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // หมุนทุก 3 วิ

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl ">
      <Carousel className="w-full ">
        <CarouselContent className="">
          <CarouselItem className="">
            <Card className="border-none">
              <CardContent className="h-full w-full p-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    className="w-full object-cover h-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
