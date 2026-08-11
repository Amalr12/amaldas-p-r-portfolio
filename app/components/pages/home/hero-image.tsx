import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <Image
        fill
        src="/das.png"
        alt="Hero profile image"
        quality={100}
        sizes="100vw"
        className="object-contain object-center"
        priority
      />
    </div>
  );
}
