// components/MediaPreviewer.tsx
import React, { useEffect } from 'react';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Slider } from '../Slider';
import AliceCarousel, { EventObject } from "react-alice-carousel";
import { Img } from '../Img';
import { Button } from '../Button';

interface MediaItem {
  url: string;
  type: string;
  alt: string;
  thumbnail?: string;
}

interface MediaPreviewerProps {
  media: MediaItem[];
  className?: string;
  onOpen: boolean;
  onClose: () => void;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const MediaPreviewer = ({
  media,
  className = '',
  onClose,
  onOpen = false,
  selectedIndex = 0,
  setSelectedIndex
}: MediaPreviewerProps) => {
  const thumbnailsRef = React.useRef<HTMLDivElement>(null);
  const thumbnailRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const sliderRef = React.useRef<AliceCarousel>(null);

  useEffect(() => {
    if (onOpen && thumbnailsRef.current && thumbnailRefs.current[selectedIndex]) {
      thumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedIndex, onOpen]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  if (!media || media.length === 0) return null;

  return (
    <div className={className}>
      {onOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/90 backdrop-blur-sm">
          <div className="relative max-w-[80%] w-full max-h-[90vh]">
            <div className='absolute md:px-2 -top-12 flex w-full justify-between'>
              <div className='w-[80%] lg:w-full'>
                <Heading as="p" className="text-[1.00rem] font-medium tracking-[0.00rem] !text-indigo-100">
                  Rumah Dinas, LT100m2, dekat Gandaria City, Jakarta Selatan
                </Heading>
                <Text as="p" className="text-[1.00rem] font-medium tracking-[0.00rem] !text-indigo-100">
                  Grogol, Jakarta Barat,DKI Jakarta
                </Text>
              </div>
              <Button
                onClick={() => onClose()}
                className="z-50 bg-transparent text-[#FCFCFC]"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <line x1="6" y1="6" x2="18" y2="18"/>
                <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </Button>
            </div>
            {/* Close Button */}

            {/* Main Preview */}
            <div className="mb-4 h-[70vh] flex items-center justify-center relative">
              <Button
                size="xs"
                variant="outline"
                shape="circle"
                onClick={handlePrev}
                disabled={selectedIndex === 0}
                className="absolute left-0 top-1/2 -rotate-180 -translate-y-1/2 bg-black/50 rounded-[16px] border border-solid py-6 px-[1.2rem] text-neutral-white hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Img src={"img_arrow_right_text_disable.svg"} width={10} height={22}/>
              </Button>
              
              <Button
                size="xs"
                variant="outline"
                shape="circle"
                onClick={handleNext}
                disabled={selectedIndex === media.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-[16px] border border-solid py-6 px-[1.2rem] text-neutral-white hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Img src={"img_arrow_right_text_disable.svg"} width={10} height={22}/>
              </Button>

              {media[selectedIndex].type === 'image' ? (
                <img
                  src={media[selectedIndex].url}
                  alt="Preview"
                  className="max-h-full max-w-[90%] object-contain rounded-lg"
                />
              ) : (
                <video
                  controls
                  className="max-h-full max-w-[90%] rounded-lg"
                  src={media[selectedIndex].url}
                  poster={media[selectedIndex].thumbnail}
                />
              )}
            </div>

            {/* Thumbnail Slider */}
            <div className="px-8">
              <Slider
                ref={sliderRef}
                responsive={{
                  "0": { items: 3 },
                  "368": { items: 4 },
                  "468": { items: 5 },
                  "600": { items: 6 },
                  "728": { items: 8 },
                  "900": { items: 9 },
                  "1024": { items: 10 },
                  "1280": { items: 12 },
                }}
                disableDotsControls
                touchTracking={false}
                infinite={false}
                activeIndex={selectedIndex}
                onSlideChanged={(e: EventObject) => setSelectedIndex(e.item)}
                items={media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`mx-1 w-20 h-20 rounded-lg border-2 ${
                      index === selectedIndex
                        ? 'border-blue-500'
                        : 'border-transparent'
                    } overflow-hidden transition-all`}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={item.thumbnail || '/video-thumbnail-fallback.jpg'}
                          alt="Video thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};