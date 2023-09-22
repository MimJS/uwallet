export interface TransferUserData {
  id: number;
}

export interface TransferData {
  id: number;
  status: "completed" | "progress" | "error";
  type: "add" | "remove";
  category: "transfer" | "gift";
  sum: number;
  userData?: TransferUserData;
}

export interface TransferHistoryCellProps {
  className?: string;
  onClick?: (transferId: number) => void;
  transferData: TransferData;
}
