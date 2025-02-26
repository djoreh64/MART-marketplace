"use client";

import AuthModal from "@components/shared/authModal";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const pathname = usePathname();
  return <>{pathname === "/login" && <AuthModal />}</>;
}
