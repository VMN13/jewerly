import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="app-main product-fullscreen">{children}</main>;
}
