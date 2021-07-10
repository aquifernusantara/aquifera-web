import Footer from '../Footer';
import Header from '../Header';
import { LayoutProps } from './layout.model';
import { StyledLayout } from './layout.styled';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
