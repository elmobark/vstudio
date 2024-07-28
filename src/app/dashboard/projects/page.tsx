// "use client";
// import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
// import { IconCopy, IconCurrencyRiyal, IconEye, IconPlus, IconTrash } from "@tabler/icons-react";
// import { useEffect, useState } from "react";
// import { AlertDialogHeader, AlertDialogFooter } from "~/components/ui/alert-dialog";
// import { Badge } from "~/components/ui/badge";
// import { Button } from "~/components/ui/button";
// import { HoverBorderGradient } from "~/components/ui/hover-border-gradient";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
// import { ToastAction } from "~/components/ui/toast";
// import { toast } from "~/components/ui/use-toast";

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const res = await fetch('/api/projects');
//       const data = await res.json();
//       setProjects(data);
//     };

//     fetchProjects();
//   }, []);
//   // create  a list of projects and on a top button to add a new project
//     return (
//       <div className="flex flex-col w-full h-full">
//         <div className="flex justify-between items-center w-full p-4">
//           <h1 className="text-2xl font-semibold">المشاريع</h1>
//           <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
//       >
//         <IconPlus />
//         <span>اضافة مشروع</span>
//       </HoverBorderGradient>
//         </div>
//         <div className="flex flex-wrap w-full h-full p-4">
//         <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead >المشروع</TableHead>
//           <TableHead >المرحلة</TableHead>
//           <TableHead >الميزانية</TableHead>
//           <TableHead >التسجيل</TableHead>
//           <TableHead >التحكم</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {list.map((invoice,index) => (
//           <TableRow key={index}>
//             <TableCell>
//               <div className="flex flex-col space-x-2">
//                 <span>{invoice.name}</span>
//                 <span className="text-xs text-gray-500">{invoice.description}</span>
//               </div>
//             </TableCell>
//             <TableCell>{invoice.stage}</TableCell>
//             <TableCell>
//               <div className="flex items-center space-x-2 rtl:space-x-reverse">
//                 <span>{invoice.cost}</span>
//                 <IconCurrencyRiyal />
//               </div>
//                </TableCell>
//             <TableCell>
//               {/* use badge component */}
//               <Badge variant={invoice.registered ? "default" : "destructive"}>
//                 {invoice.registered ? "مسجل" : "غير مسجل"}
//               </Badge>
//             </TableCell>
//             <TableCell>
//               <div className="flex items-center space-x-2 rtl:space-x-reverse">
//               <Button   size="icon" ><IconEye size={18}/></Button>
//               &nbsp;
//                 <Button variant="secondary"  size="icon" ><IconCopy size={18}/></Button>
//                 &nbsp;
//               {/* <DeleteButton/> */}

//               </div>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
     
//     </Table>
//         </div>
//       </div>
//     );
// }
// function DeleteButton() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//       <Button variant="destructive" size="icon" ><IconTrash size={18}/></Button>
        
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>هل أنت متأكد من أنك تريد حذف المشروع؟</AlertDialogTitle>
//           <AlertDialogDescription>
//             لا يمكن التراجع عن هذا الإجراء سوف يتم حذف المشروع نهائياً
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>تراجع</AlertDialogCancel>
//           <AlertDialogAction
//           onClick={()=>{
//             toast({
//               title: "Scheduled: Catch up ",
//               description: "Friday, February 10, 2023 at 5:57 PM",
//               action: (
//                 <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
//               ),
//             })
//           }}
//           >حذف</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   )
// }
// const list =[
// {
//   id:"1",
//   name:"test",
//   description:"test",
//   cost:1000,
//   registered:false,
//   stage:"production",
// },
// {
//   id:"1",
//   name:"test",
//   description:"test",
//   cost:1000,
//   registered:true,
//   stage:"production",
  
// }
// ];