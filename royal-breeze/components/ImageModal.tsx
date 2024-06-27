import Image from "next/image";
export const ImageModal = ({ isOpen, onClose, imageSrc }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative">
        <Image
          src={imageSrc}
          alt="Magnified"
          width={800}
          height={800}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
