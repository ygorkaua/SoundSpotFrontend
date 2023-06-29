import Header from "../Header";
import Footer from "../Footer";

function Layout(props: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />  
    </>
  );
}

export default Layout;