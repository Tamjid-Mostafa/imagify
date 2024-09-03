"use client";
import { dataUrl, debounce, getImageSize } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const TransformedImage = ({
  image,
  type,
  title,
  isTransforming,
  setIsTransforming,
  transformationConfig,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = () => {
    const a = document.createElement("a");
    a.href = image.secureUrl;
    a.download = `${title}-${type}.jpg`;
    a.click();
  };
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-600">Transformed</h3>
        {hasDownload && (
          <button className="download-btn" onClick={downloadHandler}>
            <Image
              src="/assets/icons/download.svg"
              width={24}
              height={24}
              alt="Download"
              className="pb-[6px]"
            />
          </button>
        )}
      </div>
      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt={image?.title}
            sizes={"(max-width: 768px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
            onLoad={() => setIsTransforming && setIsTransforming(false)}
            onError={() =>
              debounce(
                () => setIsTransforming && setIsTransforming(false),
                8000
              )
            }
            {...transformationConfig}
          />
          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="Transforming"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="transformed-placeholder">Transformed Image</div>
      )}
    </div>
  );
};

export default TransformedImage;
