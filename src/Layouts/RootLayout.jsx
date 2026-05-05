import { Outlet } from "react-router";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Container from "../Components/Container/Container";
import LatestNews from "../Components/LatestNews/LatestNews";

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
      </header>
      <main className="flex-1">
        <section></section>
        <section>
          <Outlet />
        </section>
        <section></section>
      </main>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
