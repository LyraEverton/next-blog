import Link from "next/link";
import profileImg from "@/public/profile-img.png";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href={"/"}>
            <div>
                <Image src={profileImg} alt={"Codebucks"} className={"w-full h-auto rounded-full"} />
            </div>
            <span>CodeBucks</span>
        </Link>
    )
}