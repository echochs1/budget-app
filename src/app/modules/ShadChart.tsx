"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { day: "1", curr_month: 0, prev_month: 0 },
  { day: "2", curr_month: 119, prev_month: 0 },
  { day: "3", curr_month: 119, prev_month: 14.63 },
  { day: "4", curr_month: 313.14, prev_month: 164.63 },
  { day: "5", curr_month: 313.14, prev_month: 164.63 },
  { day: "6", curr_month: 300.15, prev_month: 196.1 },
  { day: "7", curr_month: 300.15, prev_month: 307.72 },
  { day: "8", curr_month: 300.15, prev_month: 307.72 },
  { day: "9", curr_month: 330.22, prev_month: 317.72 },
  { day: "10", curr_month: 330.22, prev_month: 317.72 },
  { day: "11", curr_month: 369.45, prev_month: 317.72 },
  { day: "12", curr_month: 369.45, prev_month: 317.72 },
  { day: "13", curr_month: 372.45, prev_month: 336.32 },
  { day: "14", curr_month: null, prev_month: 336.32 },
  { day: "15", curr_month: null, prev_month: 342.98 },
  { day: "16", curr_month: null, prev_month: 370.52 },
  { day: "17", curr_month: null, prev_month: 376.52 },
  { day: "18", curr_month: null, prev_month: 1011.98 },
  { day: "19", curr_month: null, prev_month: 1011.98 },
  { day: "20", curr_month: null, prev_month: 1486.12 },
  { day: "21", curr_month: null, prev_month: 1486.12 },
  { day: "22", curr_month: null, prev_month: 1486.12 },
  { day: "23", curr_month: null, prev_month: 1486.12 },
  { day: "24", curr_month: null, prev_month: 1486.12 },
  { day: "25", curr_month: null, prev_month: 1486.12 },
  { day: "26", curr_month: null, prev_month: 1486.12 },
  { day: "27", curr_month: null, prev_month: 1498.85 },
  { day: "28", curr_month: null, prev_month: 1498.85 },
  { day: "29", curr_month: null, prev_month: 1511.84 },
  { day: "30", curr_month: null, prev_month: 1511.84 },
  { day: "31", curr_month: null, prev_month: 1544.19 },
]

const chartConfig = {
  curr_month: {
    label: "This Month",
    color: "hsl(var(--chart-1))",
  },
  prev_month: {
    label: "Last Month",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ShadChart() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Current spend this month</CardDescription>
        <CardTitle>$350</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="curr_month"
              type="monotone"
              stroke="blue"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="prev_month"
              type="monotone"
              stroke="grey"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Payday in 1 day
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
