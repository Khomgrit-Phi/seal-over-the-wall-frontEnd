import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

const ProductPreview = ({ images }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleThumbClick = useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className=" flex mx-auto w-full flex-col items-center justify-center ">
      <Carousel setApi={setApi} className="w-150 max-w-400 mx-auto">
        <CarouselContent>
          {images.map((imageSrc, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none w-150 h-150">
                <CardContent className="flex aspect-video items-center justify-center p-0 object-cover">
                  <img src={`/${imageSrc}`} alt={`Slide ${index + 1}`} className="w-full h-full" />
                </CardContent>
              </Card>
            </CarouselItem>
          )
          )}
        </CarouselContent>
      </Carousel>

      <Carousel className="mt-4 w-full max-w-400">
        <CarouselContent className="flex my-1">
          {images.map((imageSrc, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "basis-1/5 cursor-pointer",
                current === index + 1 ? "opacity-100" : "opacity-50"
              )}
              onClick={() => handleThumbClick(index)}
            >
              <Card className="border-none shadow-none">
                <CardContent className="h-44 shadow-lg border-1 border-gray-200 bg-white rounded-xl cursor-pointer px-0">
                  <img src={`/${imageSrc}`} alt={`Thumbnail ${index + 1}`} className="h-44 w-full object-cover" />
                </CardContent>
              </Card>
            </CarouselItem>
          )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductPreview;
