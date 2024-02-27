import Image from "next/image";


export default function Photoshop() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between text-center p-12">
            <div style={{ width: '60%', aspectRatio: '1475/931' }}>
                <small className="text-sm font-medium leading-none">Przed</small>
                <Image src="/Zad2_B.jpg" alt="Image" layout="responsive" objectFit="cover" width="1475" height="931" />
                <small className="text-sm font-medium leading-none">Po</small>
                <Image src="/Zad2_C.png" alt="Image" layout="responsive" objectFit="cover" width="1475" height="931" />
            </div>
        </main>
    );
}
