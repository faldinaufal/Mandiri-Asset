import { Button, Img, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface breadcrumbDataProps {
  text: string;
  url: string;
  isCurrentPage: boolean;
}

interface imageThumbnailProps {
  url: string;
  alt: string;
  type: string;
  thumbnailImage?: string;
}

interface Props {
  breadcrumbData: breadcrumbDataProps[];
  thumbnail: imageThumbnailProps[];
  isCopied: boolean;
  openMedia: (index: number) => void; // Tambahkan parameter index
  handLeCopy: () => void;
}

const DetailListingSection = (props: Props) => {

  const handleThumbnailClick = (index: number) => {
    props.openMedia(index); // ✅ Teruskan index ke parent
  }
  
  return (
    <>
      {/* detail listing section */}
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[3.00rem] md:px-[1.25rem]">
          <Breadcrumb
            separator={
              <Img
                src="img_frame_427320547_20x1238.svg"
                width={7}
                height={16}
                alt="Arrow Right"
                className="h-[1.00rem] object-contain w-full"
              />
            }
            className="flex flex-wrap items-center gap-[0.50rem] md:flex-col"
          >
            {props?.breadcrumbData?.map((item, index) => (
              <BreadcrumbItem isCurrentPage={item.isCurrentPage} key={index}>
                <BreadcrumbLink href={item.url} as={Link}>
                  <Text
                    size="textxs"
                    as="p"
                    className={twMerge(
                      "!font-notosans text-[0.88rem] tracking-[0.00rem]",
                      item.isCurrentPage ? "!text-text-disable font-light sm:line-clamp-1" : "!text-indigo-900 font-medium "
                    )}
                  >
                    {item.text}
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <div className="flex items-center gap-[1.50rem] md:flex-col relative">
          {props.thumbnail[0].type === 'image' ? 
            <Img
              src={props.thumbnail[0]?.url}
              width={646}
              height={454}
              isStatic //hapus nanti setelah dapat API yang asli
              onClick={()=> handleThumbnailClick(0)}
              alt={props.thumbnail[0]?.alt}
              className="rounded-lg object-contain lg:w-[52.5%] hover:cursor-pointer"
            />
          :
            <video
              controls
              className="rounded-lg object-contain lg:w-[52.5%] hover:cursor-pointer"
              src={props.thumbnail[0]?.url}
              onClick={()=> handleThumbnailClick(0)}
              poster={props.thumbnail[0]?.thumbnailImage}
            />
          }
            <div className="flex">
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-2 h-full">
                  {props.thumbnail?.map((item, index) => {
                    const totalPhotos = props.thumbnail.length;
                    const isLastItem = index === totalPhotos - 1;
                    const shouldShowButton = (totalPhotos > 2 && isLastItem);

                    // Untuk array dengan panjang 1
                    if (totalPhotos === 1) {
                      return (
                        <div key={index} className="w-full rounded-lg  hover:cursor-pointer" onClick={()=> handleThumbnailClick(index)}>
                          <Img
                            src={item.url}
                            isStatic //hapus nanti setelah dapat API yang asli
                            width={288}
                            height={216}
                            alt={item.alt}
                            className="w-full rounded-lg object-cover"
                          />
                        </div>
                      );
                    }

                    // Untuk item setelah index 0 sampai sebelum button
                    if (index > 0 && !shouldShowButton) {
                      return (
                        <div key={index} onClick={()=> handleThumbnailClick(index)} className={twMerge("w-full rounded-lg bg-blue_gray-50_02 hover:cursor-pointer",
                          (index > 1) && "md:hidden", index > 4 && "lg:hidden"
                        )}>
                          <Img
                            src={item.url}
                            width={288}
                            height={216}
                            isStatic //hapus nanti setelah dapat API yang asli
                            alt={item.alt}
                            className="w-full rounded-lg object-cover"
                          />
                        </div>
                      );
                    }

                    // Untuk button khusus
                    if (shouldShowButton) {
                      return (
                        <Button
                          key={index}
                          onClick={()=> handleThumbnailClick(index)}
                          className="w-full rounded-lg bg-[#000000] hidden md:flex relative h-full hover:cursor-pointer"
                        >
                          {/* Background image dengan overlay */}
                          <div className="absolute inset-0 opacity-40">
                            <Img
                              src={item.url}
                              width={288}
                              height={216}
                              alt=""
                              isStatic //hapus nanti setelah dapat API yang asli
                              className="w-full h-full rounded-lg object-cover"
                            />
                          </div>
                          
                          {/* Konten button */}
                          <div className="relative z-10 flex items-center gap-3">
                            <Img
                              src="img_bi.svg"
                              width={24}
                              height={24}
                              alt="Photos"
                              className="filter brightness-0 invert"
                            />
                            <span className={twMerge("font-bold text-neutral-white",
                              totalPhotos === 3 ? 'text-base' : 'text-lg'
                            )}>
                              {totalPhotos === 3 ? 'Lihat Semua Foto' : `+${totalPhotos-2} Photo`}
                            </span>
                          </div>
                        </Button>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
            <Button
              color="gray_50_01"
              size="xl"
              shape="round"
              onClick={()=> handleThumbnailClick(0)}
              leftIcon={
                <Img
                  src="img_bi.svg"
                  width={16}
                  height={16}
                  alt="Bi"
                  className=""
                />
              }
              className="absolute bottom-4 shadow-md md:top-1/2 right-5 md:self-start md:hidden"
            >
              Lihat Semua Foto
            </Button>
            <Button
              size="lg"
              variant="outline"
              shape="round"
              onClick={()=> props.handLeCopy()}
              leftIcon={
                <Img
                  src={props.isCopied ? "img_fe_check.svg" : "img_iconparkoutlinecopy.svg"}
                  width={24}
                  height={24}
                  alt="Copy icon"
                  className="h-[1.50rem] w-[1.50rem] object-contain"
                />
              }
              className="absolute top-4 right-4 bg-white-a700 hidden md:flex min-w-[7.50rem] gap-[0.25rem] rounded sm:max-w-[100px] !border px-[0.56rem] font-notosans font-medium tracking-[0.00rem]"
            >
              {props.isCopied ? "Tersalin!" : "Salin Link"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailListingSection;
