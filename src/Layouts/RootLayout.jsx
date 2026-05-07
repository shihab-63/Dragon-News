import { Outlet } from "react-router";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Container from "../Components/Container/Container";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Navbar/Navbar";
import LeftAside from "./HomeLayouts/LeftAside";
import RightAside from "./HomeLayouts/RightAside";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <section>
          <Header />
        </section>
        <section>
          <Container>
            <LatestNews />
          </Container>
        </section>
        <nav className="py-5">
          <Container>
            <Navbar />
          </Container>
        </nav>
      </header>
      <main className="flex-1 w-11/12 mx-auto grid grid-cols-12 gap-12 ">
        <aside className="col-span-2">
          <LeftAside />
        </aside>
        <section className="col-span-8">
          <Outlet />
        </section>
        <aside className="col-span-2">
          <RightAside />
        </aside>
      </main>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
