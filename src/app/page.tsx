import Caro from "@/components/caro";
import Panel from "@/components/panel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full lg:mt-16">
          <div className="w-full flex items-center justify-center gap-36 py-24">
            <div className="lg:max-w-2xl w-full text-center">
              <h1 className="relative text-4xl lg:text-5xl pb-2 leading-10 font-black">
                Transforme sua escola em Pogue
              </h1>
              <p className="text-lg text-gray-500 mt-4 font-medium">
                Sua escola aqui, com uma plataforma 100% personalizavel e segura com suporte inadequado para você!
              </p>
              <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                  <span className="text-primary uppercase">Escolas</span>
                  <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">25</p>
                </div>
                <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                  <span className="text-primary uppercase">Usuários</span>
                  <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">3.5k+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full px-6 lg:px-8 mt-16">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h1 className="text-base font-semibold leading-7 text-indigo-600">Começe já</h1>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Evoluindo Escolas</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Aqui, oferecemos um painel completo para alunos verem suas notas de provas ou até mesmo de tarefas, totalmente personalizavel
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neutral-900 to-black w-[2432] h-[1442]" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full px-6 lg:px-8 lg:mt-28">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Panel />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h1 className="text-base font-semibold leading-7 text-indigo-600">Personalização</h1>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Paineis personalizaveis</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Damos um painel 100% costumizavel para você! Com sistemas incriveis de tarefas e provas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full lg:mt-36 ">
          <div className="w-full flex items-center justify-center gap-36 py-24 rounded-2xl">
            <div className="lg:max-w-2xl w-full text-center">
              <h1 className="relative text-4xl lg:text-5xl pb-2 leading-10 font-black">
                Nossos clientes amaram nosso estilo
              </h1>
              <div className="flex justify-center mt-4">
                <Caro />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full lg:mt-36 ">
          <div className="w-full flex items-center justify-center gap-36 py-24 bg-neutral-900 rounded-2xl">
            <div className="lg:max-w-2xl w-full text-center">
              <h1 className="relative text-4xl lg:text-5xl pb-2 leading-10 font-black">
                Gostou de uma funcionalidade?
              </h1>
              <p className="text-lg text-gray-500 mt-4 font-medium">
                Aproveite clicando no botão abaixo!
              </p>
              <div className="flex mt-4 justify-center">
                <Button size="lg">Entrar em Contato</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
