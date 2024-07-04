"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Manager = () => {
    return (
        <section className="w-fit mx-auto p-2 border-2 border-black rounded-xl shadow-2xl bg-white">
            <Tabs
                id="tabsId"
                defaultValue="display"
                className="flex flex-col items-center justify-center"
            >
                <TabsList>
                    <TabsTrigger
                        className="data-[state=active]:text-color-primary text-2xl "
                        value="display"
                    >
                        Agendamentos
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:text-color-primary text-2xl "
                        value="create"
                    >
                        Criar Agendamento
                    </TabsTrigger>
                </TabsList>

                <span className="w-full border-2 mt-4"></span>

                <section className="flex flex-col gap-8">
                    <TabsContent value="display">
                        {/*Tab_Display*/}
                    </TabsContent>
                    <TabsContent value="create">
                        {/*Tab_Create*/}
                    </TabsContent>
                </section>
            </Tabs>
        </section>
    );
};