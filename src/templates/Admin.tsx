import type { ReactNode } from 'react';

import Footer from '@/components/footer';
import SideBar from '@/components/sidebar';
import { Main } from '@/templates/Main';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Admin = (props: IMainProps) => (
  <Main meta={props.meta}>
    <div className="min-h-full">
      <SideBar />
      <div className="flex flex-1 flex-col md:pl-64">
        <main className="flex-1">
          <div className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 md:px-8">
            {props.children}
          </div>

          <Footer />
        </main>
      </div>
    </div>
  </Main>
);

export { Admin };
