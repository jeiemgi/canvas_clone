import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";

function Layout({ children }: { children: React.ReactNode }) {
  // useLayoutEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 0.5,
  //     effects: true,
  //   });
  // }, []);

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
