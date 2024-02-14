"use client"

import ConfigForm from "@/components/ConfigForm"
import { Card } from "@/components/ui/card"
import {
          Dialog,
          DialogContent,
          DialogDescription,
          DialogHeader,
          DialogTitle,
          DialogTrigger
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { htmlConfigSchema } from "@/lib/schema/htmlConfig.schema"
import { jsConfigSchema } from "@/lib/schema/jsConfig.schema"
import { ReactNode } from "react"

export default function SettingDialog({ button }: { button: ReactNode }) {
          return (
                    <Dialog>
                              <DialogTrigger asChild>
                                        {button}
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px] w-full">
                                        <DialogHeader>
                                                  <DialogTitle>Add Extra Config/CDN</DialogTitle>
                                                  <DialogDescription>
                                                            Add extra configuration to your project to make it more customizable.
                                                  </DialogDescription>
                                        </DialogHeader>
                                        <Tabs defaultValue="html" className="w-full">
                                                  <TabsList className="w-full grid grid-cols-2">
                                                            <TabsTrigger value="html">HTML</TabsTrigger>
                                                            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                                  </TabsList>
                                                  <TabsContent value="html" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={htmlConfigSchema}
                                                                                fieldName="html"
                                                                                label="Your HTML Config/CDN"
                                                                                subtitle="This will be added to the head of your HTML file."
                                                                                placeholder="Input HTML config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                                  <TabsContent value="javascript" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={jsConfigSchema}
                                                                                fieldName="javascript"
                                                                                label="Your JavaScript Config/CDN"
                                                                                subtitle="This will be added after the body of your HTML file."
                                                                                placeholder="Input JavaScript config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                        </Tabs>
                              </DialogContent>
                    </Dialog>
          )
}