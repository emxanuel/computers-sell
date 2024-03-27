import { Card, Skeleton } from "@nextui-org/react";

export default function ProductSkeleton() {
    return (
        <Card className="w-[300px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-40 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-full rounded-lg">
                    <div className="h-3 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
}
