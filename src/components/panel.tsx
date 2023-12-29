'use client'

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./ui/resizable"

export default function Panel() {
    return (
        <>
            <ResizablePanelGroup
                direction="vertical"
                className="max-w-md rounded-lg border"
            >
                <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Tarefas</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup direction="horizontal">
                        <ResizablePanel defaultSize={75}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Espanhol</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Matematica</span>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}