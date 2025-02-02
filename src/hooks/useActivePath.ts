import { usePathname } from "next/navigation";

export default function useActivePath(path: string) {
  const pathname = usePathname();
  return pathname === path;
}
