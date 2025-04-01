import { Skeleton } from "@/components/ui/skeleton"

export default function CollegeNotesLoading() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        <Skeleton className="h-12 w-3/4 max-w-md" />
        <Skeleton className="h-6 w-2/3 max-w-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
      </div>
    </div>
  )
}

