//Css
import "./globals.css";

//Font
import { Montserrat } from "next/font/google";

//Authentication
import AuthContext from "@/app/components/AuthContext/AuthContext.jsx";

//Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AiMathics",
  description: "Math with passion",
};

export default function Layout({ children }) {
  return (
    <html>
      <body className={montserrat.className}>
        <AuthContext>
          <div className="overflow-clip] relative m-auto flex min-h-screen max-w-[1536px] flex-col justify-between">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
