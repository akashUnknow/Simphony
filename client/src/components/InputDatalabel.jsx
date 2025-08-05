import { Input } from "@/components/ui/input"

export function InputDatalabel(props) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {props.label || "Data Input"}
      </label>
      <Input
        {...props}
        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm w-sm"
      />
    </div>
  )
}
