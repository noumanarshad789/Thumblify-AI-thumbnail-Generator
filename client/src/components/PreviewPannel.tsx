import React from "react";
import type { AspectRatio, IThumbnail } from "../assests/assets";
import { DownloadIcon, Loader2Icon } from "lucide-react";

const PreviewPannel = ({
  thumbnail,
  isLoading,
  aspectRatio,
}: {
  thumbnail: IThumbnail;
  isLoading: boolean;
  aspectRatio: AspectRatio;
}) => {
  const aspectClasses = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  } as Record<AspectRatio, string>;

  return (
    <div className="relative max-auto w-full max-w-2xl">
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
        {/* Laoding State */}
        {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25">
                <Loader2Icon className="size-8 animate-spin text-zinc-400" />
                <div className="text-center">
                    <p className="text-sm font-medium text-zinc-200">
                        AI is creating your thumbnail...
                    </p>
                    <div className="mt-1 text-sm text-zinc-400">This may take 10-10 seconds</div>
                </div>
            </div>
        )}

        {/* Image Preview */}
        {!isLoading && thumbnail?.image_url && (
            <div className="group relative h-full w-full">
                <img src={thumbnail.image_url} alt={thumbnail.title} className="w-full h-full object-cover" />

                <div className="absolute inset-0 flex items-end justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100">
                    <button type="button" className="mb-6 flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-medium transition bg-white/30 ring-2 ring-white/40 backdrop-blur hover:scale-105 active:scale-95">
                    <DownloadIcon className="size-4" />
                    Download Thumbnail
                    </button>

                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPannel;
