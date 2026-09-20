import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleHelp, Send } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import { Card, CardContent } from '@/components/ui/card'

// import {
//   reportIssueSchema,
//   type ReportIssueFormValues,
// } from '../schemas/auth.schema'

const issueTypes = [
  {
    label: 'Delivery Issue',
    value: 'delivery',
  },
  {
    label: 'Payment Issue',
    value: 'payment',
  },
  {
    label: 'Product Issue',
    value: 'product',
  },
  {
    label: 'Order Issue',
    value: 'order',
  },
  {
    label: 'Other',
    value: 'other',
  },
]

export default function Report() {
  const form = useForm<ReportIssueFormValues>({
    // resolver: zodResolver(reportIssueSchema),
    defaultValues: {
      issueType: '',
      orderNumber: '',
      description: '',
    },
  })

  const onSubmit = (data: ReportIssueFormValues) => {
    console.log(data)
  }

  return (
    <Card className="rounded-md border-0 bg-[#f7fbfd] shadow-none font-inter">
      <CardContent className="p-5">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-2">
          <CircleHelp size={19} className="text-app-main" />

          <h2 className="text-md font-medium text-app-main">Report an Issue</h2>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
          {/* Issue Type */}
          <Controller
            name="issueType"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1.5">
                <Label htmlFor="issue-type" className="text-xs font-medium text-app-main">
                  Issue Type
                </Label>

                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="issue-type"
                    className="
                      h-10!
                      rounded-md
                      border-slate-200
                      bg-white
                      text-sm
                      text-slate-600
                      shadow-none
                      focus:ring-1
                      focus:ring-app-main/20
                     
                    "
                  >
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>

                  <SelectContent>
                    {issueTypes.map((issue) => (
                      <SelectItem key={issue.value} value={issue.value} className="text-sm">
                        {issue.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Order Number */}
          <Controller
            name="orderNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1.5">
                <Label htmlFor="order-number" className="text-xs font-medium text-app-main">
                  Order Number <span className="text-slate-400">(Optional)</span>
                </Label>

                <Input
                  {...field}
                  id="order-number"
                  placeholder="#GP20251126001"
                  className="
                    h-9
                    rounded-md
                    border-slate-200
                    bg-white
                    text-sm
                    shadow-none
                    placeholder:text-slate-400
                    focus:border-app-main
                    focus:ring-1
                    focus:ring-app-main/20
                  "
                />

                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Description */}
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-1.5">
                <Label htmlFor="description" className="text-xs font-medium text-app-main">
                  Description
                </Label>

                <Textarea
                  {...field}
                  id="description"
                  placeholder="Please describe your issue..."
                  className="
                    min-h-23
                    resize-none
                    rounded-md
                    border-slate-300
                    bg-white
                    text-sm
                    
                    placeholder:text-slate-400
                    focus:border-app-main!
                    focus:ring-1
                    focus:ring-app-main/20
                    
                  "
                />

                {fieldState.error && (
                  <p className="text-xs text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="
              h-10
              text-md
                px-6
            "
          >
            <Send className="mr-1.5 h-3.5 w-3.5" />
            Report
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
