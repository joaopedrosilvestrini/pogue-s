'use client'
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function Caro() {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div>
                                <Card className="w-[20rem]">
                                    <CardHeader className="flex flex-col justify-center">
                                        <Avatar src="https://cdn.discordapp.com/avatars/1108083814875537468/6bd49303ce26decc1b743a27fe5cd359.png?size=2048" className="h-24 w-24" />
                                        <p className="font-semibold text-2xl">Lostexe</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>Otimo design e sistema, adorei</p>
                                    </CardBody>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}