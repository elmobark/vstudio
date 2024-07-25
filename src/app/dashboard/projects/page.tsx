"use client";

import { IconCopy, IconCurrencyRiyal, IconEdit, IconEye, IconPlus, IconTrash } from "@tabler/icons-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "~/components/ui/table";

export default function ProjectsPage() {
  // create  a list of projects and on a top button to add a new project
    return (
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between items-center w-full p-4">
          <h1 className="text-2xl font-semibold">المشاريع</h1>
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <IconPlus />
        <span>اضافة مشروع</span>
      </HoverBorderGradient>
        </div>
        <div className="flex flex-wrap w-full h-full p-4">
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead  >المشروع</TableHead>
          <TableHead >المرحلة</TableHead>
          <TableHead >الميزانية</TableHead>
          <TableHead >التسجيل</TableHead>
          <TableHead >التحكم</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((invoice,index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex flex-col space-x-2">
                <span>{invoice.name}</span>
                <span className="text-xs text-gray-500">{invoice.description}</span>
              </div>
            </TableCell>
            <TableCell>{invoice.stage}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>{invoice.cost}</span>
                <IconCurrencyRiyal />
              </div>
               </TableCell>
            <TableCell>
              {/* use badge component */}
              <Badge variant={invoice.registered ? "default" : "destructive"}>
                {invoice.registered ? "مسجل" : "غير مسجل"}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Button   size="icon" ><IconEye size={18}/></Button>
              &nbsp;
                <Button variant="secondary"  size="icon" ><IconCopy size={18}/></Button>
                &nbsp;
                <Button variant="destructive" size="icon" ><IconTrash size={18}/></Button>

              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
        </div>
      </div>
    );
}

const list =[
{
  id:"1",
  name:"test",
  description:"test",
  cost:1000,
  registered:false,
  stage:"production",
  
},
{
  id:"1",
  name:"test",
  description:"test",
  cost:1000,
  registered:true,
  stage:"production",
  
}
];