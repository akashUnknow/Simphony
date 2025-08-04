import { MoreHorizontal, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const columns = (editingRowId, setEditingRowId, editedData, setEditedData, setData) => [
  {
    accessorKey: "Fs no",
    header: "Fs No",
    cell: ({ row }) =>
      row.original.id === editingRowId ? (
        <Input
          value={editedData["Fs no"] || ""}
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, "Fs no": e.target.value }))
          }
        />
      ) : (
        row.getValue("Fs no")
      ),
  },
  {
    accessorKey: "Profile",
    header: "Profile",
    cell: ({ row }) =>
      row.original.id === editingRowId ? (
        <Input
          value={editedData["Profile"] || ""}
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, Profile: e.target.value }))
          }
        />
      ) : (
        row.getValue("Profile")
      ),
  },
  {
    accessorKey: "Partner code",
    header: "Partner Code",
    cell: ({ row }) =>
      row.original.id === editingRowId ? (
        <Input
          value={editedData["Partner code"] || ""}
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, "Partner code": e.target.value }))
          }
        />
      ) : (
        row.getValue("Partner code")
      ),
  },
  {
    accessorKey: "configurator",
    header: "Configurator",
    cell: ({ row }) =>
      row.original.id === editingRowId ? (
        <Input
          value={editedData["configurator"] || ""}
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, configurator: e.target.value }))
          }
        />
      ) : (
        row.getValue("configurator")
      ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) =>
      row.original.id === editingRowId ? (
        <Select
          value={editedData.status || ""}
          onValueChange={(value) =>
            setEditedData((prev) => ({ ...prev, status: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="review">Review</SelectItem>
            <SelectItem value="hold">Hold</SelectItem>
            <SelectItem value="configuration">Configuration</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
          </SelectContent>
        </Select>
      ) : (
        row.getValue("status")
      ),
  },
  {
    accessorKey: "region",
    header: "Region",
    cell: ({ row }) => row.getValue("region"), // not editable
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const isEditing = editingRowId === row.original.id;
      return isEditing ? (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="success"
            onClick={() => {
              const updatedRow = { ...row.original, ...editedData };
              setData((prev) => {
                const updated = prev.map((item) =>
                  item.id === row.original.id ? updatedRow : item
                );
                localStorage.setItem("profileData", JSON.stringify(updated));
                return updated;
              });
              setEditedData({});
              setEditingRowId(null);
            }}
          >
            Save
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setEditingRowId(null);
              setEditedData({});
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <Button
          size="sm"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation(); // prevent row navigation
            setEditingRowId(row.original.id);
            setEditedData(row.original);
          }}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      );
    },
  },
];
