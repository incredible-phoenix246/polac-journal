import { Footer } from "components/navigation/footer";
import { Header } from "components/navigation/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow lg:mt-16 mt-6">{children}</main>
      <Footer />
    </div>
  );
}
