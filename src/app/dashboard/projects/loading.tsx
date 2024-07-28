import { IconCopy, IconEye, IconPlus } from "@tabler/icons-react";
import { Badge } from "~/components/ui/badge";
import { Skeleton } from "~/components/ui/skeleton";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex items-center justify-between w-full p-4">
                <div className="flex items-center space-x-2">
                    <IconPlus />
                    <span>اضافة مشروع</span>
                </div>
            </div>
            <div className="flex flex-wrap w-full h-full p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>المشروع</TableHead>
                            <TableHead>المرحلة</TableHead>
                            <TableHead>الميزانية</TableHead>
                            <TableHead>التسجيل</TableHead>
                            <TableHead>التحكم</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className="flex flex-col space-x-2">
                                        <Skeleton >loading...</Skeleton>
                                        <Skeleton className="text-xs text-gray-500">loading...</Skeleton>
                                    </div>
                                </TableCell>
                                <TableCell>loading...</TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <Skeleton>loading...</Skeleton>
                                        
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="default">loading...</Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <Skeleton ><IconEye size={18} /></Skeleton>
                                        &nbsp;
                                        <Skeleton ><IconCopy size={18} /></Skeleton>
                                        &nbsp;
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