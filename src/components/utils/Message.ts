// "use client"

export function ShowMessage(toast:any, message: string, isSuccess?: boolean) {
    toast({
        title: message,
        variant: isSuccess ? "success" : "destructive"
    })
}